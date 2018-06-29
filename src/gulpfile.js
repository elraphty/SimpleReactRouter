'use strict';

/*var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
//var concat = require('gulp-concat');
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
//var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed')

//Gulp File




gulp.task('compile_scss', function(){
  return gulp.src(SCSS_SRC)
    .pipe(sass().on('error',sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({suffix:'.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST))
});

gulp.task('watch_scss',function(){
    gulp.watch(SCSS_SRC,['compile_scss'])
})

gulp.task('default', [ 'watch_scss' ]);
*/

var SCSS_SRC= 'src/Assets/scss/default.less';
//Output css file

var SCSS_DEST= 'src/Assets/css';

var gulp = require('gulp');
var less = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('css', function(){
    return gulp.src('src/Assets/scss/default.less')
      .pipe(less())
      .pipe(minifyCSS())
      .pipe(gulp.dest('/'))
  });

  gulp.task('watch_scss',function(){
    gulp.watch(SCSS_SRC,['scss'])
})

gulp.task('default', [ 'watch_scss' ]);
