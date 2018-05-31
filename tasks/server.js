import gulp from 'gulp';
var browserSync = require('browser-sync').create();
import htmlInjector from 'bs-html-injector';

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: ['/']
    },
    open: false,
    injectChanges: true,
    tunnel: false,
    notify: true
  });
});
