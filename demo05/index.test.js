describe('test', function() {

  it('id="test"的节点中含有 123', function() {
    document.body.innerHTML = __html__['index.html'];
    var html = document.getElementById('test');
    expect(html.textContent).to.be.equal('123');
  });

});
