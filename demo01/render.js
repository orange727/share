var webPage = require('webpage');
var page = webPage.create();

page.settings.userAgent = "Mozilla/5.0 (Linux; U; Android 4.4.4; zh-CN; MI 4LTE Build/KTU84P) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.5.489 U3/0.8.0 Mobile Safari/533.1";

// 指定浏览器视口的大小
page.viewportSize = {
    width: 375,
    height: 667
};

// 生成网页截图
page.open("http://m.sm.cn/s?q=%E9%B9%BF%E6%99%97", function start(status) {
  page.render('render.jpeg', {
      format: 'jpeg',
      quality: '100'
  });
  phantom.exit();
});

