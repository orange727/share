var expect = chai.expect;

describe('test', function() {
  it('id="test"的节点中含有 123', function() {
    var html = document.getElementById('test');
    console.log(1);
    console.log(html);
    expect(html.textContent).to.be.equal('123');
  });
});
