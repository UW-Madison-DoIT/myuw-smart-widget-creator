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

  var app = angular.module('my-app.github.controllers', []);

  app.controller("ReleaseNoteController", ['$http', '$scope', '$route', '$localStorage', function($http, $scope, $route, $localStorage){
    $scope.refresh = function(){
      $scope.loading=true;
      $http.jsonp('https://api.github.com/search/issues?q=repo:'+$scope.user+'/'+$scope.repo+'%20merged:%3E' + $scope.query.fromDate + '&callback=JSON_CALLBACK').then(
        function(result){
          $scope.loading=false;
          $scope.pulls = result.data.data;
        },
        function(why){
          $scope.loading=false;
          $scope.failed = true;
          var what = why;
        }
      )
    }
    $scope.open = function($event) {
      $scope.status.opened = true;
    }
    var init = function() {
      $scope.pulls = {};
      $scope.user = 'uw-madison-doit';
      $scope.repo = 'uw-frame';
      $scope.query = {};
      $scope.query.fromDate = '2016-01-01'
      $scope.status = {
        opened: false
      };
      $scope.refresh();
    }

    init();
  }]);

});
