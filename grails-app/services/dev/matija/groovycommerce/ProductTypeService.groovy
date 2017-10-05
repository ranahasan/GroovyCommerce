package dev.matija.groovycommerce

import grails.gorm.transactions.Transactional

@Transactional
class ProductTypeService {
    def getEntitiesByCompanyId(Long companyId) {
        return ProductType.findAllByCompanyId(companyId)
    }

    def getEntity(Long productTypeId) {
        return ProductType.get(productTypeId)
    }
}
