(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];
    function HomeController($scope) {
        $scope.pageTitle = "Home page";
    }
})();