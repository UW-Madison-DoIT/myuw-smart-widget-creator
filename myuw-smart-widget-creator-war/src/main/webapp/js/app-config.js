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

define(['angular'], function(angular) {

    var config = angular.module('app-config', []);
    config
        .constant('SERVICE_LOC', {
            'sessionInfo' : 'json/sessionsample.json',
            'sidebarInfo' : 'samples/sidebar.json',
            'notificationsURL' : 'samples/notifications.json',
            'groupURL' : null
        })
        .constant('NAMES', {
            'title' : 'MyTools',
            'crest' : 'img/uwcrest_web_sm.png',
            'crestalt' : 'UW Crest',
            'sublogo' : 'beta'
        })
        .constant('SEARCH',{
            'isWeb' : false,
            'searchURL' : 'https://my.wisc.edu/web/apps/search/'
        })
        .constant('NOTIFICATION', {
            'groupFiltering' : false,
            'notificationFullURL' : 'notifications'
        })
        .constant('MISC_URLS',{
            'feedbackURL' : 'https://my.wisc.edu/portal/p/feedback',
            'back2ClassicURL' : null,
            'whatsNewURL' : null
        });

    return config;

});
