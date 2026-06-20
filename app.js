let currentLang = 'pl'; // Default language

const birthPathDescriptions = {
  pl: {
    1: {
      archetype: "1 - Pionier",
      desc: "Jesteś wrodzonym liderem i pionierem, który zawsze podąża własną ścieżką, wykazując się żelazną wolą oraz determinacją w realizacji oryginalnych celów. Twoja autentyczność naturalnie przyciąga i inspiruje ludzi, a moc Twojego słowa potrafi motywować innych do działania. Największym wyzwaniem na Twojej drodze jest wewnętrzny perfekcjonizm, ukryta niepewność prowadząca do walki o kontrolę oraz chęć dominacji w trudnych chwilach. Twoją życiową misją jest pokazywanie innym, że niemożliwe nie istnieje, oraz uczenie odwagi do bycia w pełni sobą."
    },
    2: {
      archetype: "2 - Mediator",
      desc: "Jako urodzony dyplomata i mediator posiadasz niezwykłą intuicję oraz wrażliwość, które pozwalają Ci bezbłędnie wyczuwać emocje innych ludzi i budować trwałe mosty porozumienia. Niesiesz ciepło i troskę, tworząc bezpieczną przestrzeń do współpracy wszędzie tam, gdzie inni wolą rywalizować. Twoim głównym wyzwaniem jest unikanie konfrontacji, zatracanie własnych granic w tzw. syndromie pomocnika oraz ukryta niepewność, z którą musisz pracować. Twoją misją jest osiągnięcie balansu i nauczenie się wspierania innych bez poświęcania własnych potrzeb na rzecz otoczenia."
    },
    3: {
      archetype: "3 - Artysta Życia",
      desc: "Jesteś uosobieniem radości życia i naturalnym artystą, który potrafi rozświetlić każde miejsce oraz wyrazić siebie poprzez zaraźliwy optymizm, słowa lub muzykę. Posiadasz niezwykłą łatwość nawiązywania kontaktów, będąc prawdziwym mostem łączącym ludzkie serca. Twoim wyzwaniem są jednak emocjonalne skrajności, nadwrażliwość na krytykę oraz pokusa noszenia masek w celu przypodobania się otoczeniu. Misją Twojej drogi jest dawanie autentycznej, szczerej miłości oraz pokazywanie światu piękna i radości w ich najgłębszym wymiarze."
    },
    4: {
      archetype: "4 - Budowniczy",
      desc: "Stanowisz solidny fundament każdego przedsięwzięcia, budując trwałe podstawy krok po kroku dzięki swojej żelaznej cierpliwości i rzetelności. Twoja lojalność oraz wrodzone talenty organizacyjne sprawiają, że jesteś dla innych bezwarunkową oazą bezpieczeństwa i zaufania. Największym wyzwaniem, z którym przychodzi Ci się mierzyć, jest lęk przed zmianami, upór oraz skłonność do zamykania się w strefie komfortu z powodu błędów z przeszłości. Twoją misją jest dawanie światu stabilności i pokazywanie własnym przykładem, że konsekwentna, codzienna praca przynosi trwałe owoce."
    },
    5: {
      archetype: "5 - Podróżnik",
      desc: "Jesteś wibracją nieustannego ruchu, wszechstronności i niezmierzonej ciekawości świata, dla którego wolność stanowi absolutny warunek do życia. Jako charyzmatyczny obserwator i intuicyjny psychoanalityk, potrafisz doskonale czytać ludzi oraz adaptować się do każdych warunków. Twoim głównym wyzwaniem jest skłonność do rozpraszania energii, brak konsekwencji oraz ryzyko przekraczania granic własnych i cudzych w imię źle pojętej niezależności. Misja, jaka przed Tobą stoi, to inicjowanie głębokich transformacji w świecie oraz pokazywanie innym, że zmiana jest naturalną szansą na rozwój."
    },
    6: {
      archetype: "6 - Opiekun",
      desc: "Jesteś uosobieniem ciepła, harmonii oraz troski, dbającym o to, aby każda przestrzeń wokół Ciebie tętniła miłością i poczuciem estetyki. Twoja głęboka odpowiedzialność, rzetelność oraz idealizm czynią z Ciebie bezcenną opokę, na której bliscy mogą zawsze bezgranicznie polegać. Największą pułapką na Twojej drodze jest zacieranie granic między wspieraniem innych a zatracaniem siebie oraz nadmierna, perfekcjonistyczna kontrola. Twoją misją jest odnalezienie pełnej równowagi między dawaniem a przyjmowaniem oraz otoczenie samego siebie taką samą troską, jaką ofiarujesz światu."
    },
    7: {
      archetype: "7 - Filozof",
      desc: "Jako urodzony poszukiwacz, filozof i mistyk w jednej osobie, żyjesz na poziomie głębokiej analizy oraz mądrości, która wykracza poza standardową wiedzę książkową. Posiadasz niezwykle bogaty świat wewnętrzny, a Twoje analityczne myślenie i duchowość potrafią wskazać drogę innym ludziom. Największym wyzwaniem jest dystans, który bywa murem odcinającym Cię od autentycznych relacji, a także skłonność do nadmiernego komplikowania spraw i braku zaufania. Twoją misją jest dzielenie się swoją wyjątkową wiedzą oraz otwarcie się na przyjmowanie dobra, które życie pragnie Ci zaoferować."
    },
    8: {
      archetype: "8 - Autorytet",
      desc: "Reprezentujesz niezwykle potężną, cichą siłę działania oraz niezłomną wolę, która pozwala Ci podnosić się z każdej porażki z wysoko uniesioną głową. Jako naturalny przywódca i wizjoner posiadasz wybitny talent organizacyjny oraz głęboki kręgosłup moralny, oparty na wewnętrznej etyce. Twoim wyzwaniem jest unikanie dominacji nad innymi, pracoholizmu oraz toksycznego podejścia do sukcesu materialnego kosztem sfery duchowej czy zdrowia. Twoją misją jest sprawiedliwe i uczciwe korzystanie ze swojej władzy oraz wzmacnianie tych osób, które same nie potrafią jeszcze wstać."
    },
    9: {
      archetype: "9 - Misjonarz",
      desc: "Nosisz w sobie sumę wszystkich życiowych doświadczeń oraz głęboką empatię, co czyni Cię naturalnym nauczycielem, doradcą i przewodnikiem dla innych. Posiadasz ogromną mądrość oraz wrodzone poczucie odpowiedzialności za dobrostan całego otaczającego Cię świata. Twoim cieniem może być jednak poczucie wszechwiedzy, tendencja do ratowania ludzi na siłę oraz pouczanie ich bez wyraźnej prośby. Twoją misją jest bezinteresowna służba ludzkości oparta na głębokiej miłości, a także nauka pełnej akceptacji innych oraz samego siebie."
    }
  },
  de: {
    1: {
      archetype: "1 - Der Pionier",
      desc: "Du bist ein geborener Anführer und Pionier, der stets seinen eigenen Weg geht und dabei eisernen Willen sowie Entschlossenheit bei der Umsetzung origineller Ziele zeigt. Deine Authentizität zieht Menschen an und inspiriert sie auf natürliche Weise, und die Macht deiner Worte kann andere zum Handeln motivieren. Die größte Herausforderung auf deinem Weg ist dein innerer Perfektionismus, eine verborgene Unsicherheit, die zu Kontrollzwang führt, sowie das Bedürfnis nach Dominanz in schwierigen Momenten. Deine Lebensaufgabe ist es, anderen zu zeigen, dass das Unmögliche nicht existiert, und sie zu lehren, den Mut zu haben, ganz sie selbst zu sein."
    },
    2: {
      archetype: "2 - Der Mediator",
      desc: "Als geborener Diplomat und Mediator besitzt du eine außergewöhnliche Intuition und Feinfühligkeit, die es dir ermöglichen, die Emotionen anderer Menschen fehlerfrei wahrzunehmen und dauerhafte Brücken des Verständnisses zu bauen. Du bringst Wärme und Fürsorge und schaffst überall dort einen sicheren Raum für Zusammenarbeit, wo andere lieber konkurrieren. Deine größte Herausforderung liegt im Vermeiden von Konfrontationen, dem Verlust eigener Grenzen im sogenannten Helfer-Syndrom und einer tief sitzenden Unsicherheit, mit der du arbeiten musst. Deine Mission ist es, ein echtes Gleichgewicht zu finden und zu lernen, andere zu unterstützen, ohne deine eigenen Bedürfnisse für dein Umfeld aufzuopfern."
    },
    3: {
      archetype: "3 - Der Lebenskünstler",
      desc: "Du bist die Verkörperung der Lebensfreude und ein geborener Künstler, der jeden Ort erhellen und sich durch ansteckenden Optimismus, Worte oder Musik ausdrücken kann. Du besitzt eine außergewöhnliche Leichtigkeit, Kontakte zu knüpfen, und bist eine wahre Brücke zwischen den Herzen. Deine Herausforderung sind jedoch emotionale Extreme, Überempfindlichkeit gegenüber Kritik und die Versuchung, Masken zu tragen, um anderen zu gefallen. Die Mission deines Weges ist es, authentische, aufrichtige Liebe zu schenken und der Welt Schönheit und Freude in ihrer tiefsten Dimension zu zeigen."
    },
    4: {
      archetype: "4 - Der Erbauer",
      desc: "Du bist das solide Fundament jedes Vorhabens und baust dank deiner eisernen Geduld und Zuverlässigkeit Schritt für Schritt dauerhafte Grundlagen auf. Deine Loyalität und deine angeborenen organisatorischen Talente machen dich zu einer bedingungslosen Oase der Sicherheit und des Vertrauens für andere. Die größte Herausforderung, der du dich stellen musst, ist die Angst vor Veränderungen, Starrsinn und die Neigung, dich aufgrund von Fehlern der Vergangenheit in deiner Komfortzone zu verschließen. Deine Mission ist es, der Welt Stabilität zu geben und durch dein eigenes Beispiel zu zeigen, dass konsequente, tägliche Arbeit dauerhafte Früchte trägt."
    },
    5: {
      archetype: "5 - Der Reisende",
      desc: "Du bist eine Schwingung ständiger Bewegung, Vielseitigkeit und unermesslicher Neugier auf die Welt, für die Freiheit eine absolute Lebensbedingung darstellt. Als charismatischer Beobachter und intuitiver Psychoanalytiker kannst du Menschen perfekt lesen und dich an jede Situation anpassen. Deine größte Herausforderung ist die Neigung, deine Energie zu zerstreuen, mangelnde Konsequenz sowie das Risiko, eigene und fremde Grenzen im Namen einer falsch verstandenen Unabhängigkeit zu überschreiten. Deine Mission ist es, tiefgreifende Veränderungen in der Welt anzustoßen und anderen zu zeigen, dass Veränderung eine natürliche Chance für Wachstum ist."
    },
    6: {
      archetype: "6 - Der Beschützer",
      desc: "Du bist die Verkörperung von Wärme, Harmonie und Fürsorge und sorgst dafür, dass jeder Raum um dich herum voller Liebe und Ästhetik ist. Deine tiefe Verantwortung, Zuverlässigkeit und dein Idealismus make dich zu einer unschätzbaren Stütze, auf die sich deine Lieben immer bedingungslos verlassen können. Die größte Falle auf deinem Weg ist das Verwischen der Grenzen zwischen der Unterstützung anderer und der Selbstaufgabe sowie eine übermäßige, perfektionistische Kontrolle. Deine Mission ist es, ein echtes Gleichgewicht zwischen Geben und Nehmen zu finden und dich selbst mit der gleichen Fürsorge zu umgeben, die du der Welt schenkst."
    },
    7: {
      archetype: "7 - Der Philosoph",
      desc: "Als geborener Sucher, Philosoph und Mystiker in einer Person lebst du auf der Ebene tiefer Analyse und Weisheit, die weit über das übliche Buchwissen hinausgeht. Du besitzt eine außergewöhnlich reiche innere Welt, und dein analytisches Denken und deine Spiritualität können anderen Menschen den Weg weisen. Die größte Herausforderung ist jedoch die Distanz, die eine Mauer sein kann, die dich von authentischen Beziehungen abschneidet, sowie die Neigung, Dinge unnötig zu komplizieren und an Vertrauen mangeln zu lassen. Deine Mission ist es, dein außergewöhnliches Wissen zu teilen und dich für das Gute zu öffnen, das das Leben dir schenken möchte."
    },
    8: {
      archetype: "8 - Die Autorität",
      desc: "Du repräsentierst eine ungemein kraftvolle, stille Kraft des Handelns und einen unbezwingbaren Willen, der es dir ermöglicht, nach jeder Niederlage erhobenen Hauptes wieder aufzustehen. Als natürlicher Anführer und Visionär besitzt du ein hervorragendes organisatorisches Talent und ein tiefes moralisches Rückgrat, das auf innerer Ethik basiert. Deine Herausforderung besteht darin, Dominanz über andere, Arbeitssucht und einen toxischen Umgang mit materiellem Erfolg auf Kosten der spirituellen Sphäre oder der Gesundheit zu vermeiden. Deine Mission ist es, deine Macht fair und ehrlich einzusetzen und diejenigen zu stärken, die selbst noch nicht aufstehen können."
    },
    9: {
      archetype: "9 - Der Missionar",
      desc: "Du trägst die Summe aller Lebenserfahrungen und ein tiefes Mitgefühl in dir, was dich zu einem natürlichen Lehrer, Berater und Wegweiser für andere macht. Du besitzt eine enorme Weisheit und ein angeborenes Verantwortungsgefühl für das Wohlergehen der gesamten Welt um dich herum. Dein Schatten kann jedoch ein Gefühl der Allwissenheit sein, die Tendenz, Menschen mit Gewalt retten zu wollen, und sie ungebeten zu belehren. Deine Mission ist der selbstlose Dienst an der Menschheit, der auf tiefer Liebe basiert, sowie das Erlernen der vollen Akzeptanz anderer und deiner selbst."
    }
  }
};

