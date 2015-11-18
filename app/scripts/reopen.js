window.onunload = function() {
    'use strict';
    if (!('mozAlarms' in window.navigator)) {
        // No alarm supported. return early
        return;
    }
    var requestReopen = window.navigator.mozAlarms.add(
        new Date( (+new Date()) + 10000),
        'ignoreTimezone', {
            type: 'yolo'
        });

    console.log('setting to', new Date((+new Date()) + 10000) + '');

    requestReopen.onsuccess = function() {
        console.log('success');
    };

    requestReopen.onerror = function() {
        console.error('err');
    };

    navigator.mozSetMessageHandler('alarm', function() {
        console.log('alarm');
        launchSelf();
    });

    function launchSelf() {
        var requestLaunchSelf = window.navigator.mozApps.getSelf();
        requestLaunchSelf.onsuccess = function() {
            if (requestLaunchSelf.result) {
                requestLaunchSelf.result.launch();
            }
        };
    }
};
