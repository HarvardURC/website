var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var webpack = require('webpack-stream');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var del = require('del');
var webpackConfig = require('./webpack.config.js');

var paths = {
  scripts: 'src/app.js',
  images: 'src/img/**',
  css: 'src/css/*.css',
  html: 'src/views/**'
};

gulp.task('clean', function() {
  return del(['dist/*', '!dist/libs', '!dist/img']);
});

gulp.task('clean-images', function() {
  return del(['dist/img']);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', ['clean'], function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest('dist/views'));
});

gulp.task('css', ['clean'], function(){
  return gulp.src(paths.css)
    .pipe(gulp.dest('dist/css/'))
    .pipe(minifyCss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('images', ['clean-images'], function() {
  return gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.html, ['html']);
});

gulp.task('build', ['scripts', 'css', 'html']);

gulp.task('build-images', ['build', 'images']);

gulp.task('default', ['watch', 'build-images']);
