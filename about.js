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

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (trans && trans[lang] && trans[lang][key]) {
      el.placeholder = trans[lang][key];
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

  // Web3Forms AJAX Form Handler
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      
      formStatus.style.color = 'var(--gold-patina)';
      formStatus.textContent = currentLang === 'pl' ? 'WYSYŁANIE...' : 'SENDEN...';
      
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      })
      .then(async (response) => {
        let res = await response.json();
        if (response.status == 200) {
          formStatus.style.color = '#28a745';
          formStatus.textContent = currentLang === 'pl' ? 'WIADOMOŚĆ WYSŁANA POMYŚLNIE!' : 'NACHRICHT ERFOLGREICH GESENDET!';
          
          // Zapis do newslettera MailerLite w tle
          fetch('/api/newsletter', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: object.email,
              name: object.name
            })
          })
          .then(res => res.json())
          .then(data => {
            console.log('[MailerLite Integration Log]', data);
          })
          .catch(err => {
            console.error('[MailerLite Integration Error]', err);
          });

          contactForm.reset();
        } else {
          console.log(response);
          formStatus.style.color = '#dc3545';
          formStatus.textContent = res.message || (currentLang === 'pl' ? 'WYSTĄPIŁ BŁĄD!' : 'EIN FEHLER IST AUFGETRETEN!');
        }
      })
      .catch(error => {
        console.log(error);
        formStatus.style.color = '#dc3545';
        formStatus.textContent = currentLang === 'pl' ? 'WYSTĄPIŁ BŁĄD SIECI!' : 'NETZWERKFEHLER IST AUFGETRETEN!';
      })
      .then(function() {
        setTimeout(() => {
          formStatus.textContent = '';
        }, 6000);
      });
    });
  }
});
