'use strict';

(function() {
	
	app.config(['$routeProvider',
	            function($routeProvider) {
			$routeProvider.when('/default', {
				templateUrl: 'my-app.html'
			}).otherwise({
				redirectTo: '/default'
			});
		}
	]);

})();