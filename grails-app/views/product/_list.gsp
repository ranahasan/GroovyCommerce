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
                        <th>SKU</th>
                        <th>Label</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody class="panel-body">
                    <tr ng-repeat="product in productList">
                        <td>
                            <span class="glyphicon glyphicon-tag"></span>
                            <span><small>[( product.stockKeepingUnit )]</small></span>
                        </td>
                        <td>
                            <div>[( product.productName )]</div>
                        </td>
                        <td>
                            <div>[( product.unitPrice )]</div>
                        </td>
                        <td>
                            <a ng-href="[( linkToShow )][( product.id )]">
                                <i class="glyphicon glyphicon-new-window"></i>
                            </a>
                            <a ng-href="[( linkToEdit )][( product.id )]">
                                <i class="glyphicon glyphicon-pencil"></i>
                            </a>
                            <a href="#" ng-click="removeProduct( product.id )">
                                <i class="glyphicon glyphicon-remove-circle"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>