
define(['angular'], function(angular) {

  /*Keep in sync with docs/mardown/configuration.md*/

    var config = angular.module('override', []);
    config
        //see configuration.md for howto
        .constant('OVERRIDE', {
          'NAMES' : {
            'title' : 'MyUW Tools'
          },
          'MISC_URLS' : {
            'loginURL' : 'https://my.wisc.edu/portal/Login?profile=bucky',
            'logoutURL' : 'https://my.wisc.edu',
            'rootURL' : '#/'
          }
        })

    return config;

});
