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
          
          if(content && (validJSON(content) || $scope.portlet.contentIsJSON)) {
               $scope.content = $scope.portlet.contentIsJSON ? content : JSON.parse(content);
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