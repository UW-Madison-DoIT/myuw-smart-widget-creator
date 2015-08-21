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
'use strict';

define(['angular'], function(angular){

  var app = angular.module('my-app.home.controllers', []);
  
  app.controller("HomeController", ['$http', '$scope', '$route', '$localStorage','$firebaseArray', function($http, $scope, $route, $localStorage,$firebaseArray){
      var template = "<div class='widget-body'> <div class='row'> <div class='col-xs-6 center' ng-repeat='item in content'> <a href='{{item.link}}'><div class='btn btn-primary rounded icon-button text-right'><i class='fa fa-{{item.icon}}'></i></div></a> <p>{{item.name}}</p> </div> </div></div>";
      var init = function() {
          $scope.storage = $localStorage;
          $scope.storage.showSidebar = false;
          $scope.template = template;
          var ref = new Firebase("https://myuw-tools.firebaseio.com/home");
          $scope.homeWidgets = $firebaseArray(ref);
      }

      init();
  }]);

});
