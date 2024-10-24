/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e5c5ff98dd6e2f4dfc35e7af522e4158"],["/about/Typecho_Blog.html","ea53499632e7cae77962ea7d82485ddf"],["/archives/2021/07/index.html","eb22300b87854cffc3e200329936e7f9"],["/archives/2021/08/index.html","3c596d1bca7bd5a348c7e80c76a13288"],["/archives/2021/11/index.html","28b5ab6cf2f27d47e3a7e6c4714cde6b"],["/archives/2021/12/index.html","c5b3f4a3528f04b3d8255cf0c46af83f"],["/archives/2021/index.html","c91eeaf0c8afa02d6582426d68ac103a"],["/archives/2021/page/2/index.html","9215c6904f2191dda6cebccc4d6cf92a"],["/archives/2021/page/3/index.html","bdb43a3b4fae41475526a74bff9cd262"],["/archives/2022/01/index.html","705c0c252e054c7300cbd79f624c1f2e"],["/archives/2022/03/index.html","205289a18dc66c451c44df9f6644e02f"],["/archives/2022/07/index.html","266eb0dd5bcd1b9df4923281f47073b3"],["/archives/2022/index.html","f9ccd52e4ef2646636ff1ef1f7144ed0"],["/archives/2024/10/index.html","184429c6c9d94484059fc92018b5140a"],["/archives/2024/index.html","2d5b31fa6a470422886b65f9c86166ad"],["/archives/index.html","5ca33e199fa8f1b3aefa18b429b679ec"],["/archives/page/2/index.html","bbc4b77fe9fa336418c82b440f87b906"],["/archives/page/3/index.html","5e3811f0ae01a98f3069b55ee2798259"],["/assets/2022_07_19施工页面.png","034e7ef29a7c7182f5bd5c38de99ebb4"],["/assets/Remember.png","0032b3183614260a602c88f9bd210885"],["/assets/cloudmusic_encSecKey/0.png","6358055edbff5cb0d7e75a4e10aeb350"],["/assets/cloudmusic_encSecKey/1.png","dddb36969fddce5f9f58722edaee0a4a"],["/assets/cloudmusic_encSecKey/2.png","177d67d7cb36f9351b00b49083acf8f4"],["/assets/cloudmusic_encSecKey/3.png","bb3ab25490a8794c5be616cbd0cbf76e"],["/assets/cloudmusic_encSecKey/4.png","59b9e160afa796c6fded2c71f030b8e2"],["/assets/cloudmusic_encSecKey/5.png","be301a78c446f97310ccdd9f32fbcb94"],["/assets/triangle.jpg","5a9e177be3bfd2fa3f53029a6afb9149"],["/assets/xupt_2021tfb.jpg","87cb2ca5684c628d6c75a95f05302888"],["/categories/Java学习笔记/index.html","07b3f1b92ddc3ed2ffccd0c57cd672e0"],["/categories/Java学习笔记/page/2/index.html","69f1348342e55771aac537c91d3349be"],["/categories/Java练习/index.html","bd63bd6318213f5b0d306b48e71f6862"],["/categories/Vue前端/index.html","9c8b9269b94aba7857ea9f6a8688835d"],["/categories/index.html","9bd71f83cd9f1570e65262085919013b"],["/categories/python/index.html","d340bc62e2bf0293164f7e55b32f0b14"],["/categories/大学生活/index.html","ce39d00de8f8b3968d7fef87d93b8f03"],["/coding/java/exercise/1.html","9642cf61d59f12bb460f4282ac2cb946"],["/coding/java/exercise/2.html","4a9008f63ef74216cb0dddc7fc1d6e1b"],["/coding/java/exercise/3.html","059d3de4dfa3cb98fd864f253536c960"],["/coding/java/exercise/4.html","9dacdb90dba1e5cc46a35a8ac71848e5"],["/coding/java/exercise/5.html","e7d72609447dfadbb5c1717fa89c6a3b"],["/coding/java/note/1.html","6d2a717b5ee86606506964c53f870d0a"],["/coding/java/note/10.html","5cb6c18871ab86da0741a1f4ec2f4e8f"],["/coding/java/note/11.html","2f15afc30e8b8f085546fdad4d1d46b9"],["/coding/java/note/12.html","859f5a6415a1f4405266170198148cbc"],["/coding/java/note/2.html","3f69f877fbeee01684e825162d7fdce0"],["/coding/java/note/3.html","e02256414826cd9a98b80ae5cef1391e"],["/coding/java/note/4.html","f8c477bd207be1a3640113755d2f92de"],["/coding/java/note/5.html","49e59cfa8ea948a2324462e324621190"],["/coding/java/note/6.html","c4ff8e6c5870819fe53ac0d320982ed2"],["/coding/java/note/7.html","6a4e1f343300a33ae49adcd239f48f7a"],["/coding/java/note/8.html","9b4048b457b92e2b6d75783740ad9cb1"],["/coding/java/note/9.html","e3b96e511fc4fafef9fb03ab0ebc099d"],["/coding/python/cloudmusic_encseckey.html","81ef6d1406b9d57ea95676ddfe17ccc6"],["/coding/python/dropin_wiki.html","1866a8ccdbdd2dccaf66c329215d319a"],["/coding/vue/1.html","850f91d83a92d8edc36456d18ac15cb7"],["/coding/vue/2.html","f2ce974b2f850702147dd526915c0a3f"],["/css/main.css","95c6f56c880e05e295e481ec4e741f35"],["/guidance.html","2eff6f6c1d149b3c33012ce4c08b2591"],["/hello.html","4ed491aeec951c4bb2baa0130376c79d"],["/index.html","b70c27041b40031f6352f03031b54310"],["/js/main.js","5018e50ec90e480975c6bfb8ca24f8a5"],["/js/plugins/copycode.js","ab0e450780d5873637ad4d9ff0df63db"],["/js/search/algolia-search.js","afc1c6d8615cd353a3885c1b8d121d57"],["/js/search/local-search.js","ea52407080bf359b9ff6ae4475c275dc"],["/js/services/fcircle.js","a6d050803bac61db70e3e8b4690f4859"],["/js/services/friends.js","2eacc2b7d0f9ed2c7c6932597b818cc8"],["/js/services/ghinfo.js","8287428a2b5ae937ecc999e7d7a96134"],["/js/services/mdrender.js","e20405085c6e2d05a3e7592e8141b15a"],["/js/services/memos.js","8b3ae879ab489ff3251b4f84b74ffd72"],["/js/services/siteinfo.js","4ea50ea959a391da1aebbedf3d806551"],["/js/services/sites.js","e332580fd438da0059712da3a70473b6"],["/js/services/timeline.js","8a96604ca8956476f58d2a90edfd59c9"],["/js/services/weibo.js","4f30e6b22981e09f0746183c91170450"],["/life/goodbye_02202016.html","16889cebe2f01c64b4f9a33860d7de1d"],["/life/jjgl_nb.html","a4e88ceed31dbc4b8fb090218e5ccb17"],["/life/xupt_2021tfb.html","80f1e0a9bc3849b37821f8a86b4e851b"],["/life/yanta_union.html","bcf9f82b65029796e7802478db94619d"],["/page/2/index.html","df2bfbb31c1c19c4286f569faf32816d"],["/page/3/index.html","4e19e64733208d1ece85ac83b4fa43f4"],["/sw-register.js","e812e552b3831db7d748f38bca4e6839"],["/tags/Java/index.html","b3cad64ef895a599a59eafcba98306be"],["/tags/Java/page/2/index.html","a81cb9c5f9233eb7edeb3f2c57d73ca4"],["/tags/Scanner/index.html","a739d30986667fe1fb9da078b2a86d22"],["/tags/String/index.html","dfbe96e2c5f37fbb9b7f52084ef54780"],["/tags/index.html","a52721c8ce41a1246e56b90e3558428d"],["/tags/java-bean/index.html","c0bcff42b0944be0e914e2816579b219"],["/tags/node/index.html","e8ad5b348932d0990608d2fca337287e"],["/tags/python/index.html","5f585eac9d333020f0e51f7692b16921"],["/tags/this/index.html","c25df82756618e3e03fd98e99a7312b3"],["/tags/vue/index.html","654ab1d9179e37ab37c52177d1d9d077"],["/tags/关键字/index.html","4f5947f21c12dd6f2c7eb72f61b9cf8a"],["/tags/变量/index.html","fc7874e8c5b0ecf1f5380a2b0b854d85"],["/tags/基础/index.html","322ca87dc62b19ca0fdb6b46618888ae"],["/tags/基础/page/2/index.html","9b72feae835187f73ec9125c2c875c96"],["/tags/基础数据类型/index.html","0ce5884b6b750f7428295e80eeda5ea4"],["/tags/多频/index.html","fb7320f69055396dfce946900ee0be89"],["/tags/学习笔记/index.html","b929bdf78bae42c38d7a400554a6c45e"],["/tags/学习笔记/page/2/index.html","2b4fb21e6aaf4702f6043a08a704696a"],["/tags/封装性/index.html","decadb8ff76c9f6efd27ba17e78f6799"],["/tags/嵌套循环/index.html","1ca1b591b912ac2f330d7c2150f709cf"],["/tags/工程/index.html","9c1079bfe755d30befeadcd0536db3e4"],["/tags/循环/index.html","16529bcc8c0224cd696ff0cf412bc4c7"],["/tags/数组/index.html","3fa1ed0f25498cf84be6feb25eb544b4"],["/tags/构造器/index.html","6f546016504903be6b4538fb62a5810d"],["/tags/栈/index.html","db3e9a08ea68df7f57887ec9579d6369"],["/tags/校学生会/index.html","a342d3b7048f5742178de965e18d7e10"],["/tags/爬虫/index.html","3a930a0948fe4bbff04f3de5588784b6"],["/tags/算法/index.html","4b6efd9c2239b74fabdee865c1abd2d3"],["/tags/篮球/index.html","164916b06859c456a74617a3b41420c7"],["/tags/类/index.html","f7ef191da019a704de27d6028a37f5f2"],["/tags/练习/index.html","fba45fb895aefbf7e03bda895d92edc0"],["/tags/经济与管理学院/index.html","96721ba93c9ac4ab1c97f083b1f0614b"],["/tags/继承性/index.html","e04b1cd40b4ba9a5a519dafa5a985632"],["/tags/网易云/index.html","3f80882af9e54dce2e92abfdb4a94098"],["/tags/腾飞杯/index.html","b3b722adf4d2321c059e54ee4712fd61"],["/tags/西安邮电大学/index.html","8e5ce4e5da88dfb560db2844408a7b0a"],["/tags/运算符/index.html","f84bf109ed357a836a6db3c56eff6374"],["/tags/进制/index.html","7f33779af3880dd31a3646cef38db753"],["/tags/进阶/index.html","89babe25cf160c012dbd02ce05b2aa9f"],["/tags/选择/index.html","bc0085e96ef1e70e91b638ce58f7238f"],["/tags/链表/index.html","070e2d5bc9988b4d1330202ff3b0bc95"],["/tags/院学生会/index.html","a1b7f3a74adebdf970e198af1a709a6c"],["/tags/雁塔校区/index.html","f64d2a1f09aadf465bdbb7f0b062c434"],["/tags/面向对象/index.html","6e03a5f8bb759fccc09ee8be19ad7c28"],["/tags/音乐播放器/index.html","d352a688e0f87ce566ec8ed0e7069a37"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
