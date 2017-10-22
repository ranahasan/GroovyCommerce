(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .directive('typeForm', typeForm);

    function typeForm() {
        return {
            restrict: 'EA',
            scope: false,
            templateUrl: '/getForm'
        }
    }
})();