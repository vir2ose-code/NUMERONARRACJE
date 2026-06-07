/**
 * Secure Serverless Function for newsletter sign-up using MailerLite API v2
 * Endpoint: /api/newsletter
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // 1. Validate API Key configuration
  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('placeholder')) {
    console.error('[Newsletter API Error] MAILERLITE_API_KEY is not configured or is a placeholder.');
    return res.status(500).json({ 
      error: 'Usługa tymczasowo niedostępna. Skontaktuj się z administratorem.' 
    });
  }

  // 2. Parse request body
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      return res.status(400).json({ error: 'Nieprawidłowy format JSON.' });
    }
  }

  const { email, name, groupId, fields } = body || {};

  // 3. Robust Email Validation
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Adres email jest wymagany.' });
  }

  const trimmedEmail = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return res.status(400).json({ error: 'Podany adres email jest nieprawidłowy.' });
  }

  // 4. Construct payload for MailerLite
  const payload = {
    email: trimmedEmail,
    type: 'active', // 'active' ensures the subscriber is active
    resubscribe: true
  };

  if (name && typeof name === 'string' && name.trim() !== '') {
    payload.name = name.trim();
  }

  if (fields && typeof fields === 'object') {
    payload.fields = fields;
  }

  // 5. Select appropriate MailerLite API Endpoint
  // If groupId is provided (either via request body or fallback environment variable), 
  // add the subscriber to that specific group. Otherwise, add to general subscribers.
  const targetGroupId = groupId || process.env.MAILERLITE_GROUP_ID;
  const baseUrl = 'https://api.mailerlite.com/api/v2';
  const endpoint = targetGroupId 
    ? `${baseUrl}/groups/${targetGroupId}/subscribers`
    : `${baseUrl}/subscribers`;

  try {
    // 6. Execute POST request with timeout handling
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds timeout

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': apiKey.trim()
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const responseData = await response.json().catch(() => ({}));

    // 7. Handle API Responses & Error Handling
    if (!response.ok) {
      console.error('[MailerLite API Error]', {
        status: response.status,
        data: responseData
      });

      // Special handling of common API error states
      if (response.status === 401) {
        return res.status(500).json({ error: 'Błąd uwierzytelnienia z dostawcą newslettera.' });
      }
      if (response.status === 429) {
        return res.status(429).json({ error: 'Zbyt wiele zapytań. Spróbuj ponownie później.' });
      }

      // Check for MailerLite specific validation or duplicate errors
      const apiMessage = responseData.error?.message || '';
      if (apiMessage.toLowerCase().includes('already exists') || response.status === 409) {
        return res.status(200).json({ 
          success: true, 
          message: 'Adres email był już zapisany w bazie.',
          status: 'updated'
        });
      }

      return res.status(response.status).json({ 
        error: responseData.error?.message || 'Nie udało się zapisać do newslettera.' 
      });
    }

    // Success response
    return res.status(201).json({
      success: true,
      message: 'Pomyślnie zapisano do newslettera.',
      subscriber: {
        id: responseData.id,
        email: responseData.email,
        name: responseData.name
      }
    });

  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('[Newsletter API Error] Request to MailerLite timed out.');
      return res.status(504).json({ error: 'Przekroczono limit czasu oczekiwania na odpowiedź serwera.' });
    }
    
    console.error('[Newsletter API Error] Uncaught connection error:', error);
    return res.status(500).json({ error: 'Wystąpił nieoczekiwany błąd połączenia.' });
  }
}
