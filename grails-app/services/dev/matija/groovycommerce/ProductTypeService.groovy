package dev.matija.groovycommerce

import grails.gorm.transactions.Transactional

@Transactional
class ProductTypeService {
    def getEntities() {
        return ProductType.list()
    }

    def getEntity(Long productTypeId) {
        return ProductType.get(productTypeId)
    }

    def saveEntity(def params = []) {
        System.out.println("product type service")
        System.out.println(params)
        if (!params?.name) {
            return [status: 500, message: ("Failed to provide name for the product type!")]
        }
        def productType = new ProductType(typeName: params.name)
        if (!productType.save(flush: true, failOnError: true)) {
            return [status: 500, message: ("Failed to save product type due to server error!")]
        }
        return [status: 200, message: ("Successfully saved product type " + params.name)]
    }

    def removeEntity(Long entityId) {
        System.out.print("product type service")
        System.out.print("entityId" + entityId.toString())
        if (!entityId) {
            return [status: 500, message: ("Failed to provide id of the product type!")]
        }
        return [status: 200, message: ("Successfully deleted the chosen product type!")]
    }
}
