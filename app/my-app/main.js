/*
 * Copyright 2012, Board of Regents of the University of
 * Wisconsin System. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Board of Regents of the University of Wisconsin
 * System licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define([
    'angular',
    'require',
    './samples/route',
    './home/route',
    './wizard/route',
    './github/route',
    'portal/settings/routes',
    'portal',
    'app-config',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    './samples/controllers',
    './home/controllers',
    './wizard/controllers',
    './wizard/directives',
    './github/controllers'
], function(angular, require, samplesRoute, homeRoute, wizardRoute, githubRoute, settingsRoutes) {

    var app = angular.module('my-app', [
        'app-config',
        'my-app.wizard.controllers',
        'my-app.wizard.directives',
        'my-app.home.controllers',
        'my-app.samples.controllers',
        'my-app.github.controllers',
        'ngRoute',
        'ngSanitize',
        'ngStorage',
        'portal'
    ]);

    // TODO: Think of a more extensible approach such that frame and app can each manage their own routing without conflict
    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/default', wizardRoute).
            when('/samples', samplesRoute).
            when('/home', homeRoute).
            when('/settings', settingsRoutes.betaSettings).
            when('/gh', githubRoute).
            otherwise({ redirectTo : '/home'});
    }]);


    return app;

});
