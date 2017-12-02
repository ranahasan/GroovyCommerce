<div class="container-flud">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid" ng-init="collapsed=true" ng-click="collapsed = !collapsed">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" style="background-color: transparent">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <span class="navbar-brand">
                    Groovy Commerce<i class="glyphicon glyphicon-registration-mark"></i>
                </span>
            </div>

            <div class="collapse navbar-collapse" ng-class="{'in':!collapsed}">
                <ul class="nav navbar-nav">
                    <li ng-repeat="route in routes"
                        ng-class="{'active': isActive(route.uri)}"
                        ng-if="route.isDisplayedInNav">
                        <a ng-click="collapsed=!collapsed" ng-href="[(route.url)]">[(route.name)]</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>