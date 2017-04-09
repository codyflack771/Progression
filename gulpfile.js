"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del');

gulp.task("concatScripts", function() {
    return gulp.src([
        'javascript/*.js'
        ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('javascript'));
});

gulp.task("minifyScripts", ['concatScripts'], function() {
	return gulp.src("javascript/app.js")
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('javascript'));
});

gulp.task('compileSass', function() {
  return gulp.src("stylesheets/main.scss")
      .pipe(maps.init())
      .pipe(sass())
      .pipe(maps.write('./'))
      .pipe(gulp.dest('stylesheets'));
});

gulp.task('watchSass', function () {
	gulp.watch('stylesheets/partials/**/*.scss', ['compileSass']);
});

gulp.task('clean', function() {
	del(['dist', 'stylesheets/main.css*', 'javascript/app*.js*']);
});

gulp.task('build', ['concatScripts', 'minifyScripts', 'compileSass'], function () {
	return gulp.src(["stylesheets/main.css", "javascript/app.min.js", 'index.html',
	'leaderboard.html', 'images/**'], {base: './'})
		.pipe(gulp.dest('dist'))
});

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});