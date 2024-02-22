'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0d035b8624f8b5814ec08294ac210b67",
".git/config": "37b359fa665d69380c137567fc5831b2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d06ab40d280ee09775ab6bbb01e87221",
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
".git/index": "f921beac360bddfdc2cb8ec8bc0428d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0aa8d5280493cd70ed48d48a4fe684a7",
".git/logs/refs/heads/master": "0aa8d5280493cd70ed48d48a4fe684a7",
".git/logs/refs/remotes/origin/HEAD": "369913f634df1bf90b0893e73a952bb1",
".git/logs/refs/remotes/origin/master": "19f3c3af4d5f540a05b21f8c0464b7c3",
".git/objects/02/c4807ddb3dd2dd811a008a1674696ed3b18e6d": "aaa512e7d651e3610e82bdc12ad2a9d0",
".git/objects/02/eac222da26e6a015fb4cf7a731580edd654cbd": "2c32d386485129f785aeb642c3f68690",
".git/objects/04/4e04b397d1c63010d7d7156dc04efed3a2ded2": "d6a1abf30ce0dce72884eda130ba0e2d",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5b9ca94125c94a6f89dd993c2ec15c91f2b187": "5b627dd9a9753a2b4daed6eb60458fb8",
".git/objects/06/8955ac0cca5629ac96e9d7a8bbc72bff673aac": "28ad660cb3c69f87a3b9adf1494793da",
".git/objects/06/f8748c2829c7d49381d6d8e5caeef09822292e": "886a78a1bc401cde3470beb3fd2336ad",
".git/objects/07/f4541e6833670aa749cf8c1e34af804a47a78a": "bf6b0c6618523eed907c5df910838a6d",
".git/objects/08/0760757243d0f9ae5594a21392e3d47f7b9794": "5e511c3cc683f66ebd11265bdd7ec2f3",
".git/objects/09/5bfb4858e42f2da334022d3bb1ec24a6456eb9": "b21b6fb3e81dd6d0e83571ce93de49c9",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/99425be2b1039b24490c5c35df38c994383b0e": "4cfa65fed93d5c478ef85128b07ac0b1",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/118869e285361d731b5b5ea51027356673765e": "78d0dba70db39aba23889b07c3039d1f",
".git/objects/17/82a1a2fc091cf5e19cb8813b40d636b6a766d7": "bb3308c0653c0e04bf44102fe84e962c",
".git/objects/17/e1552b996908f5cbf41bb1f3062fc33052aff1": "9eb21cd78055b188a880698651ab0c66",
".git/objects/19/068ffcf04c1166f933828aa5eba5cc830fe161": "8607ab542c7595e52d848920a5a3930e",
".git/objects/19/37601055a1d7b7681c1249fb9771615e0df5bb": "2727da39eb077cb0db80a8d61a69522c",
".git/objects/1a/8c3d04aacc3215c98e63de36b332a81a80fcc6": "a7e50dfe06deafdffdda46f8d4992e6a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6dd9861a9d29fae69b63ac1e301c436a70274b": "260beec6fee3ed24d4a38d355c5ec2d5",
".git/objects/22/cfeef20d20b7c78fb55ec8dba73173a58b321f": "e6b7cf796f9e2b6102ce3e64eed181ac",
".git/objects/23/eeaf274fa932ca5d565f588115868bc3cebf98": "986444f4e0debf8a72f703982b64f637",
".git/objects/28/3984ec9e71dd04f2c0583664b37ae414cf47d8": "6c29f61d90a6d0df5b5539f7a14e78b3",
".git/objects/28/e45018861c58cd3a97aa752e7b06c4c020958d": "84ba532771a9922cfde37d20db469e22",
".git/objects/29/b9c20f9ab822bbb624ddd6648496a2f63f420f": "13b4ef511de718e4b6e2dd2a0cd882a4",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2f/df357410be3e16c5aa104b7927e24f58d38432": "9941e3cfe791787bf338b47f4f3959cc",
".git/objects/32/12dd2ed4a70744c1fe9f4b20ffeb833bddf1ef": "fd73e20a1d3be5de13d66881a9432941",
".git/objects/32/ab4eb5c9c2c2367f2fd08729f188dd0a2826d9": "7ed30080b260b0de7dc870380719ea2e",
".git/objects/33/4403f8e82e0339b4932cc25b71025485ceb251": "df2def3f716cd361de92ad25ab8ff7b1",
".git/objects/35/247a952db030c08471241a5e962fbd78209bdc": "4fdec58d055bb84bdb17e4c456dc144c",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/173224363f63b34e8fc208510e358935c48c8c": "bfbd7590b03c1bba6511590b27571445",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/0823b10bd7506d4f569359a9adf1905cd8d98d": "0ebd4c9d081cd18697b9e4b97d834809",
".git/objects/45/1cb035295a855621a115682ddb3fcdc964faad": "7705e07bd28f4f49c99e727ea7e4903d",
".git/objects/46/3c6aa1731590a6b5071f51910e4cecc0bd1414": "7f6633b37849b7ed43dd05e8fb27cf69",
".git/objects/47/7bcb883a8b7b92fe74f2d04c1234910a73d586": "6ddc0b9407fc8f721e8fd363590b925f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/5f28bca9c5de9d85b54aa599674ad77f9d8120": "7d703d7085768ca8c4aedc9fd5d8d969",
".git/objects/48/6fe870d13af01989eb74f9fd7df51b07b5d354": "999ba76f09a3ecec887e950532e802bb",
".git/objects/48/956cde7ee40315d2ec9688a5728ec061421a56": "0513a41bea708458d4a69ed4cb2763cc",
".git/objects/4a/2b1c54242f249555f1a580063cf0ab75468eb8": "a3aec569eea9483e350ca97c43a2ea06",
".git/objects/4d/6fe465ce7afe9a2e8e65c41934f9cb77992e79": "d1470bf6fef269cd13c63fd56a5de6c1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/0b71b1454619c43d39fc07936e73059801c7e7": "abe44acc320bdc2b545a2a18169d8335",
".git/objects/53/36eeb6cd0148f9f54c75f49b7bc8fe23208298": "a48c710b5085902e9fbbf6943045e153",
".git/objects/54/13c7146a9bbe961c27cc05c5cd4162625e8e64": "f21f703e6260d34d02ffb1d0fa7775c0",
".git/objects/58/ec9c545c89f915873a838f6e359dd2d0a3dd2a": "8ad6a5f7df1a6a43cc695be4e5e44759",
".git/objects/59/0e42f81d2fe3554a1f66a7f644606bac02050f": "41802cc6614c5ddabc3c0e50de82909f",
".git/objects/5a/6abc2967f4f770d7c20660591b314822bb3a91": "1f9e8afacf95ab2517fc17a1752dabff",
".git/objects/5b/f5878747b845912716c9561ad5852958c91e16": "7a9e227d78f0e874307091bc24ee25ca",
".git/objects/61/20cda1842aff494eb8f0e6761aee3ad8bdb540": "dd3d5008ddb545427e6c1238363ce1bf",
".git/objects/6c/03084decfc9dc34b5cadce475070b27d5477cb": "18e617c18670adab293477aed958f3a9",
".git/objects/6c/93aeffdfbebdc2a18b522df7e7f490ae4e7853": "e512dfe850bfdb4057988895ebbee62d",
".git/objects/6d/680871f18a3e3f4feb49f8a0089a8f6a81a910": "25a1b4c3fbea342e9aaa0916749a00ba",
".git/objects/74/8568b39db04d55e38994024e1fbe34e354efdb": "cc7fa46390780324fa318910e4ca9926",
".git/objects/74/c8892271473c5def7373eaab428d18c74f33b2": "d3a022835d752cad978c0fc308ec06fa",
".git/objects/76/decac7ec84a9248321b2278a56c86aa1bdce43": "1b9355aa4e7ca1e83b8e90c6b87b4ad9",
".git/objects/78/4a0100153a9a1c1f63988e601aacedbd8f5bf5": "52ef8e253147f3bb55e9f321a10f7320",
".git/objects/7c/f8c1e4942e0d541773282cd7fb0d2a26c24147": "70fb2a06dfe150a67b5213709bcf7639",
".git/objects/7d/45cc00fdc35e831a8e2509fc3f945a362add0e": "a2c596c6cba68a3c954847396539a45f",
".git/objects/7f/c5bfe04e5a459b64ec3b7a86adcf493fd4ccd7": "f3da8c2796167065a04ffb3dccec4b14",
".git/objects/80/f69b9ff70247269c9cb1476ec3897e84184f48": "e9898c1bdd20ed6385834d15b86ba52d",
".git/objects/83/f03ee3b8075e789f82b65fcdf9c1136beea78a": "7601084d9d3df65b39cb004a1065c28b",
".git/objects/86/bb40e7b6e5b91ad173e9035e414f82c85f3c13": "82dbc35ec4e42d5466c8636b3ebdc39d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/a358f3d4b666a754e1caceeddda4491c72cb9e": "5e9cc6d7cba1188dd1a3fb07ffe83740",
".git/objects/9a/619560f87dbdd31b2583ac66da1e232e604db5": "22cfb02d17289f13978353674c090cc0",
".git/objects/9c/f31e509793596c887cec984c739e33b300bb23": "bb402a5cbf9e6a73c4cf55528d5b5e76",
".git/objects/9e/0ec6dba025839bc4263b8eb71c945b6166d122": "210e8c398aafbe420586593acb0cee02",
".git/objects/9f/332e769134af4b43bef84f865ce30889b02063": "1f8c4b9141f279f2bb2b1f485ccddf7b",
".git/objects/9f/9f176d4d1a4130a1379547f2a928c9f7a518e2": "fcb0c51b2d0e521203ab283bc13f6e49",
".git/objects/a0/a968bc5306a96eb93a72f9e5ac1fdc4d428bfd": "2e24057fcf3f854641e8b1868e451d84",
".git/objects/a0/ab5b27734b263b0cb6bfbf65bff69e719c9aa5": "ca5e033cad4ca346da4ba6cfd4089fc6",
".git/objects/a3/7e62f88256fbf52fbede5d12bc63c4c2a51b56": "6207e78b505ddd4fd1fd89e0ce658f6e",
".git/objects/ab/461c577bb495eeb4dc148dc53b0e1781ed6bf0": "8fba7e8114475abe5d128121228eae40",
".git/objects/ad/bc38012c9723ef5cc2761418f3dec0109dd7ca": "8d86571e70f68cb98d1dadde626e691a",
".git/objects/ad/eaef5b32d503c0ac2619d20e97bfe70ec76c9f": "1f7b74236feed42d7fb75c1e3d3c77d9",
".git/objects/b0/6bbd0c8c6253081813617fb63c6b407ea1ab57": "e500ab6a306b4365548907cbe98faf98",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/0db72e0e41ec5510e13233711978e52cf25b6d": "bec72d8e873c7bc0857ad2a2d867752e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/c1b1c0fb1a044f5d79b4af5b88766636672531": "604ca3b443d9aec2bb1946f9149cd4d9",
".git/objects/be/ae493fbb8475572e0928b30f6480258e302bdb": "7f87f5ab5f5b5ffb8535823d6672e41a",
".git/objects/c1/fdcdfca9ca48d269b2c701be4df1d4eb14bf49": "53241cdb1e854fe1c2e5d8786a43a670",
".git/objects/c2/49ddbe403c41ca992626ff7dbef24cc9f5f687": "0951e08ce7631018ff8e7e3f63ca6815",
".git/objects/c2/64f4e1fb76a27eba2b9d1d29b2f67fce9c5fe3": "6afb127213e5e6fb20cc7c869f998a72",
".git/objects/c4/1a8127c0fb93ad7e80e18f674dc9fe5472956a": "dd94c6385fc188c3c9aa1b998e31508d",
".git/objects/c9/18dced87137eae0d3943a159acad8118bceed1": "928569316509a5391d34720813adeb9d",
".git/objects/cc/499538812c7d0309c6824f40b29b868b83b587": "710a2bb014bad3a6d5233c8a1a4b2e78",
".git/objects/ce/71bddd3787e0999f6b9d9ea5c1dba1e3b70f79": "74722fe36789080033b54c4a090d6a00",
".git/objects/d3/b20332bc0279cde3c50fcccb2a065a1595b987": "5cf88ea089ba8f7c6d73c2faa70707d4",
".git/objects/d5/026df947001552a04d25b87285dce0d0afd653": "801a68837c54ceb577f3dc4936b61353",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/23fa22b0418846771e838dfd66d2f92978b6f9": "432e7c791e28a650804e5db4aa92c5b5",
".git/objects/d9/4ad5e38e224aa786473cfaddbf9ad3e8638895": "261a3fe234409571863ebeba6b05901f",
".git/objects/dc/577dc5344513b6fe77814927896a6b27f3ad4c": "0fcd143ff27678d15fcb480affb961c2",
".git/objects/dd/64491ced34bc7099d9ec5d5f6c295dd7ba9feb": "2dd6e34abf23f1d615ef0e050f9716f9",
".git/objects/df/68c2acec9cedeef7185581bd4418b9b422806f": "46a49d31e7a60918657b4103c0a91f39",
".git/objects/df/8d0f7ae24527336c62427f938525919bd02bae": "5fe57daaac5c7cd3da991a535d2dc916",
".git/objects/e2/42b61c43ba6eae0459f66b3bc71e71eb093c33": "595b95cc51bc606d9764670f7bc3ebf4",
".git/objects/e6/57f19b064662e9f19a45f535395ee76ec01163": "e1e74882a6eeaf24ed254e593edfab7f",
".git/objects/e7/d9d57bdc96b762946b25d03fc88497be5dfcf6": "5c65de8496ec5fcf2be75d0fc667aad8",
".git/objects/e7/fada81b225b2ae3d371f573e03d00f6acaf02b": "af19695628b739a2d6619ef12821ea56",
".git/objects/e8/1652eee08d3d58908737951bbd0fb76ad9ee28": "e652d5f0e5c7d46ffbf67b628e4103d9",
".git/objects/e8/897d0095a3a16a8f5cd2a355fa006ba6a68591": "851725996c09ea771baaec8a82dd382c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4d4fae60770c08548798fe9649c4b40f721221": "af76ab8dd1e6bf4b6c34401641ff6976",
".git/objects/ed/489850648322b56d0af010a4c2f6d472ecde3d": "331cfc800f5f815a21285c1aaee07a6b",
".git/objects/ef/26b9a83e0cb73fd86c3971206ef4ecfd6342a0": "820155acf701415033b9ab5e4bf0be74",
".git/objects/f0/022e80f0d2f6206cc82d88a5910ffdb1a28b57": "4af21f6dc74ba56f0cb5da8cc6216abc",
".git/objects/f0/09e10c0301f4c4fb3059afe20a08352850b1ab": "09a292ebbaeac8847d13469ab2c8d9f8",
".git/objects/f0/2b5474d474453f82e37a9b08709827f17742b8": "ae9d19ad0e8cc08b40d887244384a444",
".git/objects/f8/8172c7cd0834b8b4734168de4d5724f9302818": "6a370e24e97ff029b07eb09afdf41fc5",
".git/objects/fa/bc0606cd033810bef209730f695e07749b172c": "cd806c234e06d9ac9245c80dd2d73810",
".git/objects/fc/b2374519df64f5a85c9111efddf98643a50320": "ff6ed6aea1898ef47339d5bfa660d2ad",
".git/objects/fd/b44ab234235cccc245d9952873076718e7c0d6": "b862010f865c956342cd76f151655515",
".git/refs/heads/master": "6af6aafccae00d6977ff8d5be4c26e6b",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "6af6aafccae00d6977ff8d5be4c26e6b",
"assets/AssetManifest.bin": "84e9b6c1062f89393971460191b53574",
"assets/AssetManifest.bin.json": "9ec0a59237c1df1c9ad8ad688d3c856e",
"assets/AssetManifest.json": "5513459fc34a449921cc9a453cedc316",
"assets/assets/imgs/jar-loading.gif": "a0a7f99bbe4eb3f98bc9c957d8dd1756",
"assets/assets/imgs/pikachu.gif": "8fa41da1f4602b875dfe2ba5a3aff509",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "71cc30807def79b0b0d17dbcd5d20ae0",
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
"index.html": "c8d51141858026c9961a59977a358b80",
"/": "c8d51141858026c9961a59977a358b80",
"main.dart.js": "6e560466bb3f6cd9fa4c6aeb662af846",
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
