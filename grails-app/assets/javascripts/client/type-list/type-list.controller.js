(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('TypeListController', TypeListController);

    TypeListController.$inject = ['$scope', 'typeService'];
    function TypeListController($scope, typeService) {
        $scope.pageTitle = "List of product types";
        $scope.typeList = [];

        init();

        function init() {
            typeService.getEntityList()
                .then(function (response) {
                    console.log(response.data);
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
    }
})();