package dev.matija.groovycommerce

import grails.converters.JSON
//import grails.rest.RestfulController

//class ProductTypeController extends RestfulController {
class ProductTypeController {
    /*
    static responseFormats = ['json']
    static allowedMethods = [save:'POST', update:'PUT', delete: 'DELETE',index: 'GET', show: 'GET']
    ProductTypeController(){
        super(ProductType)
    }
    */

    ProductTypeService productTypeService
    SortAndOrderService sortAndOrderService

    def index() {
        render(sortAndOrderService.sortAndOrderItemList(productTypeService.getEntities(), "typeName", "asc") as JSON)
    }

    def getList() {
        render template: "list", contentType: "text/plain"
    }

    def getForm() {
        render template: "form", contentType: "text/plain"
    }

    def getSelect() {
        render template: "select", contentType: "text/plain"
    }

    def get(Long id) {
        render(productTypeService.getEntity(id) as JSON)
    }

    def save() {
        System.out.println("Product type / save entity")
        System.out.println(params)
        render(productTypeService.saveEntity(params) as JSON)
    }

    def update() {}

    def delete(Long typeId) {
        System.out.println("Product type / delete entity")
        System.out.println(typeId)
        render(productTypeService.removeEntity(typeId) as JSON)
    }

    def show(Long typeId) {
        render(productTypeService.getEntity(typeId) as JSON)
    }
}
