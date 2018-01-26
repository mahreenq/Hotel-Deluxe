
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserSync = require('browser-sync').create();
var sass = require("gulp-sass");
var scss = require("gulp-scss");

// css file conversion

gulp.task( 'default', [  'browser-sync' ] )

gulp.task('css', function() {
	return gulp.src('./src/scss/*.css')
		.pipe(concat('build.css'))
		.pipe(uglifycss())
		.pipe(gulp.dest('./build/css/'));
});

// sass/scss file conversion

gulp.task('scss', function () {
  	return gulp.src('./src/scss/foundation.scss')
    	.pipe(sass().on('error', sass.logError))
		.pipe(concat('build.css'))
		.pipe(uglifycss())
    	.pipe(gulp.dest('./build/css/'));
});

// js file conversion

gulp.task('js', function(cb) {
	pump([
		gulp.src('./src/js/*.js'),
			concat('build.js'),
			uglify(),
			gulp.dest('./build/js/')
		],
		cb);
});

// browser sync, static server

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
 
   	gulp.watch('./src/scss/*.scss', ['scss']);
   	gulp.watch('./src/js/*.js', ['js']);
   	gulp.watch(['./*.html', './build/css/*.css', './build/js/*.js']).on('change', browserSync.reload);
});
