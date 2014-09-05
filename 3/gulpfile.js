var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

function plumberWithNotify() {
  return plumber({errorHandler: notify.onError("<%= error.message %>")})
}

gulp.task('stylus', function() {
  return gulp.src('styl/**/*.styl')
    .pipe(plumberWithNotify())
    .pipe(stylus())
    .pipe(gulp.dest('css/'));
});

gulp.task('optimize', function() {
  return gulp.src('css/**/*.css')
    .pipe(plumber())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('css/'))
    .pipe(minify())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('css/'));
});

gulp.task('optimizeStylus', function() {
  runSequence(
    'stylus',
    'optimize'
  )
});

gulp.task('watch', function() {
  gulp.watch(['styl/**/*.styl'], ['stylus']);
});
