'use strict';

(function() {
	
	app.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/default', {
				templateUrl: 'my-app.html'
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
  
  app.controller("GenericWidgetController",['$scope', function($scope){
    var init = function(){
      $scope.isEmpty = false;
      $scope.template = "";
      $scope.content = "";
      $scope.portlet = {
        title : "My Portlet",
        description : "This super cool portlet can change lives."
      };
    };
    init();
  }]);

})();