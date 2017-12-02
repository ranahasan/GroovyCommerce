(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('TypeSelectController', TypeSelectController);

    TypeSelectController.$inject = ['$scope', 'typeService'];
    function TypeSelectController($scope, typeService) {
        $scope.productTypeList = [];
        $scope.productType = null;

        init();

        function init() {
            console.log('select data ($scope.productTypeList) ', $scope.productTypeList);
            typeService.getEntityList()
                .then(function (response) {
                    console.log('select data (response) ', response.data);
                    var types = [];
                    angular.forEach(response.data, function (value, key) {
                        this.push(value);
                    }, types);
                    console.log('select data (tyoe list) ', types);
                    $scope.productTypeList = types;
                    console.log('select data ($scope.productTypeList) ', $scope.productTypeList);
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        }
    }
})();