// 加载PhantomJS的webpage模块，并创建一个实例。
var webPage = require('webpage');
var page = webPage.create();

// 设置 UA
page.settings.userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3";

// 打开网页，打印返回结果
page.open('http://m.sm.cn', function (s) {
  console.log(s);
  phantom.exit();
});

