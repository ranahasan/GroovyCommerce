(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .service('productService', productService);

    productService.$inject = ['$http'];

    function productService($http) {
        return {
            resourceUrl: '/product/',
            getEntity: getEntity,
            getEntityList: getEntityList,
            postEntity: postEntity,
            putEntity: putEntity,
            deleteEntity: deleteEntity
        };

        function getEntity(id) {
            return $http.get(this.resourceUrl + 'get/' + id);
        }

        function getEntityList() {
            return $http.get(this.resourceUrl + 'index');
        }

        function postEntity(entity) {
            return $http.post(this.resourceUrl +
                'save?name=' + entity.name +
                '&productType=' + entity.productType +
                '&stockKeepingUnit=' + entity.stockKeepingUnit +
                '&unitBasePrice=' + entity.unitBasePrice +
                '&unitTax=' + entity.unitTax +
                '&unitPrice=' + entity.unitPrice);
        }

        function putEntity(id, entity) {
            return $http.put(this.resourceUrl +
                'update?id=' + id.toString() +
                '&name=' + entity.name +
                '&productType=' + entity.productType);
        }

        function deleteEntity(id) {
            return $http.delete(this.resourceUrl + 'delete?id=' + id.toString());
        }
    }
})();