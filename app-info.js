let currentLang = 'pl'; // Default language

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

// ── Initialization ──
document.addEventListener('DOMContentLoaded', () => {
  // Initialize translations on load using persisted language
  try {
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && (savedLang === 'pl' || savedLang === 'de')) {
      currentLang = savedLang;
    }
  } catch (e) {
    console.warn('localStorage not accessible:', e);
  }
  
  switchLang(currentLang);

  // Smooth scroll to anchor if URL contains hashtag on load
  if (window.location.hash) {
    const targetId = window.location.hash.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }
});