// ── i18n Logic ──
function switchLang(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('selectedLang', lang);
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }
  
  // Update UI language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');

  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  
  // Translate static text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans && trans[lang] && trans[lang][key]) {
      el.innerHTML = trans[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (trans && trans[lang] && trans[lang][key]) {
      el.placeholder = trans[lang][key];
    }
  });

  // Re-calculate if a result is currently shown to update its language
  const dateVal = document.getElementById('birthDate') ? document.getElementById('birthDate').value : null;
  const resultPanel = document.getElementById('resultCalculators');
  if (dateVal && resultPanel && resultPanel.classList.contains('visible')) {
    calculateAll();
  }

  // Update Forecast
  initDailyForecast();
  
  // Update Tracker UI if text exists
  const emoInput = document.getElementById('emoInput');
  if (emoInput && emoInput.value) {
    emoInput.dispatchEvent(new Event('input'));
  }
  
  if (typeof refreshEnergySliderLanguage === 'function') {
    refreshEnergySliderLanguage();
  }
  
  if (typeof refreshEmotionTrackerLanguage === 'function') {
    refreshEmotionTrackerLanguage();
  }

  if (typeof refreshMindfulnessLanguage === 'function') {
    refreshMindfulnessLanguage();
  }

  if (typeof updateAudioUIState === 'function') {
    updateAudioUIState();
  }
}

