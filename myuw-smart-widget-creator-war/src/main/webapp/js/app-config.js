define(['angular'], function(angular) {
angular.module('app-config', [])
.constant('SERVICE_LOC', {
                           'sessionInfo' : 'json/sessionsample.json',
                           'sidebarInfo' : 'json/sidebar.json'
                          });

});
