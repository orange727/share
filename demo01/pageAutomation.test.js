var webPage = require('webpage');
var page = webPage.create();

// 设置 UA
page.settings.userAgent = "Mozilla/5.0 (Linux; U; Android 4.4.4; zh-CN; MI 4LTE Build/KTU84P) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 UCBrowser/9.9.5.489 U3/0.8.0 Mobile Safari/533.1";

page.open('http://m.sm.cn/s?q=%E9%B9%BF%E6%99%97', function (s) {
  if (s !== 'success') {
      console.log('无法连接');
      phantom.exit();
  } else {
      page.includeJs('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js', function() {
        var result = page.evaluate(function() {
            var scs = $('.sc');
            var isInResult = true;
            for (var i = 0; i < scs.length; i +=1) {
                if (!$(scs[i]).parents('#results').length) {
                    console.log($(scs['i']).attr('class'), '不在id=results节点当中');
                    isInResult = false;
                    break;
                }
            }
            return isInResult;
        });
        console.log('所有的sc节点是否都在id=results中', result);
        phantom.exit();
    });
  }
});
