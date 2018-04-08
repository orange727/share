// 加载PhantomJS的webpage模块，并创建一个实例。
var webPage = require('webpage');
var page = webPage.create();

// 设置 UA
page.settings.userAgent = "Mozilla/5.0 (Linux; U; Android 4.4.4; zh-CN; MI 4LTE Build/KTU84P) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.5.489 U3/0.8.0 Mobile Safari/533.1";

// 打开网页，打印返回结果
page.open('http://m.sm.cn/s?q=%E9%B9%BF%E6%99%97', function (s) {
  console.log(s);
  phantom.exit();
});

