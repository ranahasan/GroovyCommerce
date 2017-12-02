(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('ProductListController', ProductListController);

    ProductListController.$inject = ['$scope', 'productService', '$route', 'ROUTES'];
    function ProductListController($scope, productService, $route, ROUTES) {
        $scope.pageTitle = "List of products";
        $scope.productList = [];
        $scope.linkToShow = ROUTES['PRODUCT-SHOW'].path;
        $scope.linkToEdit = ROUTES['PRODUCT-EDIT'].path;

        $scope.removeProduct = removeProduct;

        init();

        function init() {
            productService.getEntityList()
                .then(function (response) {
                    var products = [];
                    angular.forEach(response.data, function (value, key) {
                        this.push(value);
                    }, products);
                    $scope.productList = products;
                })
                .catch(function (error) {
                    console.log(error.message);
                });
        }

        function removeProduct(id) {
            productService.deleteEntity(id)
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