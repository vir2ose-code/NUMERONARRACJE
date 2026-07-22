let currentCriticQuestion = 0;
let criticScores = new Array(28).fill(0);

// Answer options mapping based on points
const criticAnswerOptions = [
  { value: 0, key: "critic_ans_0" },
  { value: 1, key: "critic_ans_1" },
  { value: 2, key: "critic_ans_2" },
  { value: 3, key: "critic_ans_3" },
  { value: 4, key: "critic_ans_4" }
];

function startCriticTest() {
  document.getElementById('critic-screen-intro').style.display = 'none';
  document.getElementById('critic-screen-questions').style.display = 'block';
  document.getElementById('critic-screen-result').style.display = 'none';
  document.getElementById('critic-screen-loading').style.display = 'none';

  currentCriticQuestion = 0;
  criticScores.fill(0);
  
  // Ensure answers list is rendered only once if possible, or re-render
  renderCriticAnswers();
  showCriticQuestion();
}

function renderCriticAnswers() {
  const listContainer = document.getElementById('criticAnswersList');
  if (!listContainer) return;
  
  listContainer.innerHTML = '';
  
  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  const lang = window.currentLang || 'pl';

  criticAnswerOptions.forEach(opt => {
    let btnText = "Opcja";
    if (trans && trans[lang] && trans[lang][opt.key]) {
      btnText = trans[lang][opt.key];
    }

    const btn = document.createElement('button');
    btn.className = 'pers-answer-card'; // Reuse styling
    btn.onclick = () => answerCriticQuestion(opt.value);
    
    const textSpan = document.createElement('span');
    textSpan.className = 'text';
    textSpan.innerText = btnText;
    textSpan.setAttribute('data-i18n', opt.key); // For language switching
    
    btn.appendChild(textSpan);
    listContainer.appendChild(btn);
  });
}

function showCriticQuestion() {
  const qData = criticQuestions[currentCriticQuestion];
  const lang = window.currentLang || 'pl';
  
  const qTextEl = document.getElementById('criticQuestionText');
  if (qTextEl) {
    qTextEl.innerText = qData[lang] || qData['pl'];
  }

  // Update Progress
  const pct = Math.round((currentCriticQuestion / criticQuestions.length) * 100);
  const progFill = document.getElementById('criticProgressBarFill');
  if (progFill) progFill.style.width = pct + '%';

  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  const progText = document.getElementById('criticProgressText');
  if (progText) {
    let baseText = trans && trans[lang] && trans[lang]['critic_progress'] 
                   ? trans[lang]['critic_progress'] 
                   : "Pytanie {n} z {total}";
    progText.innerText = baseText.replace('{n}', currentCriticQuestion + 1).replace('{total}', criticQuestions.length);
  }
}

function answerCriticQuestion(value) {
  criticScores[currentCriticQuestion] = value;
  currentCriticQuestion++;

  if (currentCriticQuestion >= criticQuestions.length) {
    finishCriticTest();
  } else {
    // Show next
    showCriticQuestion();
  }
}

function finishCriticTest() {
  document.getElementById('critic-screen-questions').style.display = 'none';
  document.getElementById('critic-screen-loading').style.display = 'block';

  setTimeout(() => {
    calculateCriticResult();
  }, 1500); // 1.5s visual loading
}

function calculateCriticResult() {
  const sums = {};

  // Calculate sums per category
  for (const [key, catData] of Object.entries(criticCategories)) {
    let sum = 0;
    // catData.ids are 1-based, array index is 0-based
    catData.ids.forEach(qId => {
      sum += criticScores[qId - 1];
    });
    sums[key] = sum;
  }

  // Find dominant
  let dominantKey = null;
  let maxScore = -1;

  for (const [key, score] of Object.entries(sums)) {
    if (score > maxScore) {
      maxScore = score;
      dominantKey = key;
    }
  }

  const resultData = criticCategories[dominantKey];
  const lang = window.currentLang || 'pl';

  // Save to profile
  try {
    localStorage.setItem('userDominantCritic', JSON.stringify({
      key: dominantKey,
      score: maxScore,
      namePl: resultData.name['pl']
    }));
  } catch (e) {
    console.warn("Could not save dominant critic to localStorage");
  }

  // Update UI
  document.getElementById('critic-screen-loading').style.display = 'none';
  document.getElementById('critic-screen-result').style.display = 'block';

  document.getElementById('criticResultName').innerText = resultData.name[lang] || resultData.name['pl'];
  document.getElementById('criticResultAction').innerText = resultData.action[lang] || resultData.action['pl'];
  document.getElementById('criticResultIntent').innerText = resultData.intent[lang] || resultData.intent['pl'];

  // Calculate intensity text
  let intensityKey = "critic_intensity_low";
  if (maxScore > 9) intensityKey = "critic_intensity_high";
  else if (maxScore >= 7) intensityKey = "critic_intensity_mid";

  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  const intensityEl = document.getElementById('criticResultIntensity');
  if (intensityEl) {
    intensityEl.innerText = (trans && trans[lang] && trans[lang][intensityKey]) ? trans[lang][intensityKey] : `Wynik: ${maxScore}/16`;
    intensityEl.setAttribute('data-i18n', intensityKey);
  }
}

function restartCriticTest() {
  document.getElementById('critic-screen-intro').style.display = 'block';
  document.getElementById('critic-screen-questions').style.display = 'none';
  document.getElementById('critic-screen-result').style.display = 'none';
  document.getElementById('critic-screen-loading').style.display = 'none';
}

function refreshCriticLanguage() {
  const lang = window.currentLang || 'pl';
  const screenQuestions = document.getElementById('critic-screen-questions');
  const screenResult = document.getElementById('critic-screen-result');

  // Update answers
  renderCriticAnswers();

  if (screenQuestions && screenQuestions.style.display === 'block') {
    showCriticQuestion();
  }

  if (screenResult && screenResult.style.display === 'block') {
    // Re-fetch result based on saved profile or recalculate if sums are still in memory
    // Since sums might not be saved easily across refresh, we just re-run calculate if test is finished
    if (currentCriticQuestion >= criticQuestions.length) {
      calculateCriticResult();
    }
  }
}
