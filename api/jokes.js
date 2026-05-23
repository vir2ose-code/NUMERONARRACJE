import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    const JOKES_KEY = 'user_uploaded_jokes';
    
    // Check if Vercel KV environment variables are injected
    const isKvAvailable = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

    if (!isKvAvailable) {
        // Return a custom header or status signaling the frontend to use localStorage fallback
        return res.status(200).json({ fallback: true, message: "KV Storage not configured yet. Using local fallback." });
    }

    if (req.method === 'GET') {
        try {
            const jokes = await kv.get(JOKES_KEY) || [];
            return res.status(200).json({ fallback: false, jokes });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch jokes from KV' });
        }
    }

    if (req.method === 'POST') {
        let body = req.body;
        if (typeof body === 'string') {
            try {
                body = JSON.parse(body);
            } catch (e) {
                // ignore parsing errors
            }
        }
        const { keyword, text } = body || {};
        if (!keyword || !text) {
            return res.status(400).json({ error: 'Missing keyword or text' });
        }
        try {
            const currentJokes = await kv.get(JOKES_KEY) || [];
            const newJoke = {
                id: Date.now(),
                keyword: keyword.trim(),
                text: text.trim(),
                date: new Date().toLocaleDateString('pl-PL')
            };
            const updatedJokes = [newJoke, ...currentJokes];
            await kv.set(JOKES_KEY, updatedJokes);
            return res.status(201).json({ fallback: false, joke: newJoke });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to save joke to KV' });
        }
    }
}
