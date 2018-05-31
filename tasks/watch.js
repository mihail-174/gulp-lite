import gulp from 'gulp';
import watch from 'gulp-watch';
import runSequence from 'run-sequence';
import htmlInjector from 'bs-html-injector';
var browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  global.isWatching = true;
  watch('scss/**/*.scss', () => {
    runSequence('style');
  });
});
