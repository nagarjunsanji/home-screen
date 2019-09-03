self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       '/home-screen/',
       '/home-screen/index.html',
       '/home-screen/index.js',
       '/home-screen/style.css',
       '/home-screen/images/fox1.jpg',
       '/home-screen/images/fox2.jpg',
       '/home-screen/images/fox3.jpg',
       '/home-screen/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
