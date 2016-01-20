define(['angular'], function(angular) {
  
  /*Keep in sync with docs/mardown/configuration.md*/

    var config = angular.module('app-config', []);
    config
        .constant('APP_FLAGS', {
            'features' : false,
            'showSearch' : true,
            'isWeb' : false,
            'defaultTheme' : 0
        })
        .constant('SERVICE_LOC', {
            'aboutURL' : null,
            'sessionInfo' : 'staticFeeds/session.json',
            'featuresInfo' : 'staticFeeds/features.json',
            'notificationsURL' : 'staticFeeds/notifications.json',
            'kvURL' : null,
            'groupURL' : null
        })
        .constant('NAMES', {
            'title' : 'MyUW Tools',
            'guestUserName' : 'guest'
        })
        .constant('SEARCH',{
            'searchURL' : 'https://my.wisc.edu/web/apps/search/'
        })
        .constant('NOTIFICATION', {
            'enabled' : false,
            'groupFiltering' : false,
            'notificationFullURL' : 'notifications'
        })
        .constant('MISC_URLS',{
            'back2ClassicURL' : null,
            'feedbackURL' : 'https://my.wisc.edu/portal/p/feedback',
            'helpdeskURL' : 'https://kb.wisc.edu/helpdesk/',
            'loginURL' : 'https://my.wisc.edu/portal/Login?profile=bucky',
            'logoutURL' : 'https://my.wisc.edu',
            'myuwHome' : 'https://my.wisc.edu',
            'rootURL' : '#/'

        })
        .constant('FOOTER_URLS', [
          { "url" : "https://my.wisc.edu/web/static/myuw-help",
            "target" : "_blank",
            "title" : "Help"
          },
          { "url" : "https://my.wisc.edu/portal/p/feedback",
            "target" : "_blank",
            "title" : "Feedback"
          }
        ])
        .constant('APP_BETA_FEATURES', []);

    return config;

});
