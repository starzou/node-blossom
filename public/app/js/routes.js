'use strict';

define(['angular', 'app'], function (angular, app) {

    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/todo', {
                templateUrl: 'app/tpl/todo.html',
                controller: 'TodoCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

});
