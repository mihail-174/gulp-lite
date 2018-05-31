import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => (
  runSequence(
    [
      'style'
    ],
    'server',
    'watch'
  )
));
