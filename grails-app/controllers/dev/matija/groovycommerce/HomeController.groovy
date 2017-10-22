package dev.matija.groovycommerce

class HomeController {

    def index() {
        render template: "index", contentType: "text/plain"
    }

    def getDashboard() {
        render template: "dashboard", contentType: "text/plain"
    }
}
