(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('ProductFormController', ProductFormController);

    ProductFormController.$inject = ['$scope', '$location', 'productService', 'ROUTES'];
    function ProductFormController($scope, $location, productService, ROUTES) {
        $scope.pageTitle = "Enter product data";
        $scope.productType = -1;
        $scope.product = {
            name: '',
            productType: -1,
            stockKeepingUnit: '',
            unitBasePrice: '',
            unitTax: '',
            unitPrice: ''
        };
        $scope.errors = {
            nonFieldErrors: '',
            nameFieldErrors: '',
            productTypeFieldErrors: '',
            skuFieldErrors: '',
            unitBasePriceFieldErrors: '',
            unitTaxFieldErrors: '',
            unitPriceFieldErrors: ''
        };

        $scope.submitFormData = submitFormData;
        $scope.isValid = isValid;
        $scope.validate = validate;

        function submitFormData() {
            validate();
        }

        function isValid() {
            return !(!$scope.productType || $scope.productType < 0);
        }

        function validate() {
            if (!$scope.isValid()) {
                var error = "Product type not defined!";
                console.log(error);
                $scope.errors.productTypeFieldErrors = error;
            } else {
                $scope.product.productType = $scope.productType;
                productService.postEntity($scope.product)
                    .then(function (response) {
                        $location.url(ROUTES['PRODUCT-LIST'].path);
                    })
                    .catch(function (error) {
                        console.log(error.message);
                        $scope.errors.nonFieldErrors = error.message;
                    });
            }
        }
    }
})();