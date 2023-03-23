const CACHE_NAME = 'cache_v' + 8

const CAHCE_LIST = [ // 列表越长 越容易出问题
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png'
]

self.addEventListener('fetch', (e) => {
  // 如果是静态资源 不做拦截
  console.log(e.request.url, '===')
  
  // 缓存策略， 如果接口是不停的变化的 我们希望将数据更新到缓存中
  // e.respondWith(
  //   fetch(e.request).catch(res => {
  //     return caches.match(e.request)
  //   })
  // )
  //
  // serviceWorker中不支持ajax， 但是支持fetch
  
  // 如果断网了, 抛出异常
  // e.respondWith(
  //   fetch(e.request).catch(res => {
  //     return caches.match(e.request)
  //   })
  // )
})

// 当serviceWorker 安装时 需要跳过等待
async function preCache () {
  let cache = await caches.open(CACHE_NAME) // 创建一个缓存空间
  await cache.addAll(CAHCE_LIST)
  await self.skipWaiting()
}

self.addEventListener('install', (e) => {
  console.log('install')
  // e.waitUtil表示等待promise执行完成
  // 预先将缓存列表的数据缓存起来
  e.waitUntil(preCache())
})

async function clearCache () {
  let keys = await caches.keys()
  return Promise.all(keys.map(key => {
    if (key !== CACHE_NAME) {
      return caches.delete(key)
    }
  }))
}

// serviceWorker 不是立即生效，需要在下一次访问的时候才生效
self.addEventListener('activate', (e) => {
  console.log('activate');
  e.waitUntil(Promise.all([clearCache(), clients.claim()])) // 激活后立刻让serviceWorker拥有控制权
})

self.addEventListener('push', function (e) {
  console.log('push');
  self.registration.showNotification(e.data.text());
});
