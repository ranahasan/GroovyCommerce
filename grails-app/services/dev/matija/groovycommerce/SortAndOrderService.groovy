package dev.matija.groovycommerce

import grails.gorm.transactions.Transactional

@Transactional
class SortAndOrderService {
    public <T> List<T> sortAndOrderItemList(List<T> itemList, String sort, String order) {
        itemList.sort { a, b -> if (order == "asc") return a[sort] <=> b[sort] else return b[sort] <=> a[sort] }
        return itemList
    }
}
