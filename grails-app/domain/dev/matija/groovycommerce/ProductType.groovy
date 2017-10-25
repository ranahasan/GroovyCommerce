package dev.matija.groovycommerce


class ProductType {
    String typeName
    Boolean isDeleted = false

    static constraints = {
        typeName blank: true, nullable: true, unique: false
    }
}
