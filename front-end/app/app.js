(function () {
    'use strict';
 
    angular
        .module('mainApp', ['ui.router'])
        .config(config);
 
    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/homepage");
 
        $stateProvider
            .state('homepage', {
                url: '/homepage',
                templateUrl: '../views/homepage.html',

            })
            .state('signin', {
                url: '/signin',
                templateUrl: '../views/signin.html',

            })
            .state('register', {
                url: '/register',
                templateUrl: '../views/register.html',

            });


    }

   
})();