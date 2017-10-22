(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['ROUTES'];
    function DashboardController(ROUTES) {
        $scope.routes = [];

        init();

        function init() {
            var routes = [];
            angular.forEach(ROUTES, function (key, value) {
                this.push({url: value['path'], name: value['name']});
            }, routes);
            $scope.routes = routes;
        }
    }
})();