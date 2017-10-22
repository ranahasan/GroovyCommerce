(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', '$interpolateProvider'];
    function config($routeProvider, $locationProvider, $interpolateProvider) {
        $interpolateProvider.startSymbol('[(');
        $interpolateProvider.endSymbol(')]');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.when('/home', {
            controller: 'HomeController',
            templateUrl: 'home/index'
        }).otherwise({redirectTo: '/home'});
    }
})();