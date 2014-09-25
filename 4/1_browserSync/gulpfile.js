var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: "./src",
      index: "./app.html"
    }
  });
});

gulp.task('watch', ['server'], function() {
  // ./src以下のHTMLファイルが変更されたときに browserSync.reload が実行される
  gulp.watch(['./src/**/*.html'], browserSync.reload);
  
  // task1とtask2が終了したあとにコールバックに指定した関数が実行される
  gulp.watch(['./src/**/*.html'], ['task1', 'task2',function() {
      console.log('callback');
      browserSync.reload();
    }]
  );
});

// gulp.srcで作成したストリームを返す
gulp.task('task1', function() {
  console.log('task1');
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

// タスクの終了時にコールバック関数 cb を実行する
gulp.task('task2', function(cb) {
  setTimeout(function() {
    console.log('task2');
    cb();
  }, 1000);
})
