<div class="container">
    <table class="panel-group">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h1>[( pageTitle )]</h1>
            </div>
        </div>
        <div class="panel panel-primary">
            <table class="col-xs-12 col-sm-12 col-md-12 table-condensed table-hover">
                <thead class="panel-primary">
                    <tr>
                        <th></th>
                        <th>Name</th>
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
                            <span class="glyphicon glyphicon-new-window">
                                <a ng-href="/productType/get?[( productType.id )]"></a>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </table>
</div>