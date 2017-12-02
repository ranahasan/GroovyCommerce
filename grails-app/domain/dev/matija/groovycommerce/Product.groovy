package dev.matija.groovycommerce

import grails.rest.Resource

@Resource(uri = "/products", formats = ['json'])
class Product {
    String productName
    Long typeId
    String stockKeepingUnit
    Double unitPrice = 0
    Double unitTax = 0
    Double unitBasePrice = 0
    Date dateCreated
    Date lastUpdated

    static constraints = {
        productName blank: true, nullable: true, unique: false
        typeId nullable: true
    }
}
