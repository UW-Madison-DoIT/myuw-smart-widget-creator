'use strict';

define(['angular', 'require'], function(angular, require) {
  var app = angular.module('my-app.wizard.directives', []);

  app.directive('widgetCard', function(){
      return {
          restrict : 'E',
          templateUrl : require.toUrl('./partials/widget-card.html')
      }
  });
});
