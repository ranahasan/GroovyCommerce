<select ng-model="productType" name="productType" class="form-control">
    <option value="">None selected ...</option>
    <option ng-repeat="productType in productTypeList" value="[( productType.id )]">
        [( productType.typeName )]
    </option>
</select>