// ── Drawer ──
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('visible');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
}

// ── SPA Routing (Roll-Sides) ──
function showPage(pageId) {
  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
// ── Numerology data logic ──
function reduceNumber(num, keepMaster = true) {
  let sum = parseInt(num);
  while (sum > 9) {
    if (keepMaster && (sum === 11 || sum === 22 || sum === 33)) break;
    sum = String(sum).split('').reduce((a, c) => a + parseInt(c), 0);
  }
  return sum;
}

function calculateLifePath(d, m, y) {
  const rDay = reduceNumber(d, true);
  const rMonth = reduceNumber(m, false); // Month is usually 1-12, reduced to 1-9
  const rYear = reduceNumber(y, true);
  return reduceNumber(rDay + rMonth + rYear, true);
}

function calculatePersonalYear(d, m, targetYear) {
  const rDay = reduceNumber(d, false);
  const rMonth = reduceNumber(m, false);
  const rYear = reduceNumber(targetYear, false);
  return reduceNumber(rDay + rMonth + rYear, false);
}

function calculateDestiny(name) {
  const matrix = {
    1: ['A', 'J', 'S', 'Ś'],
    2: ['B', 'K', 'T', 'Ł'],
    3: ['C', 'Ć', 'L', 'U'],
    4: ['D', 'M', 'V'],
    5: ['E', 'Ę', 'N', 'Ń', 'W'],
    6: ['F', 'O', 'Ó', 'X'],
    7: ['G', 'P', 'Y'],
    8: ['H', 'Q', 'Z', 'Ż', 'Ź'],
    9: ['I', 'R']
  };

  // Reverse mapping for O(1) lookup
  const letterMap = {};
  for (const [num, letters] of Object.entries(matrix)) {
    letters.forEach(l => letterMap[l] = parseInt(num));
  }

  const cleanName = name.toUpperCase().replace(/[^A-ZĄĆĘŁŃÓŚŹŻ]/g, '');
  let sum = 0;
  for (const char of cleanName) {
    if (letterMap[char]) {
      sum += letterMap[char];
    }
  }

  return reduceNumber(sum, true);
}

function parseDateStr(dateStr) {
  let d, m, y;
  if (dateStr.includes('.')) {
    [d, m, y] = dateStr.split('.').map(Number);
  } else if (dateStr.includes('-')) {
    [y, m, d] = dateStr.split('-').map(Number);
  } else {
    return null;
  }
  if (!d || !m || !y) return null;
  return { d, m, y };
}

function calculateAll() {
  const dateVal = document.getElementById('birthDate').value;
  const nameVal = document.getElementById('fullName').value;

  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));

  if (!dateVal) {
    const alertMsg = (trans && trans[currentLang]) ? trans[currentLang].alert_date : 'Proszę wybrać datę urodzenia.';
    alert(alertMsg);
    return;
  }

  const parsedDate = parseDateStr(dateVal);
  if (!parsedDate) {
    const alertMsg = (trans && trans[currentLang]) ? trans[currentLang].alert_date : 'Proszę wybrać datę urodzenia.';
    alert(alertMsg);
    return;
  }

  // 1. Droga Życia (Life Path)
  const lifePath = calculateLifePath(parsedDate.d, parsedDate.m, parsedDate.y);

  // 2. Rok Osobisty (Personal Year)
  const currentYear = new Date().getFullYear();
  const personalYear = calculatePersonalYear(parsedDate.d, parsedDate.m, currentYear);

  // 3. Liczba Przeznaczenia (Destiny Number)
  let destiny = '—';
  if (nameVal && nameVal.trim().length > 0) {
    destiny = calculateDestiny(nameVal);
  }

  // Update UI
  document.getElementById('resLifePath').textContent = lifePath;
  document.getElementById('resPersonalYear').textContent = personalYear;
  document.getElementById('resDestiny').textContent = destiny;

  // Dynamic Injection of Archetype & Description for Droga Życia
  const lpNum = (lifePath === 11 || lifePath === 22 || lifePath === 33) ? reduceNumber(lifePath, false) : lifePath;
  const archetypeEl = document.getElementById('resLifePathArchetype');
  const descEl = document.getElementById('resLifePathDesc');

  if (archetypeEl && descEl && birthPathDescriptions[currentLang] && birthPathDescriptions[currentLang][lpNum]) {
    const data = birthPathDescriptions[currentLang][lpNum];
    archetypeEl.textContent = data.archetype;
    descEl.innerHTML = data.desc;
    archetypeEl.style.display = 'block';
    descEl.style.display = 'block';
  } else {
    if (archetypeEl) archetypeEl.style.display = 'none';
    if (descEl) descEl.style.display = 'none';
  }

  const panel = document.getElementById('resultCalculators');
  panel.style.display = 'flex';
  panel.classList.remove('visible');
  void panel.offsetWidth; // reflow
  panel.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Audio Player ──
const AUDIO_ENGINE_CONFIG = {
  containers: ['A', 'B', 'C', 'CC'],
  dirPath: './AUDIO-LIBRARY/'
};
let audioIsPlaying = false;

function reduceToSingleDigit(num) {
  let val = parseInt(num) || 1;
  while (val > 9) {
    val = String(val).split('').reduce((a, c) => a + parseInt(c), 0);
  }
  return val;
}

function getDailyEnergyNumber() {
  const circleEl = document.getElementById('fcCircle');
  if (circleEl) {
    const val = parseInt(circleEl.textContent);
    if (!isNaN(val)) return val;
  }
  
  // Fallback direct calculation matching initDailyForecast
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  let dateKey = `${month}-${day}`;
  const forecastSource = window.FORECAST_DATA || (typeof FORECAST_DATA !== 'undefined' ? FORECAST_DATA : null);
  if (forecastSource && forecastSource[currentLang] && forecastSource[currentLang][dateKey]) {
    return parseInt(forecastSource[currentLang][dateKey].l) || 1;
  }
  return 1;
}

function updateAudioUIState() {
  const player = document.getElementById('audioPlayer');
  const iconPlay = document.getElementById('icon-play');
  const iconPause = document.getElementById('icon-pause');
  const playBtn = document.querySelector('.play-btn');
  const descEl = document.querySelector('.audio-info p');
  
  if (!player || !playBtn || !descEl) return;

  const energy = getDailyEnergyNumber();
  const finalNumber = reduceToSingleDigit(energy);

  if (audioIsPlaying && !player.paused) {
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
    playBtn.classList.add('is-playing');
    playBtn.style.boxShadow = '0 0 35px rgba(212, 175, 55, 0.8)';
    descEl.innerHTML = currentLang === 'pl'
      ? `Odtwarzanie wiadomości dla wibracji dnia: <strong>${finalNumber}</strong> 🔊`
      : `Spielt Nachricht für Tagesvibration: <strong>${finalNumber}</strong> 🔊`;
  } else if (player.src && player.src !== window.location.href && !player.paused) {
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
    playBtn.classList.remove('is-playing');
    playBtn.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.4)';
    descEl.innerHTML = currentLang === 'pl'
      ? `Odtwarzanie wstrzymane (wibracja <strong>${finalNumber}</strong>) ⏸`
      : `Wiedergabe pausiert (Vibration <strong>${finalNumber}</strong>) ⏸`;
  } else {
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
    playBtn.classList.remove('is-playing');
    playBtn.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.4)';
    descEl.innerHTML = currentLang === 'pl'
      ? `Naciśnij play, aby odsłuchać`
      : `Drücke Play zum Anhören`;
  }
}

