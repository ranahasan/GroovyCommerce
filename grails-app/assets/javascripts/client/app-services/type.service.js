(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .service('typeService', typeService);

    typeService.$inject = ['$http'];
    function typeService($http) {
        return {
            getEntity: getEntity,
            getEntityList: getEntityList,
            postEntity: postEntity,
            putEntity: putEntity,
            deleteEntity: deleteEntity
        };

        function getEntity(id) {
            return $http.get('/productType/getProductType/', id);
        }

        function getEntityList() {
            return $http.get('/productType/getProductTypeList/');
        }

        function postEntity(entity) {
            return $http.post('/productType/postProductType/', {data: entity})
        }

        function putEntity(id, entity) {
            return $http.put('/productType/putProductType/', {data: {id: id, entity: entity}});
        }

        function deleteEntity(id) {
            return $http.delete('/productType/deleteProductType/', id);
        }
    }
})();