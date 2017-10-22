(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('TypeFormController', TypeFormController);

    TypeFormController.$inject = ['$scope', 'typeService'];
    function TypeFormController($scope, typeService) {
        $scope.pageTitle = "Enter product type";
        $scope.formData = {};

        $scope.submitFormData = submitFormData;

        function submitFormData() {
            typeService.postEntity($scope.formData)
                .then(function (response) {
                    alert('Successfully saved product type');
                })
                .catch(function (error) {
                    alert(error);
                    console.log(error);
                });
        }
    }
})();