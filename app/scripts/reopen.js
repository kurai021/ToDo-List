window.onunload = function() {
    'use strict';
    var request_reopen = navigator.mozAlarms.add(
        new Date( (+new Date()) + 10000),
        'ignoreTimezone', {
            type: 'yolo'
        });

    console.log('setting to', new Date((+new Date()) + 10000) + '');

    request_reopen.onsuccess = function() {
        console.log('success');
    };

    request_reopen.onerror = function() {
        console.error('err');
    };

    navigator.mozSetMessageHandler('alarm', function() {
        console.log('alarm');
        launchSelf();
    });

    function launchSelf() {
        var request_launchself = window.navigator.mozApps.getSelf();
        request_launchself.onsuccess = function() {
            if (request_launchself.result) {
                request_launchself.result.launch();
            }
        };
    }
};
