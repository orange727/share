var webPage = require('webpage');
var page = webPage.create();

page.settings.userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3";

// 指定浏览器视口的大小
page.viewportSize = {
    width: 375,
    height: 667
};

// 生成网页截图
page.open("http://m.sm.cn", function start(status) {
  page.render('render.jpeg', {
      format: 'jpeg',
      quality: '100'
  });
  phantom.exit();
});

