var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './public/'
    },
  })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync'], function() {
  // Reloads the browser whenever HTML or CSS files change
  gulp.watch('./public/css/*.css', browserSync.reload);
  gulp.watch('./public/*.html', browserSync.reload);
  gulp.watch('./public/capstone/*.html', browserSync.reload);
});