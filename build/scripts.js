(function() {
  'use strict';

  const gulp = require('gulp');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*']
  });

  gulp.task('scripts', function() {
    return gulp
      .src('src/*.js')
      .pipe($.sourcemaps.init())
      .pipe($.feizheng.pkgHeader())
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ default size ]:' }))
      .pipe($.ignore('*.js.map'))
      .pipe($.uglify({ output: { comments: saveLicense } }))
      .pipe($.rename({ extname: '.min.js' }))
      .pipe(gulp.dest('dist'))
      .pipe($.size({ title: '[ minimize size ]:' }));
  });
})();