function toggleAudio() {
  const player = document.getElementById('audioPlayer');
  if (!player) return;

  const energy = getDailyEnergyNumber();
  const finalNumber = reduceToSingleDigit(energy);

  // Check if player's current src is valid for the current finalNumber
  const currentSrcPath = player.getAttribute('src') || '';
  let isCurrentSrcValid = false;

  for (const containerLetter of AUDIO_ENGINE_CONFIG.containers) {
    const expectedSrc = `${AUDIO_ENGINE_CONFIG.dirPath}CONTAINER ${containerLetter}/${containerLetter}${finalNumber}.mp3`;
    if (currentSrcPath === expectedSrc || currentSrcPath.endsWith(`/CONTAINER ${containerLetter}/${containerLetter}${finalNumber}.mp3`)) {
      isCurrentSrcValid = true;
      break;
    }
  }

  if (!isCurrentSrcValid) {
    // Pick a random container
    const randIdx = Math.floor(Math.random() * AUDIO_ENGINE_CONFIG.containers.length);
    const containerLetter = AUDIO_ENGINE_CONFIG.containers[randIdx];
    const targetSrc = `${AUDIO_ENGINE_CONFIG.dirPath}CONTAINER ${containerLetter}/${containerLetter}${finalNumber}.mp3`;
    player.src = targetSrc;
    player.load();
  }

  if (audioIsPlaying) {
    player.pause();
    audioIsPlaying = false;
    updateAudioUIState();
  } else {
    player.play().then(() => {
      audioIsPlaying = true;
      updateAudioUIState();
    }).catch(err => {
      console.warn("Audio playback failed:", err);
      audioIsPlaying = false;
      updateAudioUIState();
    });
  }

  // Reset when track ends
  player.onended = () => {
    audioIsPlaying = false;
    updateAudioUIState();
    player.removeAttribute('src'); // Clear src on end so the next click will select a new random container
  };
}

// ── Mindfulness Player & Description Logic ──
function initMindfulnessPlayer() {
  const player = document.getElementById('mindAudioPlayer');
  const playPauseBtn = document.getElementById('mindPlayPauseBtn');
  const progressWrap = document.getElementById('mindProgressBarWrap');
  const progressFill = document.getElementById('mindProgressBarFill');
  const currentText = document.getElementById('mindCurrentTime');
  const durationText = document.getElementById('mindDurationTime');
  const statusEl = document.getElementById('mindPlayerStatus');
  
  const iconPlay = document.getElementById('mind-icon-play');
  const iconPause = document.getElementById('mind-icon-pause');
  
  if (!player || !playPauseBtn) return;
  
  let mindPlaying = false;
  
  player.src = './co_teraz_czujesz/zatrzymanie_w_biegu.mp3';
  player.load();
  
  function updateUIState() {
    const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
    if (!iconPlay || !iconPause || !statusEl) return;
    
    if (mindPlaying) {
      iconPlay.style.display = 'none';
      iconPause.style.display = 'block';
      statusEl.innerHTML = trans && trans[currentLang] && trans[currentLang].mindfulness_status_playing
        ? trans[currentLang].mindfulness_status_playing
        : 'Odtwarzanie słuchowiska... 🔊';
    } else {
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
      statusEl.innerHTML = trans && trans[currentLang] && trans[currentLang].mindfulness_status_paused
        ? trans[currentLang].mindfulness_status_paused
        : 'Odtwarzanie wstrzymane ⏸';
    }
  }

  function togglePlay() {
    // If the Daily Forecast player is playing, pause it first
    const otherPlayer = document.getElementById('audioPlayer');
    if (otherPlayer && !otherPlayer.paused) {
      otherPlayer.pause();
      if (typeof audioIsPlaying !== 'undefined') audioIsPlaying = false;
      if (typeof updateAudioUIState === 'function') updateAudioUIState();
    }
    
    if (mindPlaying) {
      player.pause();
      mindPlaying = false;
      updateUIState();
    } else {
      player.play()
        .then(() => {
          mindPlaying = true;
          updateUIState();
        })
        .catch(err => {
          console.warn('Mindfulness playback failed:', err);
          mindPlaying = false;
          if (statusEl) {
            const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
            statusEl.innerHTML = trans && trans[currentLang] && trans[currentLang].mindfulness_status_play_err
              ? trans[currentLang].mindfulness_status_play_err
              : '❌ Nie można odtworzyć pliku audio (spróbuj odświeżyć)';
          }
          if (iconPlay && iconPause) {
            iconPlay.style.display = 'block';
            iconPause.style.display = 'none';
          }
        });
    }
  }
  
  playPauseBtn.addEventListener('click', togglePlay);
  
  player.addEventListener('timeupdate', () => {
    if (player.duration) {
      const pct = (player.currentTime / player.duration) * 100;
      if (progressFill) progressFill.style.width = `${pct}%`;
      if (currentText) currentText.textContent = formatTime(player.currentTime);
    }
  });
  
  player.addEventListener('loadedmetadata', () => {
    if (durationText) durationText.textContent = formatTime(player.duration);
  });
  
  player.addEventListener('ended', () => {
    mindPlaying = false;
    updateUIState();
    if (progressFill) progressFill.style.width = '0%';
    if (currentText) currentText.textContent = '0:00';
    
    if (statusEl) {
      const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
      statusEl.innerHTML = trans && trans[currentLang] && trans[currentLang].mindfulness_status_idle
        ? trans[currentLang].mindfulness_status_idle
        : 'Naciśnij play, aby odsłuchać';
    }
  });
  
  player.addEventListener('error', (e) => {
    console.error('Mindfulness audio loading error:', e);
    mindPlaying = false;
    if (statusEl) {
      const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
      statusEl.innerHTML = trans && trans[currentLang] && trans[currentLang].mindfulness_status_loading_err
        ? trans[currentLang].mindfulness_status_loading_err
        : '❌ Nie można załadować pliku audio (spróbuj odświeżyć stronę)';
    }
    if (iconPlay && iconPause) {
      iconPlay.style.display = 'block';
      iconPause.style.display = 'none';
    }
  });
  
  if (progressWrap) {
    progressWrap.addEventListener('click', (e) => {
      const rect = progressWrap.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const pct = clickX / width;
      if (player.duration) {
        player.currentTime = pct * player.duration;
      }
    });
  }

  function formatTime(secs) {
    if (isNaN(secs)) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}

function toggleMindfulnessDesc() {
  const container = document.getElementById('mindfulnessDescContainer');
  const btn = document.getElementById('mindfulnessToggleBtn');
  const txt = document.getElementById('mindToggleText');
  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  
  if (!container || !btn) return;
  
  if (container.style.display === 'none') {
    container.style.display = 'block';
    btn.classList.add('active');
    if (txt && trans && trans[currentLang]) {
      txt.textContent = trans[currentLang].mindfulness_btn_hide;
    }
  } else {
    container.style.display = 'none';
    btn.classList.remove('active');
    if (txt && trans && trans[currentLang]) {
      txt.textContent = trans[currentLang].mindfulness_btn_show;
    }
  }
}

function refreshMindfulnessLanguage() {
  const container = document.getElementById('mindfulnessDescContainer');
  const txt = document.getElementById('mindToggleText');
  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));
  if (!txt || !trans || !trans[currentLang]) return;
  
  if (container && container.style.display === 'block') {
    txt.textContent = trans[currentLang].mindfulness_btn_hide;
  } else {
    txt.textContent = trans[currentLang].mindfulness_btn_show;
  }
  
  const player = document.getElementById('mindAudioPlayer');
  const statusEl = document.getElementById('mindPlayerStatus');
  if (player && statusEl) {
    if (player.paused) {
      if (player.currentTime > 0) {
        statusEl.innerHTML = trans[currentLang].mindfulness_status_paused;
      } else {
        statusEl.innerHTML = trans[currentLang].mindfulness_status_idle;
      }
    } else {
      statusEl.innerHTML = trans[currentLang].mindfulness_status_playing;
    }
  }
}

