self.addEventListener("install", e=>{e.waitUntil(caches.open("cache").then(c=>c.addAll([
  "/", "index.html","pagina2.html","doramu.png","doramu2.png","manifest.json",
  "images/brazil.png","images/japan.png","images/indonesia.png"
])));});
self.addEventListener("fetch", e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});