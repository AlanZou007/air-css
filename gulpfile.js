const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');
const fs = require('fs-extra');

gulp.task('compile', () => {
    fs.emptyDirSync('./lib');
    return gulp
        .src('./src/*.css')
        .pipe(postcss())
        .pipe(cssmin())
        .pipe(gulp.dest('./lib'))
})

gulp.task('lib', ['compile'], () => {
    fs.copySync('./lib', './es/air-css')
})

gulp.task('build', ['lib'])