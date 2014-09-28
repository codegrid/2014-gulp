var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('test', function() {
  console.log('test');
});
 
gulp.task('exec', function(cb) {
  exec('gulp test', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});
