(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('ProductShowController', ProductShowController);

    ProductShowController.$inject = ['$scope', 'productService', '$route', '$routeParams', 'ROUTES'];
    function ProductShowController($scope, productService, $route, $routeParams, ROUTES) {
        $scope.pageTitle = "Product information";
        $scope.productInfo = { id: $routeParams.id };
        $scope.linkToEdit = ROUTES['PRODUCT-EDIT'].path;

        $scope.removeProduct = removeProduct;

        init();

        function init() {
            productService.getEntity($scope.productInfo.id)
                .then(function (response) {
                    console.log(response.data);
                    $scope.productInfo = response.data;
                })
                .catch(function (error) {
                    alert(error.message);
                    console.log(error.message);
                })
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