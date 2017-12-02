(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .directive('productForm', productForm);

    function productForm() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: '/product/getForm'
        }
    }
})();