(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];
    function MainController($scope) {
        $scope.pageTitle = 'Hello To ngGrails'
    }
})();