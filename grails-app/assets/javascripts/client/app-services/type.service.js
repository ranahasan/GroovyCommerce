(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .service('typeService', typeService);

    typeService.$inject = ['$http'];

    function typeService($http) {
        return {
            resourceUrl: '/productType/',
            getEntity: getEntity,
            getEntityList: getEntityList,
            postEntity: postEntity,
            putEntity: putEntity,
            deleteEntity: deleteEntity
        };

        function getEntity(id) {
            return $http.get(this.resourceUrl + 'get?id=' + id.toString());
        }

        function getEntityList() {
            return $http.get(this.resourceUrl + 'index');
        }

        function postEntity(entity) {
            return $http.post(this.resourceUrl + 'save?name=' + entity.name);
        }

        function putEntity(id, entity) {
            return $http.put(this.resourceUrl + 'update?id=' + id.toString() + '&name=' + entity.name);
        }

        function deleteEntity(id) {
            return $http.delete(this.resourceUrl + 'delete?id=' + id.toString());
        }
    }
})();