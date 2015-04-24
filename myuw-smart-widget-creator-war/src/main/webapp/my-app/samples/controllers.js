'use strict';

define(['angular'], function(angular){

  var app = angular.module('my-app.samples.controllers', []);
  
  app.controller("WidgetSampleController", ['$scope', function($scope){

      var validJSON = function isValidJson(json) {
        try {
            JSON.parse(json);
            return true;
        } catch (e) {
            return false;
        }
      }

      var init = function() {
          $scope.template = $scope.portlet.template;
          var content = $scope.portlet.content;

          if(content && validJSON(content)) {
              $scope.content = JSON.parse(content);
               $scope.isEmpty = false;
          } else {
              $scope.content = {}
              $scope.isEmpty = true;
              $scope.errorJSON = $scope.storage.content ? "JSON NOT VALID" : "";
          }


      }

      init();
  }]);

});
