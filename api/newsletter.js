import fs from 'fs';
import path from 'path';

// Helper to load env variables from .env file for local testing fallback
function loadLocalEnv() {
  try {
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const match = line.match(/^\s*MAILERLITE_API_KEY\s*=\s*(.*)\s*$/);
        if (match) {
          return match[1].trim();
        }
      }
    }
  } catch (e) {
    // ignore
  }
  return null;
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const isDev = process.env.NODE_ENV === 'development' || !process.env.VERCEL_ENV;

  // 1. Validate API Key configuration (with local fallback)
  const apiKey = process.env.MAILERLITE_API_KEY || loadLocalEnv();
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('placeholder')) {
    console.error('[Newsletter API Error] MAILERLITE_API_KEY is not configured in environment variables or .env file.');
    return res.status(500).json({ 
      error: isDev 
        ? 'MAILERLITE_API_KEY is not configured. Please add it to your environment variables or local .env file.'
        : 'Usługa tymczasowo niedostępna. Skontaktuj się z administratorem.' 
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

  // 4. Determine API version based on Key format
  const isV3 = apiKey.trim().startsWith('eyJ');
  const targetGroupId = groupId || process.env.MAILERLITE_GROUP_ID;

  let endpoint = '';
  let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  let payload = {};

  if (isV3) {
    // MailerLite v3 Connect API
    endpoint = 'https://connect.mailerlite.com/api/subscribers';
    headers['Authorization'] = `Bearer ${apiKey.trim()}`;

    payload = {
      email: trimmedEmail,
      status: 'active'
    };

    // Construct fields object
    const fieldsPayload = {};
    if (name && typeof name === 'string' && name.trim() !== '') {
      fieldsPayload.name = name.trim();
    }
    if (fields && typeof fields === 'object') {
      Object.assign(fieldsPayload, fields);
    }
    if (Object.keys(fieldsPayload).length > 0) {
      payload.fields = fieldsPayload;
    }

    if (targetGroupId) {
      payload.groups = [String(targetGroupId)];
    }
  } else {
    // MailerLite v2 Legacy API
    endpoint = targetGroupId 
      ? `https://api.mailerlite.com/api/v2/groups/${targetGroupId}/subscribers`
      : `https://api.mailerlite.com/api/v2/subscribers`;

    headers['X-MailerLite-ApiKey'] = apiKey.trim();

    payload = {
      email: trimmedEmail,
      type: 'active',
      resubscribe: true
    };

    if (name && typeof name === 'string' && name.trim() !== '') {
      payload.name = name.trim();
    }

    if (fields && typeof fields === 'object') {
      payload.fields = fields;
    }
  }

  // Log payload details in development for debugging
  console.log('[Newsletter API Request]', {
    endpoint,
    headers: {
      ...headers,
      'Authorization': headers['Authorization'] ? 'Bearer ***' : undefined,
      'X-MailerLite-ApiKey': headers['X-MailerLite-ApiKey'] ? '***' : undefined
    },
    payload
  });

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 seconds timeout

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const responseData = await response.json().catch(() => ({}));

    console.log('[Newsletter API Response]', {
      status: response.status,
      data: responseData
    });

    // 6. Handle API Responses & Error States
    if (!response.ok) {
      console.error('[MailerLite API Error Details]', {
        status: response.status,
        data: responseData,
        isV3
      });

      if (response.status === 401) {
        return res.status(500).json({ error: 'Błąd uwierzytelnienia z dostawcą newslettera. Sprawdź klucz API.' });
      }
      if (response.status === 429) {
        return res.status(429).json({ error: 'Zbyt wiele zapytań. Spróbuj ponownie później.' });
      }

      // Check if duplicate subscriber
      const apiMessage = (responseData.error?.message || responseData.message || '').toLowerCase();
      if (apiMessage.includes('already exists') || response.status === 409) {
        return res.status(200).json({ 
          success: true, 
          message: 'Adres email był już zapisany w bazie.',
          status: 'updated'
        });
      }

      return res.status(response.status).json({ 
        error: responseData.error?.message || responseData.message || 'Nie udało się zapisać do newslettera.' 
      });
    }

    const subscriberData = responseData.data || responseData;

    return res.status(201).json({
      success: true,
      message: 'Pomyślnie zapisano do newslettera.',
      subscriber: {
        id: subscriberData.id,
        email: subscriberData.email,
        name: subscriberData.fields?.name || subscriberData.name
      }
    });

  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('[Newsletter API Error] Request to MailerLite timed out.');
      return res.status(504).json({ error: 'Przekroczono limit czasu oczekiwania na odpowiedź serwera.' });
    }
    
    console.error('[Newsletter API Error] Uncaught connection error:', error);
    return res.status(500).json({ error: 'Wystąpił nieoczekiwany błąd połączenia z API MailerLite.' });
  }
}