window.toggleMindfulnessDesc = toggleMindfulnessDesc;

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  // Initialize translations on load
  try {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && (savedLang === 'pl' || savedLang === 'de')) {
      currentLang = savedLang;
    }
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }
  switchLang(currentLang);

  // Initialize Daily Forecast
  initDailyForecast();

  // Auto-format date input: dd.mm.yyyy
  const dateInput = document.getElementById('birthDate');
  if (dateInput) {
    dateInput.addEventListener('input', function() {
      let val = this.value.replace(/\D/g, ''); // Extract only numbers
      let formatted = '';
      
      for (let i = 0; i < val.length; i++) {
        if (i === 2 || i === 4) {
          formatted += '.';
        }
        formatted += val[i];
      }
      
      this.value = formatted.substring(0, 10);
    });
  }

  initEmotionTracker();
  initEnergySlider();
  initMindfulnessPlayer();
});

// ── Emotion Dictionary ──
const emotions = {
  pl: {
    trudne: window.ALL_TRUDNE_PL || ['agresja', 'awersja', 'bezsilność', 'depresja', 'dyskomfort', 'frustracja', 'nieszczęście', 'osamotnienie', 'samotność', 'smutek', 'napięcie', 'strach', 'stres', 'tęsknota', 'wstyd', 'zdesperowanie'],
    przyjemne: ['bezpieczeństwo', 'bliskość', 'cisza', 'dobrostan', 'inspiracja', 'pewność siebie', 'spokój', 'szczęście', 'radość', 'miłość']
  },
  de: {
    trudne: window.ALL_TRUDNE_DE || ['aggression', 'abneigung', 'machtlosigkeit', 'depression', 'unbehagen', 'frustration', 'unglück', 'isolation', 'einsamkeit', 'traurigkeit', 'anspannung', 'angst', 'stress', 'sehnsucht', 'scham', 'verzweiflung'],
    przyjemne: ['sicherheit', 'nähe', 'stille', 'wohlbefinden', 'inspiration', 'selbstvertrauen', 'ruhe', 'glück', 'freude', 'liebe']
  }
};

// ── Daily Forecast Logic ──
function initDailyForecast() {
  const today = new Date();
  
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = today.toLocaleDateString(currentLang === 'pl' ? 'pl-PL' : 'de-DE', options);
  const fcDateEl = document.getElementById('fcDate');
  if(fcDateEl) fcDateEl.textContent = dateStr;
  
  const month = today.getMonth() + 1;
  const day = today.getDate();
  let dateKey = `${month}-${day}`;
  
  // Safeguard: Fallback if dateKey isn't in forecast (e.g. leap year 2-29 fallback to 2-28)
  if (window.FORECAST_DATA && window.FORECAST_DATA[currentLang] && !window.FORECAST_DATA[currentLang][dateKey]) {
    if (month === 2 && day === 29) {
      dateKey = '2-28';
    } else {
      dateKey = Object.keys(window.FORECAST_DATA[currentLang])[0];
    }
  }

  const forecastSource = window.FORECAST_DATA || (typeof FORECAST_DATA !== 'undefined' ? FORECAST_DATA : null);

  if (forecastSource && forecastSource[currentLang] && forecastSource[currentLang][dateKey]) {
    const data = forecastSource[currentLang][dateKey];
    
    // 1. fcCircle - Daily vibration number
    const circleEl = document.getElementById('fcCircle');
    if (circleEl) circleEl.textContent = data.l;
    
    // 2. fcZodiac - Zodiac sign
    const zodiacEl = document.getElementById('fcZodiac');
    if (zodiacEl) zodiacEl.textContent = data.z.toUpperCase();
    
    // 3. fcCardTitle - Number and Title / Sign
    const titleEl = document.getElementById('fcCardTitle');
    if (titleEl) {
      titleEl.textContent = currentLang === 'pl' 
        ? `Liczba ${data.l} · ${data.z}` 
        : `Zahl ${data.l} · ${data.z}`;
    }
    
    // 4. fcDesc - Description
    const descEl = document.getElementById('fcDesc');
    if (descEl) descEl.textContent = data.e;
    
    // 5. fcDo - Co warto robić
    const doEl = document.getElementById('fcDo');
    if (doEl) doEl.textContent = data.r;
    
    // 6. fcDont - Unikaj dziś
    const dontEl = document.getElementById('fcDont');
    if (dontEl) dontEl.textContent = data.u;
    
    // 7. fcFooterTitle - Motto / subtitle
    const footerTitleEl = document.getElementById('fcFooterTitle');
    if (footerTitleEl) footerTitleEl.textContent = data.s;
    
    // 8. fcFooterDesc - Fun / funny interpretation
    const footerDescEl = document.getElementById('fcFooterDesc');
    if (footerDescEl) footerDescEl.textContent = data.fun;
  } else {
    console.error('Forecast data not found for key:', dateKey);
  }
}

// ── Energy Messages Database (PL & DE) ──
const ENERGY_MESSAGES = {
  1: { cls: 'low', e: '👎', m: 'Jedynka. Energia na dnie. Jeśli czujesz, że jedziesz na rezerwach — nie udawaj, że jest inaczej.', t: 'Zrób absolutne minimum. Odwołaj to co się da. Dziś sukcesem jest po prostu przetrwać ten dzień bez dowalania sobie dodatkowych ciężarów.' },
  2: { cls: 'low', e: '🔋', m: 'Dwójka. Bardzo niski poziom baterii. Ciało lub głowa wyraźnie mówią "stop".', t: 'Zamiast kolejnej kawy — odetnij bodźce. 15 minut w ciszy, bez telefonu, uratuje resztę Twojego popołudnia.' },
  3: { cls: 'low', e: '📉', m: 'Trójka. Ciężki poranek albo spadek formy. Wszystko idzie jak krew z nosa.', t: 'Podziel zadania na mikrokroki. Nie patrz na całą górę lodową — zrób jedną, małą rzecz, a potem daj sobie prawo do przerwy.' },
  4: { cls: 'mid', e: '☕', m: 'Czwórka. Szału nie ma, ale da się żyć. Taki klasyczny, lekko senny dzień.', t: 'Zacznij od rutyny. Rzeczy, które robisz automatycznie, rozkręcą Cię bez marnowania cennej energii na myślenie.' },
  5: { cls: 'mid', e: '😐', m: 'Piątka. Dokładnie pośrodku. Stan równowagi — ani zmęczenie, ani wielka ekscytacja.', t: 'Idealny moment na spokojną, rzemieślniczą pracę. Bez pośpiechu, krok po kroku, zamknij tematy, które wiszą od dawna.' },
  6: { cls: 'mid', e: '🌤️', m: 'Szóstka. Stabilna, przyjemna aura. Trochę chmur, trochę słońca — ale energia jest. Dasz radę.', t: 'Zrób coś co odkładałaś/odkładałeś. Dziś masz dokładnie tyle energii ile potrzeba żeby zacząć.' },
  7: { cls: 'high', e: '☀️', m: 'Siódemka. Dobra, stabilna energia — fundament świetnego dnia.', t: 'Nie rozpraszaj się na drobiazgi. Masz paliwo — użyj go na coś co naprawdę ma znaczenie.' },
  8: { cls: 'high', e: '⚡', m: 'Ósemka. Konkretna moc w rękach. Dziś możesz więcej niż zwykle.', t: 'Weź się za najtrudniejszą rzecz z listy. Właśnie teraz masz na nią siłę — i wystarczy jej na ukończenie.' },
  9: { cls: 'high', e: '🔥', m: 'Dziewiątka. Płonie! Taka energia przyciąga ludzi i otwiera drzwi.', t: 'Złap tę falę i surfuj. Zrób coś co zapamiętasz — zacznij projekt, powiedz komuś ważną rzecz, zrób krok który czekał.' },
  10: { cls: 'high', e: '🚀', m: 'Dziesiątka! Pełna moc, maksimum energii. Dziś jesteś nie do zatrzymania.', t: 'Zrób dziś coś z czego jutro będziesz dumna/dumny. Masz zielone światło od wszechświata.' }
};

