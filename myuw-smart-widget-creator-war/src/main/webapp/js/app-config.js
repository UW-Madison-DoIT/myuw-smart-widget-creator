define(['angular'], function(angular) {

    var config = angular.module('app-config', []);
    config
        .constant('SERVICE_LOC', {
            'sessionInfo' : 'json/sessionsample.json',
            'sidebarInfo' : 'samples/sidebar.json',
            'notificationsURL' : 'samples/notifications.json',
            'groupURL' : null
        })
        .constant('NAMES', {
            'title' : 'MyTools',
            'crest' : 'img/uwcrest_web_sm.png',
            'crestalt' : 'UW Crest',
            'sublogo' : 'beta'
        })
        .constant('SEARCH',{
            'isWeb' : false,
            'searchURL' : 'https://my.wisc.edu/web/apps/search/'
        })
        .constant('NOTIFICATION', {
            'groupFiltering' : false,
            'notificationFullURL' : 'notifications'
        })
        .constant('MISC_URLS',{
            'feedbackURL' : 'https://my.wisc.edu/portal/p/feedback',
            'back2ClassicURL' : null,
            'whatsNewURL' : null
        });

    return config;

});
