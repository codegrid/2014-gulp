var gulp = require('gulp');
var loadPlugins = require('gulp-load-plugins');
var plugin = loadPlugins();

gulp.task('css', function() {
  return gulp.src('./styl/**/*.styl')
    .pipe(plugin.stylus())
    .pipe(plugin.concat('all.css'))
    .pipe(plugin.minifyCss())
    .pipe(gulp.dest('./css'));
});
