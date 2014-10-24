// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // study page that will use the StudyController
        .when('/study', {
            templateUrl: 'views/study.html',
            controller: 'StudyController'
        });

    $locationProvider.html5Mode(true);

}]);