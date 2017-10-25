<div class="container">
    <form ng-submit="submitFormData()">
        <div class="form-group">
            <label class="control-label" for="name">Product type</label>
            <input required class="form-control" ng-model="name" name="name" type="text" id="name"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>