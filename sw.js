const CACHE_NAME = 'numeronarracje-v21';
const urlsToCache = [
  './',
  './index.html',
  './about.html',
  './app-info.html',
  './quiz.html',
  './jokes.html',
  './privacy.html',
  './terms.html',
  './style.css',
  './app.js',
  './about.js',
  './app-info.js',
  './quiz.js',
  './jokes.js',
  './privacy.js',
  './terms.js',
  './vibrations_db.js',
  './emotions_db.js',
  './i18n.js',
  './forecast_data.js',
  './manifest.json',
  './logo master violet rund.png',
  './NN_ICON_192x192.png',
  './NN ICON_512x512.png',
  './screenshot1.png',
  './screenshot2.png',
  './screenshot_mobile1.jpg',
  './screenshot_mobile2.jpg',
  './Milky Way 4K.png',
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Cinzel:wght@400;500;600;700&family=Raleway:wght@300;400;500;600&display=swap',
  './AUDIO-LIBRARY/CONTAINER A/A1.mp3',
  './AUDIO-LIBRARY/CONTAINER A/A2.mp3',
  './AUDIO-LIBRARY/CONTAINER A/A3.mp3',
  './AUDIO-LIBRARY/CONTAINER A/A4.mp3',
  './AUDIO-LIBRARY/CONTAINER A/A5.mp3',
  './AUDIO-LIBRARY/CONTAINER A/A6.mp3',
  './AUDIO-LIBRARY/CONTAINER A/A7.mp3',
  './AUDIO-LIBRARY/CONTAINER A/A8.mp3',
  './AUDIO-LIBRARY/CONTAINER A/A9.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B1.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B2.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B3.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B4.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B5.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B6.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B7.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B8.mp3',
  './AUDIO-LIBRARY/CONTAINER B/B9.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).catch(() => {
            // Optional: return offline page if implemented
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      self.clients.claim()
    ])
  );
});
