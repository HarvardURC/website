
// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // Landing page
    .when('/', {
        templateUrl: 'views/landing/landing.html',
        controller: 'LandingController'
    })

    .when('/projects', {
        templateUrl: 'views/landing/landing.html',
        controller: 'ProjectsController'
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
    })

    // Sponsors page
    .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'MainController'
    })

    // Signup page
    .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupController'
    });


$locationProvider.html5Mode(true);

}]);
