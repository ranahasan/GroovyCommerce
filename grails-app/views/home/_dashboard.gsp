<div class="container-flud">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid" ng-init="collapsed=true">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" style="background-color: transparent">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" ng-class="{'in':!collapsed}">
                <ul class="nav navbar-nav">
                    <li ng-repeat="route in routes" ng-class="{'active': isActive(route.uri)}">
                        <a ng-click="collapsed=!collapsed" ng-href="[(route.url)]">[(route.name)]</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>