var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var templateMainPath = 'assets/templates/main/';
var distMainPath = 'assets/templates/main/';

gulp.task('sass-main', function() {
  return gulp.src(templateMainPath + 'sass/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(distMainPath + 'css'))
});

gulp.task('js-main', function() {
  return gulp.src([
      templateMainPath + 'js/src/*.js',
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(distMainPath + 'js'));
});

gulp.task('watch-main', ['sass-main', 'js-main'], function() {
  gulp.watch(templateMainPath + 'sass/*.scss', ['sass-main']);
  gulp.watch(templateMainPath + 'js/src/*.js', ['js-main']);
});

gulp.task('default', ['watch-main']);
