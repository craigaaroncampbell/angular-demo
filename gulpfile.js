const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('default', ['build:dev']);

gulp.task('static:dev', () => {
  gulp.src(['app/**/*.html', 'app/css/**/*.css'])
  .pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', () => {
  gulp.src('app/js/entry.js')
  .pipe(webpack({
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest('build/'));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev']);

