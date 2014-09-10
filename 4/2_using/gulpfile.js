var gulp = require('gulp');
var stylus = require('gulp-stylus');
var using = require('gulp-using');

gulp.task('stylus', function() {  
  return gulp.src('styl/**/*.styl')
    .pipe(using())
    .pipe(stylus())
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
  gulp.watch(['styl/**/*.styl'], ['stylus']);
});
