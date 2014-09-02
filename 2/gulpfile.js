var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('stylus', function() {
  return gulp.src('styl/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css/'))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('css/'))
    .pipe(minify())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
  gulp.watch(["styl/**/*.styl"], ["stylus"]);
});
