/**
 * description : blossomApp
 * date : 2014/8/31 18:17
 * author : StarZou
 */

'use strict';

define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'angularRoute',
], function (angular, filters, services, directives, controllers) {
    return angular.module('blossomApp', [
        'ngRoute',
        'blossomApp.filters',
        'blossomApp.services',
        'blossomApp.directives',
        'blossomApp.controllers'
    ]);
});
