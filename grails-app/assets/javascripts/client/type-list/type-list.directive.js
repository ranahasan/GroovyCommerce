(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .directive('typeList', typeList);

    function typeList() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: '/productType/getList'
        }
    }
})();