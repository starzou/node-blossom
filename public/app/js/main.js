/**
 * description : require 入口配置文件
 * date : 2014/8/31 18:17
 * author : StarZou
 */

'use strict';

window.name = "NG_DEFER_BOOTSTRAP!";

require.config({
    paths: {
        angular: '../lib/angular/angular',
        angularRoute: '../lib/angular-route/angular-route',
        text: '../lib/requirejs-text/text',
        jquery: '../lib/jquery/dist/jquery',
        bootstrap: '../lib/bootstrap/dist/js/bootstrap'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular'],
        'bootstrap': ['jquery']
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'app',
    'routes'
], function (angular, app, routes) {
    angular.element().ready(function () {
        angular.resumeBootstrap([app['name']]);
    });
});
