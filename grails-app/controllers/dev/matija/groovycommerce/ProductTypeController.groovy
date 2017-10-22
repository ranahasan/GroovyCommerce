package dev.matija.groovycommerce

import grails.converters.JSON

class ProductTypeController {
    ProductTypeService productTypeService
    SortAndOrderService sortAndOrderService

    def index() {
        Long companyId = (params?.companyId) ? Long.valueOf(params?.companyId) : 0
        render(sortAndOrderService.sortAndOrderItemList(productTypeService.getEntitiesByCompanyId(companyId)) as JSON)
        return
    }

    def getForm() {
        render template: "form", contentType: "text/plain"
    }

    def save() {}

    def update() {}

    def delete() {}

    def show(Long typeId) {
        render(productTypeService.getEntity(typeId) as JSON)
        return
    }
}
