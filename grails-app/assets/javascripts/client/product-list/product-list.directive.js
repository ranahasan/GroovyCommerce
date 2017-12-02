(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .directive('productList', productList);

    function productList() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: '/product/getList'
        }
    }
})();