(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .directive('productShow', productShow);

    function productShow() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: '/product/getDetails'
        }
    }
})();