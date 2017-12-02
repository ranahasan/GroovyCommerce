<div class="container">
    <form ng-submit="submitFormData()">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h1>[( pageTitle )]</h1>
            </div>
        </div>
        <div class="form-group">
            <div ng-show="errors.nonFieldErrors" class="alert alert-danger">[(errors.nonFieldErrors)]</div>
        </div>
        <div class="form-group">
            <label class="control-label" for="name">Product name</label>
            <input required class="form-control" ng-model="product.name" name="name" type="text" id="name"/>
            <div ng-show="errors.nameFieldErrors" class="alert alert-danger">[(errors.nameFieldErrors)]</div>
        </div>
        <div class="form-group">
            <label class="control-label" for="name">Product type</label>
            <type-select product-type="productType"></type-select>
            <div ng-show="errors.productTypeFieldErrors" class="alert alert-danger">
                [(errors.productTypeFieldErrors)]
            </div>
        </div>
        <div class="form-group">
            <label class="control-label" for="stockKeepingUnit">Product SKU</label>
            <input required class="form-control" ng-model="product.stockKeepingUnit" name="stockKeepingUnit" type="text" id="stockKeepingUnit"/>
            <div ng-show="errors.skuFieldErrors" class="alert alert-danger">[(errors.skuFieldErrors)]</div>
        </div>
        <div class="form-group">
            <label class="control-label" for="unitBasePrice">Unit base price</label>
            <input required class="form-control" ng-model="product.unitBasePrice" name="unitBasePrice" type="text" id="unitBasePrice"/>
            <div ng-show="errors.unitBasePriceFieldErrors" class="alert alert-danger">[(errors.unitBasePriceFieldErrors)]</div>
        </div>
        <div class="form-group">
            <label class="control-label" for="unitTax">Unit tax</label>
            <input required class="form-control" ng-model="product.unitTax" name="unitTax" type="text" id="unitTax"/>
            <div ng-show="errors.unitTaxFieldErrors" class="alert alert-danger">[(errors.unitTaxFieldErrors)]</div>
        </div>
        <div class="form-group">
            <label class="control-label" for="unitPrice">Unit price</label>
            <input required class="form-control" ng-model="product.unitPrice" name="unitPrice" type="text" id="unitPrice"/>
            <div ng-show="errors.unitPriceFieldErrors" class="alert alert-danger">[(errors.unitPriceFieldErrors)]</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>