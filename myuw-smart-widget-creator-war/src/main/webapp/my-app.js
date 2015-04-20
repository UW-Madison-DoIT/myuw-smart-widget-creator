'use strict';

define([], function() {
    app.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/default', {
        templateUrl: 'my-app.html'
      }).when('/samples', {
        templateUrl: 'samples.html'
      }).otherwise({
        redirectTo: '/default'
      });
    }
  ]);
  
  app.directive('widgetCard', function(){
      return {
          restrict : 'E',
          templateUrl : 'widget-card.html'
      }
  });
  
  app.controller("GenericWidgetController",['$http', '$scope', '$route', '$localStorage', function($http, $scope, $route, $localStorage){
    $scope.storage = $localStorage;
    
    var validJSON = function isValidJson(json) {
      try {
          JSON.parse(json);
          return true;
      } catch (e) {
          return false;
      }
  }
    
    var init = function(){
      $scope.storage.isEmpty = false;
      $scope.storage.template = "";
      $scope.storage.content = "";
      $scope.storage.portlet = {
        title : "My Portlet",
        description : "This super cool portlet can change lives."
      };
      $scope.storage.starterTemplates = [];
      
      $http.get("/json/starterTemplates.json").then(function(result){
        $scope.storage.starterTemplates = result.data;
      });
      
      $scope.storage.inited = true;
    };
    
    var retInit = function() {
      $scope.template = $scope.storage.template;
      $scope.portlet = $scope.storage.portlet;
      $scope.isEmpty = $scope.storage.isEmpty;
      
      if($scope.storage.content && validJSON($scope.storage.content)) {
        $scope.content = JSON.parse($scope.storage.content);
         $scope.isEmpty = $scope.storage.evalString ? eval($scope.storage.evalString) : false;
      } else {
        $scope.content = {}
        $scope.isEmpty = true;
        $scope.errorJSON = $scope.storage.content ? "JSON NOT VALID" : "";
      }
    }
    if(!$scope.storage.inited) {
      init();
      retInit();
    } else {
      retInit();
    }
   
    $scope.reload = function(){
      $route.reload();
    };
    
    $scope.changeTemplate = function() {
      $scope.storage.template = $scope.storage.starterTemplate.template;
      $scope.storage.content = $scope.storage.starterTemplate.jsonStr;
    }
    
    
    
  }]);
});
