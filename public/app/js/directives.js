'use strict';

define(['angular', 'services'], function (angular, services) {

    angular.module('blossomApp.directives', ['blossomApp.services'])
        .directive('appVersion', ['version', function (version) {
            return function (scope, elm, attrs) {
                elm.text(version);
            };
        }]);

});
