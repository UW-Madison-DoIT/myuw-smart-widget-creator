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
  
  app.controller("HomeController", ['$http', '$scope', '$route', '$localStorage', function($http, $scope, $route, $localStorage){
      var template = "<div class='widget-body'> <div class='row'> <div class='col-xs-6 center' ng-repeat='item in content'> <circle-button data-href='{{item.link}}' data-fa-icon='{{item.icon}}'></circle-button> <p>{{item.name}}</p> </div> </div></div>";
      var init = function() {
          $scope.storage = $localStorage;
          $scope.storage.showSidebar = false;
          $http.get("json/home-widgets.json").then(function(result){
              $scope.storage.homeWidgets = result.data;
              $scope.storage.homeWidgets.forEach(function(entry){
                entry.template = template;
              });
          });
      }

      init();
  }]);

});
