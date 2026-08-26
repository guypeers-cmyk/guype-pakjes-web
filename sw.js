const CACHE_NAME = 'pakjes-cache-v3';
const FILES_TO_CACHE = [
  '/',
  'index.html',
  'manifest.json',
  'icon-192.svg',
  'icon-512.svg'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => { if (k !== CACHE_NAME) return caches.delete(k); })))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  if (evt.request.method !== 'GET') return;
  evt.respondWith(
    fetch(evt.request).then(resp => {
      const respClone = resp.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(evt.request, respClone));
      return resp;
    }).catch(() => caches.match(evt.request).then(m => m || caches.match('index.html')))
  );
});