const ENERGY_MESSAGES_DE = {
  1: { cls: 'low', e: '👎', m: 'Eins. Energie am Boden. Wenn du das Gefühl hast, auf Reserve zu fahren – tu nicht so, als wäre es anders.', t: 'Tu das absolute Minimum. Sag ab, was geht. Heute ist es ein Erfolg, den Tag einfach zu überstehen, ohne dir zusätzliche Lasten aufzubürden.' },
  2: { cls: 'low', e: '🔋', m: 'Zwei. Sehr niedriger Batteriestand. Körper oder Kopf sagen deutlich "Stopp".', t: 'Statt noch einen Kaffee zu trinken – schalte Reize ab. 15 Minuten Stille, ohne Telefon, retten den Rest deines Nachmittags.' },
  3: { cls: 'low', e: '📉', m: 'Drei. Schwerer Morgen oder Formtief. Alles geht nur schleppend voran.', t: 'Teile Aufgaben in Mikroschritte auf. Schau nicht auf den ganzen Eisberg – tu eine kleine Sache und erlaube dir dann eine Pause.' },
  4: { cls: 'mid', e: '☕', m: 'Vier. Nichts Besonderes, aber man kann leben. Ein klassischer, leicht schläfriger Tag.', t: 'Fang mit Routine an. Dinge, die du automatisch tust, bringen dich in Schwung, ohne wertvolle Energie fürs Nachdenken zu verschwenden.' },
  5: { cls: 'mid', e: '😐', m: 'Fünf. Genau in der Mitte. Zustand des Gleichgewichts – weder Müdigkeit noch große Aufregung.', t: 'Idealer Zeitpunkt für ruhige, handwerkliche Arbeit. Ohne Eile, Schritt für Schritt, schließe Themen ab, die schon lange in der Luft hängen.' },
  6: { cls: 'mid', e: '🌤️', m: 'Sechs. Stabile, angenehme Aura. Ein paar Wolken, ein bisschen Sonne – aber Energie ist da. Du schaffst das.', t: 'Tu etwas, das du aufgeschoben hast. Heute hast du genau so viel Energie, wie du brauchst, um anzufangen.' },
  7: { cls: 'high', e: '☀️', m: 'Sieben. Gute, stabile Energie – das Fundament für einen großartigen Tag.', t: 'Lass dich nicht von Kleinigkeiten ablenken. Du hast Treibstoff – nutze ihn für etwas, das wirklich wichtig ist.' },
  8: { cls: 'high', e: '⚡', m: 'Acht. Konkrete Kraft in den Händen. Heute kannst du mehr als sonst.', t: 'Nimm dir das Schwierigste auf deiner Liste vor. Genau jetzt hast du die Kraft dafür – und sie wird bis zum Ende reichen.' },
  9: { cls: 'high', e: '🔥', m: 'Neun. Es brennt! Solche Energie zieht Menschen an und öffnet Türen.', t: 'Reite auf dieser Welle. Tu etwas, woran du dich erinnern wirst – starte ein Projekt, sag jemandem etwas Wichtiges, mach einen Schritt, der gewartet hat.' },
  10: { cls: 'high', e: '🚀', m: 'Zehn! Volle Kraft, maximale Energie. Heute bist du unaufhaltsam.', t: 'Tu heute etwas, worauf du morgen stolz sein wirst. Du hast grünes Licht vom Universum.' }
};

function initEnergySlider() {
  const slider = document.getElementById('energySlider');
  if (!slider) return;

  const card = slider.closest('.tracker-card');
  if (!card) return;

  function updateEnergyUI(value) {
    let resultContainer = document.getElementById('energyResult');
    if (!resultContainer) {
      resultContainer = document.createElement('div');
      resultContainer.id = 'energyResult';
      resultContainer.className = 'energy-result-card';
      card.appendChild(resultContainer);
    }

    const messages = currentLang === 'pl' ? ENERGY_MESSAGES : (ENERGY_MESSAGES_DE || ENERGY_MESSAGES);
    const data = messages[value];
    if (!data) return;

    resultContainer.className = `energy-result-card energy-${data.cls}`;
    
    resultContainer.innerHTML = `
      <div class="energy-res-header">
        <span class="energy-res-emoji">${data.e}</span>
        <div class="energy-res-meta">
          <span class="energy-res-title-lbl">${currentLang === 'pl' ? 'POZIOM ENERGII' : 'ENERGIELEVEL'}</span>
          <span class="energy-res-level">${value} / 10</span>
        </div>
      </div>
      <div class="energy-res-body">
        <p class="energy-res-message"><strong>${data.m}</strong></p>
        <p class="energy-res-tip">💡 ${data.t}</p>
      </div>
    `;

    // Wyróżnienie aktywnej kreski (tick) i etykiety
    const numericValue = parseInt(value, 10);
    const ticks = card.querySelectorAll('.slider-ticks span');
    ticks.forEach((tick, idx) => {
      if (idx === (numericValue - 1)) {
        tick.classList.add('active');
      } else {
        tick.classList.remove('active');
      }
    });

    const labels = card.querySelectorAll('.slider-labels span');
    labels.forEach((lbl, idx) => {
      if (idx === (numericValue - 1)) {
        lbl.classList.add('active');
      } else {
        lbl.classList.remove('active');
      }
    });
  }

  // Uruchomienie przy przeciąganiu suwaka
  slider.addEventListener('input', (e) => {
    updateEnergyUI(e.target.value);
  });

  // Rejestracja globalnego hooka odświeżania językowego
  window.refreshEnergySliderLanguage = () => {
    updateEnergyUI(slider.value);
  };

  // Pierwsza inicjalizacja
  updateEnergyUI(slider.value);
}

