(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('TypeFormController', TypeFormController);

    TypeFormController.$inject = ['$scope', '$location', 'typeService', 'ROUTES'];
    function TypeFormController($scope, $location, typeService, ROUTES) {
        $scope.pageTitle = "Enter product type";
        $scope.name = '';
        $scope.errors = {
            nonFieldErrors: '',
            nameFieldErrors: ''
        };

        $scope.submitFormData = submitFormData;

        function submitFormData() {
            typeService.postEntity({name: $scope.name})
                .then(function (response) {
                    console.log(response.data);
                    $location.url(ROUTES['PRODUCT-TYPE-LIST'].path);
                })
                .catch(function (error) {
                    console.log(error.message);
                    $scope.errors.nonFieldErrors = error.message;
                });
        }
    }
})();