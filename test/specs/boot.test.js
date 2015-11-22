describe('boot', function() {
    it('displays the boot section', function() {
        var $boot = $('#boot');
        var spy = sinon.spy($boot, "show");
        $(window).trigger("load");
        chai.expect(spy).to.have.been.called;
    });
});
