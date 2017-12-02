(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', '$interpolateProvider', 'ROUTES'];
    function config($routeProvider, $locationProvider, $interpolateProvider, ROUTES) {
        $interpolateProvider.startSymbol('[(');
        $interpolateProvider.endSymbol(')]');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when(ROUTES['HOME'].path, {
                controller: 'HomeController',
                templateUrl: 'home/index'
            })
            .when(ROUTES['PRODUCT-TYPE-LIST'].path, {
                controller: 'TypeListController',
                template: '<type-list><type-list/>'
            })
            .when(ROUTES['PRODUCT-TYPE-EDIT'].path + '/:id?', {
                controller: 'TypeFormController',
                template: '<type-form><type-form/>'
            })
            .when(ROUTES['PRODUCT-LIST'].path, {
                controller: 'ProductListController',
                template: '<product-list><product-list/>'
            })
            .when(ROUTES['PRODUCT-EDIT'].path + '/:id?', {
                controller: 'ProductFormController',
                template: '<product-form><product-form/>'
            })/*
            .when(ROUTES['PRODUCT-SHOW'].path + '/:id', {
                controller: 'ProductDetailsController',
                template: '<product-details><product-details/>'
            })*/
            .otherwise({redirectTo: ROUTES['HOME'].path});
    }
})();