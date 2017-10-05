var gulp = require('gulp')
    , inject = require('gulp-inject')
    , concat = require('gulp-concat')
    , uglify = require('gulp-uglify')
    , angularFilesort = require('gulp-angular-filesort');

var assetsDir = './grails-app/assets/';

gulp.task('move-vendor-styles', function () {
    var sources = gulp.src([
        assetsDir + 'vendor/bootstrap-css-only/css/bootstrap.css'
    ]);
    var destination = assetsDir + 'stylesheets';

    return sources.pipe(gulp.dest(destination))
});

gulp.task('move-vendor-scripts', function () {
    var sources = gulp.src([
        assetsDir + 'vendor/angular/angular.min.js',
        assetsDir + 'vendor/angular-route/angular-route.min.js'
    ]);
    var destination = assetsDir + 'javascripts';

    return sources.pipe(gulp.dest(destination))
});

gulp.task('compile-scripts', function () {
    var sources = gulp.src([
        assetsDir + 'javascripts/client/*.js',
        assetsDir + 'javascripts/client/*/*.js'
    ]);
    var destination = assetsDir + 'javascripts';

    return sources
        .pipe(angularFilesort())
        .pipe(concat('ng-grcommerce.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destination));
});

gulp.task('move-vendor-files', ['move-vendor-scripts', 'move-vendor-styles'], function () {
    // moves targeted vendor scripts and stylsheets files to respective assets folders
});

gulp.task('build', ['move-vendor-files', 'compile-scripts'], function () {
    //prepare angular assets
});