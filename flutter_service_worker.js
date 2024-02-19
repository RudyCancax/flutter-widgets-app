'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "88ddbe6ec8d5401c007df3802c8fee64",
".git/config": "37b359fa665d69380c137567fc5831b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1aef755dc3a16eedae0faaaad0609e30",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "189cecab9891dd51a5e8723c6b200062",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17a9149b382e78e8e3318f315d40acc7",
".git/logs/refs/heads/master": "17a9149b382e78e8e3318f315d40acc7",
".git/logs/refs/remotes/origin/HEAD": "f4984503101fba98a2e7e07ce9373ba9",
".git/logs/refs/remotes/origin/master": "f5a339fadf6b1465a9f42ce87f55607b",
".git/objects/04/4e04b397d1c63010d7d7156dc04efed3a2ded2": "d6a1abf30ce0dce72884eda130ba0e2d",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/f8748c2829c7d49381d6d8e5caeef09822292e": "886a78a1bc401cde3470beb3fd2336ad",
".git/objects/08/0760757243d0f9ae5594a21392e3d47f7b9794": "5e511c3cc683f66ebd11265bdd7ec2f3",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/99425be2b1039b24490c5c35df38c994383b0e": "4cfa65fed93d5c478ef85128b07ac0b1",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/1a/8c3d04aacc3215c98e63de36b332a81a80fcc6": "a7e50dfe06deafdffdda46f8d4992e6a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/32/ab4eb5c9c2c2367f2fd08729f188dd0a2826d9": "7ed30080b260b0de7dc870380719ea2e",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/173224363f63b34e8fc208510e358935c48c8c": "bfbd7590b03c1bba6511590b27571445",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/0823b10bd7506d4f569359a9adf1905cd8d98d": "0ebd4c9d081cd18697b9e4b97d834809",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/0b71b1454619c43d39fc07936e73059801c7e7": "abe44acc320bdc2b545a2a18169d8335",
".git/objects/58/ec9c545c89f915873a838f6e359dd2d0a3dd2a": "8ad6a5f7df1a6a43cc695be4e5e44759",
".git/objects/7c/f8c1e4942e0d541773282cd7fb0d2a26c24147": "70fb2a06dfe150a67b5213709bcf7639",
".git/objects/7d/45cc00fdc35e831a8e2509fc3f945a362add0e": "a2c596c6cba68a3c954847396539a45f",
".git/objects/80/f69b9ff70247269c9cb1476ec3897e84184f48": "e9898c1bdd20ed6385834d15b86ba52d",
".git/objects/86/bb40e7b6e5b91ad173e9035e414f82c85f3c13": "82dbc35ec4e42d5466c8636b3ebdc39d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9f/332e769134af4b43bef84f865ce30889b02063": "1f8c4b9141f279f2bb2b1f485ccddf7b",
".git/objects/9f/9f176d4d1a4130a1379547f2a928c9f7a518e2": "fcb0c51b2d0e521203ab283bc13f6e49",
".git/objects/a0/ab5b27734b263b0cb6bfbf65bff69e719c9aa5": "ca5e033cad4ca346da4ba6cfd4089fc6",
".git/objects/ad/bc38012c9723ef5cc2761418f3dec0109dd7ca": "8d86571e70f68cb98d1dadde626e691a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c1/fdcdfca9ca48d269b2c701be4df1d4eb14bf49": "53241cdb1e854fe1c2e5d8786a43a670",
".git/objects/c9/18dced87137eae0d3943a159acad8118bceed1": "928569316509a5391d34720813adeb9d",
".git/objects/ce/71bddd3787e0999f6b9d9ea5c1dba1e3b70f79": "74722fe36789080033b54c4a090d6a00",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/577dc5344513b6fe77814927896a6b27f3ad4c": "0fcd143ff27678d15fcb480affb961c2",
".git/objects/df/68c2acec9cedeef7185581bd4418b9b422806f": "46a49d31e7a60918657b4103c0a91f39",
".git/objects/df/8d0f7ae24527336c62427f938525919bd02bae": "5fe57daaac5c7cd3da991a535d2dc916",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/489850648322b56d0af010a4c2f6d472ecde3d": "331cfc800f5f815a21285c1aaee07a6b",
".git/objects/f0/09e10c0301f4c4fb3059afe20a08352850b1ab": "09a292ebbaeac8847d13469ab2c8d9f8",
".git/objects/fc/b2374519df64f5a85c9111efddf98643a50320": "ff6ed6aea1898ef47339d5bfa660d2ad",
".git/refs/heads/master": "1ac0712afff79080f747b489793143c7",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "1ac0712afff79080f747b489793143c7",
"assets/AssetManifest.bin": "4caa98219a49558213710ae8e15c2bb1",
"assets/AssetManifest.bin.json": "fb0b521316c7637d0cced89b6b036956",
"assets/AssetManifest.json": "147a7bb99b3f05f84f8fae02d4c14bc4",
"assets/assets/imgs/jar-loading.gif": "a0a7f99bbe4eb3f98bc9c957d8dd1756",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "eaf60fb7893efdf5a7cf889cd577d2fb",
"assets/NOTICES": "6e0875152f4d34b919aa9f5b60593f24",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4098ba40ba2959b565111d55d455eccd",
"/": "4098ba40ba2959b565111d55d455eccd",
"main.dart.js": "74188e199110f0b03c9836ce7659605a",
"manifest.json": "969acbea244ac727143efd47d91c010f",
"version.json": "98acdfbd33be6f8acb9d3905ccc2667a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
