define([
    'angular',
    'require',
    './samples/route',
    './wizard/route',
    'portal',
    'app-config',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    './samples/controllers',
    './wizard/controllers',
    './wizard/directives',
], function(angular, require, samplesRoute, wizardRoute) {

    var app = angular.module('my-app', [
        'app-config',
        'my-app.wizard.controllers',
        'my-app.wizard.directives',
        'my-app.samples.controllers',
        'ngRoute',
        'ngSanitize',
        'ngStorage',
        'portal'
    ]);

    // TODO: Think of a more extensible approach such that frame and app can each manage their own routing without conflict
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
            when('/default', wizardRoute).
            when('/samples', samplesRoute).
            otherwise({ redirectTo : '/default'});
    }]);


    return app;

});
