var gulp = require('gulp');
var useref = require('gulp-useref');
 
gulp.task('build', function() {
  var assets = useref.assets()
  
  return gulp.src('src/*.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});
