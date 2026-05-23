const fs = require('fs');
const path = require('path');

const ZODIAC_PL_TO_DE = {
  "Baran": "Widder",
  "Byk": "Stier",
  "Bliźnięta": "Zwillinge",
  "Rak": "Krebs",
  "Lew": "Löwe",
  "Panna": "Jungfrau",
  "Waga": "Waage",
  "Skorpion": "Skorpion",
  "Strzelec": "Schütze",
  "Koziorożec": "Steinbock",
  "Wodnik": "Wassermann",
  "Ryby": "Fische"
};

async function translateBatch(texts) {
  if (texts.length === 0) return [];
  const joined = texts.join(' ||| ');
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pl&tl=de&dt=t&q=${encodeURIComponent(joined)}`;
    const res = await fetch(url);
    const data = await res.json();
    const translatedStr = data[0].map(item => item[0]).join('');
    // Split by ||| keeping in mind that spaces might be added around it
    const parts = translatedStr.split(/\s*\|\|\|\s*/);
    return parts;
  } catch (error) {
    console.error('Translation error:', error);
    return texts; // fallback
  }
}

async function run() {
  const plFilePath = path.join(__dirname, 'DANE DO KALKULATOROW', 'PL Fassung', 'dzisiejsza_prognoza.html');
  const deJsonPath = path.join(__dirname, 'DANE DO KALKULATOROW', 'DE Fassung', 'dni_de.json');
  
  if (!fs.existsSync(plFilePath)) {
    console.error('Polish HTML file not found!');
    return;
  }
  
  const content = fs.readFileSync(plFilePath, 'utf8');
  const match = content.match(/const DNI = ({[\s\S]*?});/);
  if (!match) return;
  
  let DNI_PL = eval('(' + match[1] + ')');
  const DNI_DE = {};
  
  // Load existing progress if any
  if (fs.existsSync(deJsonPath)) {
    Object.assign(DNI_DE, JSON.parse(fs.readFileSync(deJsonPath, 'utf8')));
  }
  
  const entries = Object.entries(DNI_PL).filter(([k,v]) => !DNI_DE[k]);
  console.log(`Found ${entries.length} entries remaining to translate.`);
  
  const BATCH_SIZE = 5; // 5 days at a time
  for (let i = 0; i < entries.length; i += BATCH_SIZE) {
    const batch = entries.slice(i, i + BATCH_SIZE);
    console.log(`Translating batch ${i/BATCH_SIZE + 1} of ${Math.ceil(entries.length/BATCH_SIZE)}...`);
    
    // Flatten texts
    let textsToTranslate = [];
    for (const [key, data] of batch) {
      if (data.e) textsToTranslate.push(data.e);
      if (data.r) textsToTranslate.push(data.r);
      if (data.n) textsToTranslate.push(data.n);
      if (data.u) textsToTranslate.push(data.u);
      if (data.s) textsToTranslate.push(data.s);
      if (data.fun) textsToTranslate.push(data.fun);
    }
    
    const translatedTexts = await translateBatch(textsToTranslate);
    
    // Reconstruct objects
    let textIndex = 0;
    for (const [key, data] of batch) {
      const deData = {
        z: ZODIAC_PL_TO_DE[data.z] || data.z,
        l: data.l
      };
      
      // Match back assuming order is preserved
      if (data.e) deData.e = translatedTexts[textIndex++] || data.e;
      if (data.r) deData.r = translatedTexts[textIndex++] || data.r;
      if (data.n) deData.n = translatedTexts[textIndex++] || data.n;
      if (data.u) deData.u = translatedTexts[textIndex++] || data.u;
      if (data.s) deData.s = translatedTexts[textIndex++] || data.s;
      if (data.fun) deData.fun = translatedTexts[textIndex++] || data.fun;
      
      DNI_DE[key] = deData;
    }
    
    fs.writeFileSync(deJsonPath, JSON.stringify(DNI_DE, null, 2), 'utf8');
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  console.log('Translation complete!');
}

run();
