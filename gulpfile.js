var gulp = require('gulp');
var webpack = require('webpack-stream');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');

gulp.task('default', ['build:dev']);

gulp.task('static:dev', function() {
	gulp.src(['app/**/*.html'])
	.pipe(gulp.dest('build/'));
});

gulp.task('webpack:dev', function() {
	gulp.src('app/js/entry.js')
	.pipe(webpack({
		output: {
			filename: 'bundle.js'
		}
	}))
	.pipe(gulp.dest('build/'));
});

gulp.task('sass:dev', function() {
	gulp.src('./app/sass/**/*.scss')
	.pipe(maps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCss())
	.pipe(maps.write('./'))
	.pipe(gulp.dest('build/'));
});

gulp.task('build:dev', ['webpack:dev', 'static:dev', 'sass:dev']);

