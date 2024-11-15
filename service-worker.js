const CACHE_NAME = "gps-locator-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/gps.html",
    "/manifest.json",
    "/style.css",
    // "/script.js"
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});