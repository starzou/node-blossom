'use strict';

define(['angular', 'services'], function (angular, services) {

    angular.module('blossomApp.filters', ['blossomApp.services'])
        .filter('interpolate', ['version', function (version) {
            return function (text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }]);
    
});
