package dev.matija.groovycommerce

import grails.rest.Resource

@Resource(uri = "/types", formats = ['json'])
class ProductType {
    String typeName
    Boolean isDeleted = false
    Long companyId

    static constraints = {
        typeName blank: true, nullable: true, unique: false
        companyId nullable: true, unique: false
    }
}
