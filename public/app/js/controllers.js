'use strict';

define(['angular', 'services'], function (angular) {

    return angular.module('blossomApp.controllers', ['blossomApp.services'])
        .controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
            $scope.scopedAppVersion = version;
        }])

        .controller('TodoCtrl', ['$scope', '$injector', function ($scope, $injector) {
            require(['controllers/TodoCtrl'], function (TodoCtrl) {
                $injector.invoke(TodoCtrl, this, {'$scope': $scope});
            });
        }]);

});
