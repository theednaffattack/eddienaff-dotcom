var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('postcss-uncss');
var connect = require('gulp-connect');
// var browserSync = require('browser-sync');
// var reload = browserSync.reload;

var htmlSources = ['./public/*.html'];
var cssSources = ['./public/css/*.css'];
var jsSources = ['./public/js/*.js'];

gulp.task('log', function() {
	//do stuff
	gutil.log('== My Log Task ==')
});

gulp.task('js', function() {
	//do tasks
	gulp.src(jsSources)
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest('./public/dist/js'))
});

gulp.task('css', function() {
	gulp.src(cssSources)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCSS({debug: true}, function(details) {
			console.log(details.name + ': ' + details.stats.originalSize);
			console.log(details.name + ': ' + details.stats.minifiedSize);
		}))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('./public/dist/css'))
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch(cssSources, ['css']);
	gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
	connect.server({
		root: './public/',
		livereload: true
	})
});

gulp.task('html', function() {
	gulp.src(htmlSources)
	.pipe(connect.reload())
});

gulp.task('serve-dev', ['html', 'js', 'css', 'connect', 'watch']);