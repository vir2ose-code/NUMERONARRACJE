let currentLang = 'pl'; // Default language
let activeStory = null;
let audioIsPlaying = false;

// ── Hamburger Drawer Toggle ──
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('overlay').classList.add('visible');
}
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
}

// ── i18n Language Switcher Support ──
function switchLang(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('selectedLang', lang);
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }
  
  // Update active language button state
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-${lang}`);
  if (activeBtn) activeBtn.classList.add('active');

  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));

  // Translate static text elements using data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans && trans[lang] && trans[lang][key]) {
      el.innerHTML = trans[lang][key];
    }
  });

  // Handle German language notice
  const deWarning = document.getElementById('deWarning');
  if (deWarning) {
    deWarning.style.display = (lang === 'de') ? 'block' : 'none';
  }

  // Update audio status description translation if not playing
  updatePlayerUIState();
}

// ── Render Stories List ──
function initStoriesList() {
  const container = document.getElementById('storiesList');
  if (!container) return;

  const stories = window.MOTIVATIONAL_STORIES || [];
  let html = '';

  stories.forEach((story, index) => {
    html += `
      <button class="story-title-btn" id="story-btn-${story.id}" onclick="selectStory('${story.id}')">
        <span>${story.title}</span>
        <span class="arrow">➔</span>
      </button>
    `;
  });

  container.innerHTML = html;
}

// ── Select and Load Story ──
function selectStory(storyId) {
  const stories = window.MOTIVATIONAL_STORIES || [];
  const story = stories.find(s => s.id === storyId);
  if (!story) return;

  activeStory = story;

  // Toggle active button styling
  document.querySelectorAll('.story-title-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`story-btn-${storyId}`);
  if (activeBtn) activeBtn.classList.add('active');

  // Show details card, hide placeholder
  const placeholder = document.getElementById('placeholderPrompt');
  const detailsCard = document.getElementById('detailsCard');
  if (placeholder) placeholder.style.display = 'none';
  if (detailsCard) detailsCard.style.display = 'block';

  // Inject content
  document.getElementById('storySubtitle').textContent = story.subtitle;
  document.getElementById('storyDesc').textContent = story.description;

  // Set up audio player
  const player = document.getElementById('audioPlayer');
  if (player) {
    player.pause();
    audioIsPlaying = false;
    player.src = story.audioFile;
    player.load();

    // Reset progress UI
    document.getElementById('progressBarFill').style.width = '0%';
    document.getElementById('currentTime').textContent = '0:00';
    document.getElementById('durationTime').textContent = '0:00';
    updatePlayerUIState();
  }

  // Smooth scroll details card into view on mobile
  setTimeout(() => {
    detailsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

// ── Audio Player Controls & Sync ──
function toggleAudio() {
  const player = document.getElementById('audioPlayer');
  if (!player || !player.src) return;

  if (audioIsPlaying) {
    player.pause();
    audioIsPlaying = false;
    updatePlayerUIState();
  } else {
    player.play()
      .then(() => {
        audioIsPlaying = true;
        updatePlayerUIState();
      })
      .catch(err => {
        console.warn('Playback failed:', err);
        audioIsPlaying = false;
        updatePlayerUIState();
      });
  }
}

function updatePlayerUIState() {
  const iconPlay = document.getElementById('icon-play');
  const iconPause = document.getElementById('icon-pause');
  const statusEl = document.getElementById('playerStatus');
  const trans = (typeof translations !== 'undefined' ? translations : (window.translations || null));

  if (!iconPlay || !iconPause || !statusEl) return;

  if (audioIsPlaying) {
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
    
    statusEl.innerHTML = currentLang === 'pl' 
      ? 'Odtwarzanie słuchowiska... 🔊' 
      : 'Hörspiel läuft... 🔊';
  } else {
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';

    if (activeStory) {
      statusEl.innerHTML = currentLang === 'pl' 
        ? 'Odtwarzanie wstrzymane ⏸' 
        : 'Wiedergabe pausiert ⏸';
    } else {
      statusEl.innerHTML = currentLang === 'pl' 
        ? 'Naciśnij play, aby odsłuchać' 
        : 'Drücke Play zum Anhören';
    }
  }
}

// Format duration/current time
function formatTime(secs) {
  if (isNaN(secs)) return '0:00';
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  // Restore language from localStorage
  try {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && (savedLang === 'pl' || savedLang === 'de')) {
      currentLang = savedLang;
    }
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }

  // Populate list
  initStoriesList();

  // Apply translations
  switchLang(currentLang);

  // Bind globals
  window.openDrawer = openDrawer;
  window.closeDrawer = closeDrawer;
  window.switchLang = switchLang;
  window.selectStory = selectStory;

  // Audio player events
  const player = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const progressWrap = document.getElementById('progressBarWrap');
  const progressFill = document.getElementById('progressBarFill');
  const currentText = document.getElementById('currentTime');
  const durationText = document.getElementById('durationTime');

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', toggleAudio);
  }

  if (player) {
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
      audioIsPlaying = false;
      updatePlayerUIState();
      if (progressFill) progressFill.style.width = '0%';
      if (currentText) currentText.textContent = '0:00';
    });
  }

  // Seek on click
  if (progressWrap && player) {
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
});
