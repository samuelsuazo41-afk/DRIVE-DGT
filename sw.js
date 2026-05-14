const CACHE_NAME = 'gasdrive-v7.2';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './data/preguntas.json',
  './data/casos.json',
  './data/tips.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting(); // fuerza actualización inmediata
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName