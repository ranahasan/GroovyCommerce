package dev.matija.groovycommerce

import grails.gorm.transactions.Transactional

@Transactional
class ProductService {
    def getEntities() {
        return Product.list()
    }

    def getEntity(Long entityId) {
        return Product.findById(entityId)
    }

    def saveEntity(def params = []) {
        System.out.println("product service")
        System.out.println(params)
        if (!params?.name) {
            return [status: 500, message: ("Failed to provide name for the product!")]
        }
        if (!params?.stockKeepingUnit) {
            return [status: 500, message: ("Failed to provide SKU for the product!")]
        }
        if (!params?.unitPrice) {
            return [status: 500, message: ("Failed to provide unit price for the product!")]
        }
        if (!params?.unitTax) {
            return [status: 500, message: ("Failed to provide unit tax for the product!")]
        }
        if (!params?.unitBasePrice) {
            return [status: 500, message: ("Failed to provide unit base price for the product!")]
        }
        if (!params?.productType) {
            return [status: 500, message: ("Failed to provide type for the product!")]
        }

        def productType = new Product(
                productName: params?.name,
                typeId: params?.productType,
                stockKeepingUnit: params?.stockKeepingUnit,
                unitPrice: params?.unitPrice,
                unitTax: params?.unitTax,
                unitBasePrice: params?.unitBasePrice
        )

        if (!productType.save(flush: true)) {
            return [status: 500, message: ("Failed to save product due to server error!")]
        }
        return [status: 200, message: ("Successfully saved product " + params.name)]
    }

    def removeEntity(Long entityId) {
        System.out.println("product service")
        System.out.println("entity id: " + entityId)
        if (!entityId) {
            return [status: 500, message: ("Failed to provide id for product")]
        }
        return [status: 200, message: ("Successfully delete product")]
    }
}
