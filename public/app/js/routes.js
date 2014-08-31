'use strict';

define(['angular', 'app'], function (angular, app) {

    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/blog', {
                templateUrl: 'app/tpl/blog.html',
                controller: 'TodoCtrl'
            }).
            otherwise({
                redirectTo: '/blog'
            });
    }]);

});
