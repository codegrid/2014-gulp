var gulp = require('gulp');
var exec = require('gulp-exec');
 
gulp.task('remove', function() {
  return gulp.src('./css/**/_*.css')
    .pipe(exec('rm <%= file.path %>'))
    .pipe(exec.reporter());
});
