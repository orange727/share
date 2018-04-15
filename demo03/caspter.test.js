var casper = require('casper').create({
    clientScripts:  [
        'jquery.min.js', // These scripts will be injected in remote
    ],
    pageSettings: {
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X)'
    }
});

casper.start();

var result;
casper.thenOpen("http://m.sm.cn/s?q=%E9%B9%BF%E6%99%97", function() {
    result = this.evaluate(function() {
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
});

casper.run(function() {
    this.echo(result).exit();
});
