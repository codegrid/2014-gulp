var gulp = require('gulp');
var stylus = require('gulp-stylus');
var using = require('gulp-using');
var cached = require('gulp-cached');
var concat = require('gulp-concat');
var remember = require('gulp-remember');

// gulp-rememberを使っていないパターン
// gulp.task('stylus', function() {  
//   return gulp.src('styl/**/*.styl')
//     .pipe(cached())
//     .pipe(stylus())
//     .pipe(concat('all.css'))
//     .pipe(gulp.dest('css/'));
// });

gulp.task('stylus', function() {
  return gulp.src('styl/**/*.styl')
    .pipe(cached())
    .pipe(stylus())
    .pipe(remember())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('test'))
});


gulp.task('watch', function(event) {
  gulp.watch(['styl/**/*.styl'], ['stylus']);
});
