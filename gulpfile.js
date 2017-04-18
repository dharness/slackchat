const gulp = require('gulp');
var concat = require('gulp-concat'); 

gulp.task('scripts', () => {
  return gulp.src(['./public/js/lib/*.js', './public/js/dashboard/*.js'])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('./public/js'))
});

gulp.task('default', ['scripts'], () => {
  gulp.watch('./public/js/**/*.js', ['scripts'])
});