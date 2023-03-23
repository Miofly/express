self.addEventListener('fetch', (e) => {
  // 如果是静态资源 不做拦截
 console.log(e.url);
});
