(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .directive('typeSelect', typeSelect);

    function typeSelect() {
        return {
            restrict: 'EA',
            scope: {
                productType: '='
            },
            templateUrl: '/productType/getSelect',
            controller: 'TypeSelectController'
        }
    }
})();