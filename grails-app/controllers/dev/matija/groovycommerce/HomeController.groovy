package dev.matija.groovycommerce

class HomeController {

    def index() {
        render template: "index", contentType: "text/plain"
    }
}
