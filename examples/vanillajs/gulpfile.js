var gulp = require('gulp');
var jasmine = require('gulp-jasmine-browser');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp
    .src(['js/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp
    .src(['js/controller.js', 'test/*Spec.js'])
    .pipe(jasmine.specRunner({console: true}))
    .pipe(jasmine.headless());
});
