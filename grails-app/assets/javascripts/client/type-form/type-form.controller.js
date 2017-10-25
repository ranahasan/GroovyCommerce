(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .controller('TypeFormController', TypeFormController);

    TypeFormController.$inject = ['$scope', 'typeService'];
    function TypeFormController($scope, typeService) {
        $scope.pageTitle = "Enter product type";
        $scope.name = '';

        $scope.submitFormData = submitFormData;

        function submitFormData() {
            typeService.postEntity({name: $scope.name})
                .then(function (response) {
                    console.log(response.data);
                    alert(response.data.message);
                })
                .catch(function (error) {
                    alert(error.message);
                    console.log(error.message);
                });
        }
    }
})();