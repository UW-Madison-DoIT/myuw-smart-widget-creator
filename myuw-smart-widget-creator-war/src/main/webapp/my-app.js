'use strict';

(function() {
	
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
  
  app.controller("GenericWidgetController",['$scope', '$route', '$localStorage', function($scope, $route, $localStorage){
    $scope.storage = $localStorage;
    $scope.starterTemplates = [
    { id: 1, name: 'list-of-links' },
    { id: 2, name: 'list-of-content' },
    { id: 3, name: 'search-plus-links' },
    { id: 4, name: 'search-plus-help'}];
    
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
      $scope.storage.starterTemplate = "";
      
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
    
      if ($scope.storage.starterTemplate.name == 'list-of-links') {
        $scope.storage.template = "<h1>List of Links!</h1>"
      }
      if ($scope.storage.starterTemplate.name == 'list-of-content') {
        $scope.storage.template = "<h1>List of Content!</h1>"
      }
      if ($scope.storage.starterTemplate.name == 'search-plus-links') {
        $scope.storage.template = "<div id='portlet-id-{{::portlet.nodeId}}'><div><div class='widget-body'><form action='http://www.myprofdev.wisc.edu/portal/portal_login.asp' target='_blank'><div class='input-group'><input type='text' name='searchtext' class='form-control' placeholder='Search courses and events'><span class='input-group-btn'><button class='btn btn-primary' type='button'><i class='fa fa-search'></i></button></span></div></form><div class='row'><div class='col-xs-5 col-xs-offset-1 icon-button-div'><div class='btn btn-primary rounded icon-button'><a href='http://www.myprofdev.wisc.edu/default.asp' target='_blank'><i class='fa fa-at'></i></a></div><p>All Courses and Events</p></div><div class='col-xs-5 icon-button-div'><div class='btn btn-primary rounded icon-button'><a href='http://www.ohrd.wisc.edu/ohrdcatalogportal/LearningTranscript/tabid/57/Default.aspx?ctl=login' target='_blank'><i class='fa fa-envelope-o'></i></a></div><p>My Transcript</p></div></div></div><a class='btn btn-default launch-app-button' href='{{::portlet.url}}' target='{{::portlet.target}}'>Launch Full App</a></div></div>"
      }
      if ($scope.storage.starterTemplate.name == 'list-of-links') {
        $scope.storage.template = "<h1>Search plus Help!</h1>"
      }
      
    }
    
    
    
  }]);

})();