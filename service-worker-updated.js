self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("calc-media-cache").then(cache => {
      return cache.addAll([
        "/",
        "index.html",
        "pagina2.html",
        "doramu.png",
        "doramu2.png",
        "app-icon.png",        // ícone PWA
        "manifest.json",
        "images/brazil.png",
        "images/japan.png",
        "images/indonesia.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
