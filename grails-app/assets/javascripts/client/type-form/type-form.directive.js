(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .directive('typeForm', typeForm);

    function typeForm() {
        return {
            restrict: 'EA',
            scope: false,
            controller: 'TypeFormController',
            templateUrl: '/getForm'
        }
    }
})();