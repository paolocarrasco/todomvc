var gulp = require('gulp');
var jasmine = require('gulp-jasmine-browser');

gulp.task('default', function() {
  gulp
    .src(['js/controller.js', 'test/*Spec.js'])
    .pipe(jasmine.specRunner({console: true}))
    .pipe(jasmine.headless());
});
