/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "decf506c1bdf5de94b8159ff3ff6248d"
  },
  {
    "url": "assets/css/0.styles.a6229f19.css",
    "revision": "3338b641ff6aa711a48b388099497403"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9ae675b4.js",
    "revision": "da68ef8f48354f09acc4b952d41b379d"
  },
  {
    "url": "assets/js/10.638d03ae.js",
    "revision": "c994b8992c4c2095773782d5d7bea479"
  },
  {
    "url": "assets/js/11.696fdfae.js",
    "revision": "06a42b80631907c12a4815c75ab7f578"
  },
  {
    "url": "assets/js/12.c18735af.js",
    "revision": "97888042e9bca3ae617b43faf6e4b562"
  },
  {
    "url": "assets/js/13.4acdc64c.js",
    "revision": "4c2b5c95ef1d87242a4e54f53b19f0f2"
  },
  {
    "url": "assets/js/14.2366deac.js",
    "revision": "0d4ad02a0c7b73364dcc31560a3eb894"
  },
  {
    "url": "assets/js/15.8b1961ab.js",
    "revision": "1024d04980f3047b3be6ea5615aa1953"
  },
  {
    "url": "assets/js/16.a6cd624a.js",
    "revision": "1ff9c64f5c040b991a8737fa55d8d9a7"
  },
  {
    "url": "assets/js/17.189d6429.js",
    "revision": "663283b0443f3d38943d1941560770b9"
  },
  {
    "url": "assets/js/18.5ae9b1f9.js",
    "revision": "cd7922f050395f81a652ab9c4a2be7f9"
  },
  {
    "url": "assets/js/19.07c82362.js",
    "revision": "fd83e959dfd8e03584cb139cc992bf97"
  },
  {
    "url": "assets/js/2.55951e86.js",
    "revision": "11232bad1ba6afade84ed3c98fefe079"
  },
  {
    "url": "assets/js/20.b140b525.js",
    "revision": "73730f2face3660a134697d9c44331ac"
  },
  {
    "url": "assets/js/21.d8ec0a74.js",
    "revision": "c4688adf70e637ca32a494ed32fcaaf9"
  },
  {
    "url": "assets/js/22.1a5410eb.js",
    "revision": "56175cfd55067375c37d4f5333905bfd"
  },
  {
    "url": "assets/js/23.fb9d56bd.js",
    "revision": "5f312979a647ffb844710350f4c695ee"
  },
  {
    "url": "assets/js/24.f06e3317.js",
    "revision": "6b045f943051be3c6417be7808ebb650"
  },
  {
    "url": "assets/js/25.41392126.js",
    "revision": "078da25dabe2b8fe79e8dcb341b74a3f"
  },
  {
    "url": "assets/js/26.1ee9ef45.js",
    "revision": "7de7e92ad3ee7cfac6d5362c101730ae"
  },
  {
    "url": "assets/js/27.5d0bdfc6.js",
    "revision": "f136a54f6795ebbc51a7c0e129117ed8"
  },
  {
    "url": "assets/js/28.955b9830.js",
    "revision": "e6771c9365d88d23cc109b935b16c9ed"
  },
  {
    "url": "assets/js/29.2368e756.js",
    "revision": "35cb36f5ae043d90838a757bc67061ff"
  },
  {
    "url": "assets/js/3.dcea37e2.js",
    "revision": "6413e3dc54cbd30aea88dd0698bf897d"
  },
  {
    "url": "assets/js/30.f5fc719f.js",
    "revision": "2050c16cd87aa3067358587fd7f77f79"
  },
  {
    "url": "assets/js/31.89052f8b.js",
    "revision": "90e0d5daa0f67d7e19e04b4cdf395239"
  },
  {
    "url": "assets/js/32.92d5de35.js",
    "revision": "02360bd1a5143cc29109d1ca29ab3375"
  },
  {
    "url": "assets/js/33.72424e54.js",
    "revision": "959b6f8aebf651c4c2ea3c136154b363"
  },
  {
    "url": "assets/js/34.d1252757.js",
    "revision": "54507d2a66cf1a62109cf9b80a4a21db"
  },
  {
    "url": "assets/js/5.6b8fbb79.js",
    "revision": "80fa0702e45466ef0c4baf55e1879454"
  },
  {
    "url": "assets/js/6.d0dad719.js",
    "revision": "f92f4ae47d706d897fc411839bf2348e"
  },
  {
    "url": "assets/js/7.73f20625.js",
    "revision": "22059a760b958a31c100294e6f80c4be"
  },
  {
    "url": "assets/js/8.6e1ffdff.js",
    "revision": "236f2f1aa617419f0202ce9fd0d3e65a"
  },
  {
    "url": "assets/js/9.85a27d66.js",
    "revision": "ac15fae06e37b9bf752bfaa7157eef06"
  },
  {
    "url": "assets/js/app.9a1a1688.js",
    "revision": "4956c3b68dcd6459c55c1202f49820b3"
  },
  {
    "url": "assets/js/vendors~docsearch.26320828.js",
    "revision": "8c488b9cf7add8022a85daf405c8d190"
  },
  {
    "url": "en/application/index.html",
    "revision": "f15b1719c4db71d27f979907b45e9bed"
  },
  {
    "url": "en/index.html",
    "revision": "a152b5c660fb89f61c44e79067696de9"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "5de773e7f554dc38c354662e62bbde3c"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "c924d6c1d7abf0827bf05e7f533d41c4"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "5285f5460f1f76972a12d741280b73cb"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cc40dfd01cf3b235ce6a10ebedec10c0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2a0b600f3ad0d71d9a6f789b99d3609a"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "d9e30f1bb3c8825211698eb1de034288"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "8230c53bdf042e4a40d3f61e3d1e6b8b"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "80aeead9a626b8e46289d81c90d0f264"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "1a07aeea0d6762459b94e520bbacec69"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "51884ae4c1403f79bf48adb9ca3427df"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ee5048b66d53514bd4e6535007eef213"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "98d650c73c625c63b891a872f3a08cb5"
  },
  {
    "url": "logo.png",
    "revision": "bbe9fcca4132438afbd61d01f5b573b9"
  },
  {
    "url": "love.svg",
    "revision": "dce92620955225095706c1f4a9010533"
  },
  {
    "url": "zh/application/index.html",
    "revision": "369dc39007c685f24e3ee1b25e4396e0"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "17379835d5334e623aae52963f928f10"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "faf22e68ce4afc1dc9e08e5500b32660"
  },
  {
    "url": "zh/article/index.html",
    "revision": "e9886a36ec3eecf3822fdac0c66df344"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "08fe805b0fd92fabc2b77bcf48e97b53"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "14e826037caa1f095f6a32a78c374643"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "ff322cba12c4c3f16da12e9a8f2460ad"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "3dceb36fe4319f19d8cff83e83ef56f0"
  },
  {
    "url": "zh/blog/docz-blog.html",
    "revision": "aefef602da738da2c4d5b19f41494f75"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "7ed38d377dd017aa15941558a6190202"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "67074bbfa30b6d3ad2bf69d4ebb752e7"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "90504bedfbad8a954be1d688e0e65373"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "1c45400f28d0e729f8f3feafa1090834"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "e8265b3cce6d3cc377691715bbf09715"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "84be7440e665027bf1ba45f92f6b4969"
  },
  {
    "url": "zh/index.html",
    "revision": "9366921bc5d71b6170283378f96ae917"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "3db27c1105e9d4f055802deda47da7a3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
