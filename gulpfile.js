var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	plumber = require('gulp-plumber');

gulp.task('styles', function () {
	return gulp.src('./sass/styles.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass.sync())
		.pipe(autoprefixer({
			browsers: ['last 5 version']
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'))
});

gulp.task('watch', function () {
	gulp.watch('./sass/**/*.scss', ['styles']);
});