package dev.matija.groovycommerce

import grails.converters.JSON

class ProductController {
    ProductService productService
    SortAndOrderService sortAndOrderService

    def index() {
        render(sortAndOrderService.sortAndOrderItemList(productService.getEntities(), "productName", "asc") as JSON)
    }

    def getList() {
        render template: "list", contentType: "text/plain"
    }

    def getForm() {
        render template: "form", contentType: "text/plain"
    }

    def getDetails() {
        render template: "show", contentType: "text/plain"
    }

    def get(Long id) {
        System.out.println("Product / get entity")
        System.out.println(params)
        render(productService.getEntity(id) as JSON)
    }

    def save() {
        System.out.println("Product / save entity")
        System.out.println(params)
        render(productService.saveEntity(params) as JSON)
    }

    def update() {}

    def delete(Long entityId) {
        System.out.println("Product / delete entity")
        System.out.println(entityId)
        render(productService.removeEntity(entityId) as JSON)
    }
}
