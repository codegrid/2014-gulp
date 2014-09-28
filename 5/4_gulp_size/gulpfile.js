var gulp = require('gulp');
var size = require('gulp-size');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');

gulp.task('css', function() {
  return gulp.src('./styl/**/*.styl')
    .pipe(stylus())
    .pipe(concat('all.css'))
    .pipe(size())
    .pipe(minify())
    .pipe(size({title: 'minify'}))
    .pipe(size({gzip: true}))
    .pipe(gulp.dest('./css'));
});
