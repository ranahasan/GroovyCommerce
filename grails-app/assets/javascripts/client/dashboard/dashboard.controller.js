(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'ROUTES'];
    function DashboardController($scope, ROUTES) {
        $scope.routes = [];
        $scope.activeTab = '';

        init();
        $scope.$on('$routeChangeSuccess', function (previous, current) {
            if (current.$$route != undefined) {
                var currentPath = current.$$route.originalPath;
                if ($scope.routes.filter(function (route) {
                        return currentPath == route.url
                    })) setActive(currentPath);
            }
        });

        function init() {
            var routes = [];
            angular.forEach(ROUTES, function (value, key) {
                this.push({url: value['path'], name: value['title']});
            }, routes);
            $scope.routes = routes;
        }

        function setActive(pathname) {
            $scope.activeTab = pathname;
        }

        function isActive(pathname) {
            return $scope.activeTab == pathname;
        }
    }
})();