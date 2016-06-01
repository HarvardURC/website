
// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // Landing page
    .when('/', {
        templateUrl: 'views/landing/landing.html',
        controller: 'LandingController'
    })

    // Contact page
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })

    // Gallery page
    .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'MainController'
    })

    // // Projects page
    // .when('/projects', {
    //     templateUrl: 'views/projects/projects.html',
    //     controller: 'MainController'
    // })

    // Mech Warfare page
    .when('/projects/mw', {
        templateUrl: 'views/projects/mw.html',
        controller: 'MainController'
    })

    // MicroMouse page
    .when('/projects/mm', {
        templateUrl: 'views/projects/mm.html',
        controller: 'MainController'
    })

    // UAS page
    .when('/projects/uas', {
        templateUrl: 'views/projects/uas.html',
        controller: 'MainController'
    });


$locationProvider.html5Mode(true);

}]);
