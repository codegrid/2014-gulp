var gulp = require('gulp');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('build', function() {
  var assets = useref.assets()
  
  return gulp.src('src/*.html')
    .pipe(assets)
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});
