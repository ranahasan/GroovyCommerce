(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('TypeListController', TypeListController);

    TypeListController.$inject = ['$scope', '$route', 'typeService', 'ROUTES'];
    function TypeListController($scope, $route, typeService, ROUTES) {
        $scope.pageTitle = "List of product types";
        $scope.typeList = [];
        $scope.linkToEdit = ROUTES['PRODUCT-TYPE-EDIT'].path;

        $scope.removeType = removeType;

        init();

        function init() {
            typeService.getEntityList()
                .then(function (response) {
                    var types = [];
                    angular.forEach(response.data, function (value, key) {
                        this.push(value);
                    }, types);
                    $scope.typeList = types;
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        }

        function removeType(id) {
            typeService.deleteEntity(id)
                .then(function (response) {
                    $route.reload();
                })
                .catch(function (error) {
                    alert(error.message);
                    console.log(error.message);
                });
        }
    }
})();