'use strict';

let routes = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: './views/landing/landing.html',
      controller: 'LandingController'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: './views/landing/landing.html',
      controller: 'ProjectsController'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './views/contact.html',
      controller: 'ContactController',
      controllerAs: 'vm'
    })
    .state('projects/mw', {
      url: '/projects/mw',
      templateUrl: './views/projects/mw.html'
    })
    .state('projects/mm', {
      url: '/projects/mm',
      templateUrl: './views/projects/mm.html'
    })
    .state('projects/uas', {
      url: '/projects/uas',
      templateUrl: './views/projects/uas.html'
    })
    .state('supporters', {
      url: '/supporters',
      templateUrl: './views/supporters.html'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './views/signup.html',
      controller: 'SignupController',
      controllerAs: 'vm'
    });
};

export default routes;
