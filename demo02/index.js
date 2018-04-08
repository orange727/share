// chai 作为断言库
var expect = require('chai').expect;

function add (para1, para2) {
    return para1 + para2;
}

// BDD 模式
// 测试集
describe('加法函数的测试', function() {
  // 测试用例
  it('1 加 1 应该等于 2', function() {
    // BDD 风格的断言 -- expect
    expect(add(1, 1)).to.be.equal(2);
  });
});
