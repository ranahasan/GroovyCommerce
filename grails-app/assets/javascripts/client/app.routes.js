(function () {
    'use-strict';

    angular
        .module('grCommerce')
        .constant('ROUTES', {
            'HOME': {path: '/home', title: 'Home'},
            'PRODUCT-TYPE-LIST': {path: '/productType/', title: 'Product types'},
            'PRODUCT-TYPE-EDIT': {path: '/productType/edit/', title: 'Edit product type'},
            'PRODUCT-LIST': {path: '/product/', title: 'Products'},
            'PRODUCT-SHOW': {path: '/product/show/', title: 'Show product'},
            'PRODUCT-EDIT': {path: '/product/edit/', title: 'Edit product'}
        });
})();