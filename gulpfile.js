const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssmin = require('gulp-clean-css');
const fs = require('fs-extra');

gulp.task('compile', () => {
    fs.emptyDirSync('./lib');
    return gulp
        .src('./src/*.css')
        .src(postcss())
        .src(cssmin())
        .src(gulp.dest('./lib'))
})

gulp.task('lib', ['compile'], () => {
    fs.copySync('./lib', '../../lib/air-css')
    fs.copySync('./lib', '../../es/air-css')
})

gulp.task('build', ['lib'])