// ── Emotion Tracker Database (PL & DE) ──
const EMOTION_RESPONSES = {
  "lęk": {
    title: "Lęk · Próg transformacji",
    desc: "Lęk nie pojawia się po to, by Cię zatrzymać, ale by pokazać Ci, gdzie kończy się Twoja stara strefa komfortu. To informacja, że stajesz twarzą w twarz z czymś nowym i ważnym. Nie walcz z nim – oddychaj przez niego.",
    isSevere: true, // Flaga oznaczająca ciężki stan emocjonalny
    actionPlan: {
      step1: "✍️ **Napisz list (Wyładunek):** Przelej cały ten lęk na papier. Napisz bez cenzury wszystko, czego się boisz, a potem bezpiecznie zniszcz tę kartkę. Pozwól emocjom opuścić ciało.",
      step2: "🗣️ **Porozmawiaj z przyjacielem:** Nie izoluj się. Powiedz komuś bliskiemu: 'Czuję dziś ogromny niepokój, potrzebuję po prostu Twojej obecności lub krótkiej rozmowy'.",
      step3: "🩺 **Profesjonalne wsparcie (Ważne):** Jeśli lęk paraliżuje Cię od dłuższego czasu, utrudnia oddychanie lub codzienne funkcjonowanie, pamiętaj, że sięganie po pomoc specjalisty (psychologa, terapeuty) to akt ogromnej odwagi, a nie słabości. Nie musisz nieść tego ciężaru sam."
    }
  },
  "smutek": {
    title: "Smutek · Czas wewnętrznej regeneracji",
    desc: "Smutek to naturalny proces oczyszczania Twojego pola energetycznego. Informuje o tym, że coś w Tobie puszcza, odchodzi, lub wymaga domknięcia. Daj sobie prawo do bycia ze sobą w ciszy. To nie słabość, to zbieranie sił na nowy początek.",
    isSevere: true,
    actionPlan: {
      step1: "✍️ **Napisz szczerze do siebie:** Zapisz w pamiętniku, za czym tęsknisz i co tak naprawdę wywołało ten stan. Łzy są tu naturalnym lekarstwem.",
      step2: "🫂 **Otocz się wsparciem:** Pozwól sobie na bycie zaopiekowanym. Zadzwoń do osoby, przy której nie musisz udawać, że wszystko jest w porządku.",
      step3: "🩺 **Skonsultuje się ze specjalistą:** Jeżeli ten stan przedłuża się w nieskończoność i przechodzi w apatię, bezwzględnie skonsultuj się z psychoterapeutą lub lekarzem. Twoje zdrowie psychiczne jest absolutnym priorytetem."
    }
  },
  // Przykładowe pozytywne emocje (bez planów ratunkowych)
  "radość": {
    title: "Radość · Pełna synchronizacja",
    desc: "Twoje serce bije dzisiaj w idealnym rytmie z wszechświatem. Radość to najwyższa dostępna wibracja, która działa jak magnes na kolejne wspaniałe wydarzenia. Dziel się nią bez obaw – im więcej jej oddasz, tym więcej do Ciebie wróci!"
  },
  "wdzięczność": {
    title: "Wdzięczność · Portal obfitości",
    desc: "Stan wdzięczności to najprostsza droga do manifestacji marzeń. Zauważając małe rzeczy, dajesz sygnał przestrzeni, że jesteś gotów na więcej. Utrzymaj to uczucie jak najdłużej."
  }
};

const EMOTION_RESPONSES_DE = {
  "angst": {
    title: "Angst · Schwelle der Transformation",
    desc: "Angst taucht nicht auf, um dich aufzuhalten, sondern um dir zu zeigen, wo deine alte Komfortzone endet. Es ist ein Hinweis darauf, dass du etwas Neuem und Wichtigem gegenüberstehst. Kämpfe nicht gegen sie an – atme durch sie hindurch.",
    isSevere: true,
    actionPlan: {
      step1: "✍️ **Schreibe einen Brief (Entlastung):** Schreibe all diese Angst auf Papier. Schreibe ohne Zensur alles auf, wovor du dich fürchtest, und zerstöre dieses Blatt dann sicher. Erlaube den Emotionen, deinen Körper zu verlassen.",
      step2: "🗣️ **Sprich mit einem Freund:** Isoliere dich nicht. Sag einem geliebten Menschen: 'Ich spüre heute große Unruhe, ich brauche einfach deine Anwesenheit oder ein kurzes Gespräch'.",
      step3: "🩺 **Professionelle Unterstützung (Wichtig):** Wenn die Angst dich seit längerer Zeit lähmt, das Atmen oder den Alltag erschwert, denke daran, dass das Suchen nach Hilfe von Fachleuten (Psychologen, Therapeuten) ein Akt großen Mutes und keine Schwäche ist. Du musst diese Last nicht alleine tragen."
    }
  },
  "traurigkeit": {
    title: "Traurigkeit · Zeit der inneren Regeneration",
    desc: "Traurigkeit ist ein natürlicher Reinigungsprozess deines Energiefeldes. Sie signalisiert, dass etwas in dir loslässt, geht oder einen Abschluss braucht. Gib dir das Recht, in der Stille mit dir selbst zu sein. Das ist keine Schwäche, sondern Kraftsammeln für einen Neuanfang.",
    isSevere: true,
    actionPlan: {
      step1: "✍️ **Schreibe ehrlich an dich selbst:** Schreibe in dein Tagebuch, wonach du dich sehnst und was diesen Zustand wirklich ausgelöst hat. Tränen sind hier eine natürliche Medizin.",
      step2: "🫂 **Umgib dich mit Unterstützung:** Erlaube dir, umsorgt zu werden. Rufe eine Person an, bei der du nicht so tun musst, als wäre alles in Ordnung.",
      step3: "🩺 **Konsultiere einen Fachmann:** Wenn dieser Zustand endlos anhält und in Apathie übergeht, konsultiere unbedingt einen Psychotherapeuten oder Arzt. Deine mentale Gesundheit hat absolute Priorität."
    }
  },
  "freude": {
    title: "Freude · Volle Synchronisation",
    desc: "Dein Herz schlägt heute im perfekten Einklang mit dem Universum. Freude ist die höchste verfügbare Schwingung, die wie ein Magnet für weitere wundervolle Ereignisse wirkt. Teile sie ohne Sorge – je mehr du gibst, desto mehr kommt zu dir zurück!"
  },
  "dankbarkeit": {
    title: "Dankbarkeit · Portal der Fülle",
    desc: "Dankbarkeit ist der einfachste Weg, um Träume zu manifestieren. Indem du die kleinen Dinge bemerkst, signalisierst du dem Raum, dass du bereit für mehr bist. Halte dieses Gefühl so lange wie möglich aufrecht."
  }
};

const EMOTION_FALLBACK = {
  title: "Intuicja · Wewnętrzny kompas",
  desc: "Nazwanie i poczucie tej emocji to ważny krok. Wsłuchaj się w swoje ciało i daj sobie przestrzeń, by po prostu być z tym stanem. Każde uczucie niesie ze sobą cenną wiadomość dla Twojej wibracji. Zaufaj swojej intuicji."
};

const EMOTION_FALLBACK_DE = {
  title: "Intuition · Innerer Kompass",
  desc: "Dieses Gefühl zu benennen und zu spüren ist ein wichtiger Schritt. Höre auf deinen Körper und gib dir den Raum, einfach mit diesem Zustand zu sein. Jedes Gefühl trägt eine wertvolle Botschaft für deine Schwingung. Vertraue deiner Intuition."
};

