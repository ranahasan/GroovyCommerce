<div class="container">
    <div class="panel-group">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h1>[( pageTitle )]</h1>
            </div>
        </div>
        <div class="panel panel-primary">
            <h3>[( productInfo.productName )]</h3>
            <h4>[( productInfo.stockKeepingUnit )]</h4>
            <div class="well-lg">
                <p>[( productInfo.unitBasePrice )]</p>
                <p>[( productInfo.unitTax )]</p>
                <hr/>
                <p>[( productInfo.unitPrice )]</p>
            </div>
            <div>
                <a ng-href="[( linkToEdit )][( productInfo.id )]">
                    <i class="glyphicon glyphicon-pencil"></i>
                </a>
                <a href="#" ng-click="removeProduct( productInfo.id )">
                    <i class="glyphicon glyphicon-remove-circle"></i>
                </a>
            </div>
        </div>
    </div>
</div>