<div class="container">
    <div class="panel-group">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h1>[( pageTitle )]</h1>
            </div>
        </div>
        <div class="panel panel-primary">
            <table class="col-xs-12 col-sm-12 col-md-12 table-condensed table-hover">
                <thead class="panel-heading">
                    <tr>
                        <th></th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="panel-body">
                    <tr ng-repeat="productType in typeList">
                        <td>
                            <span class="glyphicon glyphicon-tag"></span>
                        </td>
                        <td>
                            [( productType.typeName )]
                        </td>
                        <td>
                            <a ng-href="[( linkToEdit )][( productType.id )]">
                                <i class="glyphicon glyphicon-pencil"></i>
                            </a>
                            <a href="#" ng-click="removeType( productType.id )">
                                <i class="glyphicon glyphicon-remove-circle"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>