<div class="container">
    <form ng-submit="submitFormData()">
        <div class="panel panel-primary">
            <h1>[( pageTitle )]</h1>
        </div>
        <div class="form-group">
            <div ng-show="errors.nonFieldErrors" class="alert alert-danger">[(errors.nonFieldErrors)]</div>
        </div>
        <div class="form-group">
            <label class="control-label" for="name">Product type</label>
            <input required class="form-control" ng-model="name" name="name" type="text" id="name"/>
            <div ng-show="errors.nameFieldErrors" class="alert alert-danger">[(errors.nameFieldErrors)]</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>