function initEmotionTracker() {
  const input = document.getElementById('emoInput');
  const section = document.getElementById('emoTagsSection');
  const listBtn = document.querySelector('.emo-btn');
  if (!input || !section) return;

  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));

  let activeEmotion = "";

  // Pomocniczy parser formatowania Markdown (pogrubienie **)
  function formatMarkdownBold(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }

  // 1. Funkcja generująca/aktualizująca panel wynikowy analizy
  function triggerEmotionAnalysis(value) {
    if (!value) return;
    activeEmotion = value;

    let resultCard = document.getElementById('emoResult');
    if (!resultCard) {
      resultCard = document.createElement('div');
      resultCard.id = 'emoResult';
      resultCard.className = 'emo-result-card';
      section.parentNode.insertBefore(resultCard, section.nextSibling);
    }

    const responses = currentLang === 'pl' ? EMOTION_RESPONSES : (EMOTION_RESPONSES_DE || EMOTION_RESPONSES);
    const fallback = currentLang === 'pl' ? EMOTION_FALLBACK : (EMOTION_FALLBACK_DE || EMOTION_FALLBACK);
    
    const cleanVal = value.toLowerCase().trim();
    let data = null;

    // Najpierw sprawdzamy bazę 142 trudnych emocji
    if (window.EMOTIONS_MAP && window.EMOTIONS_MAP[cleanVal]) {
      const cluster = window.EMOTIONS_MAP[cleanVal];
      const template = window.EMOTIONS_CLUSTERS && window.EMOTIONS_CLUSTERS[currentLang] 
        ? window.EMOTIONS_CLUSTERS[currentLang][cluster] 
        : null;

      if (template) {
        // Formatowanie nazwy emocji:
        // W tytule zawsze wielka litera.
        const capEmotion = value.charAt(0).toUpperCase() + value.slice(1);
        // W opisie i planie działania: dla DE wielka litera (rzeczowniki), dla PL mała litera.
        const descEmotion = currentLang === 'pl' ? cleanVal : capEmotion;

        data = {
          title: template.title.replace(/{emotion}/g, capEmotion),
          desc: template.desc.replace(/{emotion}/g, descEmotion),
          isSevere: template.isSevere,
          actionPlan: template.actionPlan ? {
            step1: template.actionPlan.step1.replace(/{emotion}/g, descEmotion),
            step2: template.actionPlan.step2.replace(/{emotion}/g, descEmotion),
            step3: template.actionPlan.step3.replace(/{emotion}/g, descEmotion)
          } : null
        };
      }
    }

    // Jeśli nie dopasowano z EMOTIONS_MAP, szukamy w statycznym słowniku responses (np. przyjemne emocje)
    if (!data) {
      let matchedKey = Object.keys(responses).find(k => k === cleanVal);
      if (!matchedKey) {
        matchedKey = Object.keys(responses).find(k => cleanVal.includes(k) || k.includes(cleanVal));
      }
      data = matchedKey ? responses[matchedKey] : fallback;
    }

    // Tworzenie kodu HTML dla Planu Działania (Action Plan) dla ciężkich stanów
    let actionPlanHtml = '';
    if (data.isSevere && data.actionPlan) {
      const planTitle = currentLang === 'pl' ? 'Twój Plan Działania na dziś:' : 'Dein Aktionsplan für heute:';
      actionPlanHtml = `
        <div class="emo-action-section">
          <h4 class="emo-action-title">${planTitle}</h4>
          <div class="emo-action-steps">
            <div class="emo-action-step">${formatMarkdownBold(data.actionPlan.step1)}</div>
            <div class="emo-action-step">${formatMarkdownBold(data.actionPlan.step2)}</div>
            <div class="emo-action-step emo-action-step-severe">${formatMarkdownBold(data.actionPlan.step3)}</div>
          </div>
        </div>
      `;
    }

    resultCard.innerHTML = `
      <div class="emo-res-title">${data.title}</div>
      <p class="emo-res-desc">${data.desc}</p>
      ${actionPlanHtml}
    `;
  }

  // 2. Renderowanie domyślnych tagów (słownikowych)
  function renderDefaultTags() {
    const defaultKeys = currentLang === 'pl' 
      ? ['lęk', 'smutek', 'radość', 'wdzięczność'] 
      : ['angst', 'traurigkeit', 'freude', 'dankbarkeit'];

    let html = '';
    html += `<div class="emo-tags" style="margin-top: 10px;">`;
    
    defaultKeys.forEach(k => {
      const displayLabel = k.charAt(0).toUpperCase() + k.slice(1);
      const isDifficult = k === 'lęk' || k === 'smutek' || k === 'angst' || k === 'traurigkeit';
      const colorClass = isDifficult ? 'red' : 'green';
      
      html += `<div class="emo-tag ${colorClass}" data-emo="${k}">${displayLabel}</div>`;
    });
    
    html += `</div>`;
    section.innerHTML = html;

    // Dodanie nasłuchiwaczy dla tagów
    section.querySelectorAll('.emo-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const val = tag.getAttribute('data-emo');
        input.value = tag.textContent;
        triggerEmotionAnalysis(val);
      });
    });
  }

  // 3. Obsługa wpisywania i autouzupełniania z listy
  input.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (!val) {
      renderDefaultTags();
      return;
    }

    const langEmos = emotions[currentLang] || emotions['pl'];
    const filteredTrudne = langEmos.trudne.filter(w => w.toLowerCase().includes(val));
    const filteredPrzyjemne = langEmos.przyjemne.filter(w => w.toLowerCase().includes(val));
    
    let html = '';
    
    if (filteredTrudne.length > 0) {
      const label = (trans && trans[currentLang] ? trans[currentLang].emo_cat_trudne : null) || 'TRUDNE EMOCJE';
      html += `<div class="emo-category">${label}</div>`;
      html += `<div class="emo-tags">`;
      filteredTrudne.forEach(w => {
        html += `<div class="emo-tag red" data-emo="${w}">${w}</div>`;
      });
      html += `</div>`;
    }
    
    if (filteredPrzyjemne.length > 0) {
      const label = (trans && trans[currentLang] ? trans[currentLang].emo_cat_przyjemne : null) || 'PRZYJEMNE EMOCJE';
      html += `<div class="emo-category">${label}</div>`;
      html += `<div class="emo-tags">`;
      filteredPrzyjemne.forEach(w => {
        html += `<div class="emo-tag green" data-emo="${w}">${w}</div>`;
      });
      html += `</div>`;
    }

    section.innerHTML = html;

    // Obsługa klikania wyfiltrowanych tagów
    section.querySelectorAll('.emo-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const val = tag.getAttribute('data-emo');
        input.value = tag.textContent;
        triggerEmotionAnalysis(val);
      });
    });
  });

  // 4. Obsługa klawisza Enter na input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      triggerEmotionAnalysis(input.value);
    }
  });

  // 5. Przycisk "Lista" przywracający lub pokazujący pełną listę
  if (listBtn) {
    listBtn.addEventListener('click', () => {
      input.value = '';
      renderDefaultTags();
      // Usunięcie ewentualnego poprzedniego wyniku analizy przy resecie listy
      const resultCard = document.getElementById('emoResult');
      if (resultCard) resultCard.remove();
      activeEmotion = "";
    });
  }

  // 6. Globalny hook dla odświeżania językowego
  window.refreshEmotionTrackerLanguage = () => {
    renderDefaultTags();
    if (activeEmotion) {
      // Mapowanie słów kluczowych przy zmianie języka na odpowiedniki
      let mappedEmotion = activeEmotion;
      if (currentLang === 'de') {
        if (activeEmotion === 'lęk') mappedEmotion = 'angst';
        else if (activeEmotion === 'smutek') mappedEmotion = 'traurigkeit';
        else if (activeEmotion === 'radość') mappedEmotion = 'freude';
        else if (activeEmotion === 'wdzięczność') mappedEmotion = 'dankbarkeit';
      } else {
        if (activeEmotion === 'angst') mappedEmotion = 'lęk';
        else if (activeEmotion === 'traurigkeit') mappedEmotion = 'smutek';
        else if (activeEmotion === 'freude') mappedEmotion = 'radość';
        else if (activeEmotion === 'dankbarkeit') mappedEmotion = 'wdzięczność';
      }
      activeEmotion = mappedEmotion;
      triggerEmotionAnalysis(mappedEmotion);
    }
  };

  // Renderowanie początkowe tagów na start
  renderDefaultTags();
}


