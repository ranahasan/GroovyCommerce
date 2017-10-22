(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .directive('dashboard', dashboard);

    function dashboard() {
        return {
            restrict: 'EA',
            scope: true,
            controller: 'DashboardController',
            templateUrl: '/home/getDashboard'
        };
    }
})();