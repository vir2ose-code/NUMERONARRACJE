export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  // 1. Safe detection of Vercel Cloud Environment Variable
  // SUB_MODE can be configured in Vercel Dashboard as "ON" or "OFF"
  const subMode = process.env.SUB_MODE || "OFF"; 

  // 2. Hybrid Response
  if (subMode === "ON") {
    return res.status(200).json({ 
      paywallActive: true, 
      price: "€4,99", 
      interval: "miesięcznie / monatlich" 
    });
  } else {
    // Default Beta phase / Local development fallback
    return res.status(200).json({ 
      paywallActive: false, 
      message: "Beta phase active. Enjoy unlimited access." 
    });
  }
}
