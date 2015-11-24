describe('drawer', function() {
    context('help', function() {
        var $aboutApp, $index, $taskList;
        before('get references to DOM nodes', function() {
            $aboutApp = $('#aboutapp');
            $index = $('#index');
            $tasklist = $('#tasklist');
        });

        it('brings the help into view', function() {
            var $toHelp = $('#tohelp');
            chai.expect($aboutApp.data('position')).not.to.equal('current');
            $toHelp.trigger('click');
            chai.expect($aboutApp.data('position')).to.equal('current');
            chai.expect($index.data('position')).to.equal('right');
            chai.expect(taskList.data('position')).to.equal('left');
        });
    });
});
