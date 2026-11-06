// Offline-Unterstützung: Spiel wird beim ersten Besuch gespeichert und funktioniert danach auch ohne Internet.
const CACHE='snus-empire-v29';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))); self.clients.claim(); });
// Netzwerk zuerst (für Updates), bei Offline aus dem Cache
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request).then(r=>{ const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return r; }).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html')))); });
