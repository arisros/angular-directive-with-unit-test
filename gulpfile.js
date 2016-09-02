(function () {
	'use strict';
	
	var gulp = require('gulp');
	var uglify = require('gulp-uglify');
	var concat = require('gulp-concat');
	var merge = require('merge-stream');
	var browserSync = require('browser-sync');
	var sass = require('gulp-sass');

	var reload = browserSync.reload;

	gulp.task('depJs', function () {
		var depAng = gulp.src('node_modules/angular/angular.js');
		var DepAngMaterial = gulp.src('node_modules/angular-material/angular-material.js');
		var DepAngAria = gulp.src('node_modules/angular-aria/angular-aria.js');
		var DepAngMocks = gulp.src('node_modules/angular-mocks/angular-mocks.js');
		var DepAngAnimate = gulp.src('node_modules/angular-animate/angular-animate.js');
		var DepAngUiRouter = gulp.src('node_modules/angular-ui-router/release/angular-ui-router.min.js');

		var jsDepMerge = merge(
												depAng, 
												DepAngMaterial, 
												DepAngAria, 
												DepAngMocks, 
												DepAngAnimate,
												DepAngUiRouter)
			// .pipe(uglify())
			.pipe(concat('dep.js'))
			.pipe(gulp.dest('lib/'));
		return jsDepMerge;
	});

	gulp.task('depCss', function () {
		var ngMatCss = gulp.src('node_modules/angular-material/angular-material.css');

		var mergeStreamDepcss = merge(ngMatCss)
			.pipe(concat('dep.css'))
			.pipe(gulp.dest('lib/css'));
		return mergeStreamDepcss;
	});

	gulp.task('js', function () {
		gulp.src('js/*.js')
			.pipe(uglify())
			.pipe(concat('app.js'))
			.pipe(gulp.dest('lib'));
	});

	gulp.task('sass', function(){
	   return gulp.src('sass/*.scss')
	      .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
	      .pipe(concat('app.css'))
	      .pipe(gulp.dest('lib/css'));
	});

	gulp.task('sass-watch', ['sass'], reload);
	gulp.task('js-watch', ['js'], reload);

	gulp.task('production',  ['depCss', 'depJs', 'sass', 'js'], function () {
		browserSync({server: {
				baseDir: "./"
			}
		});

		gulp.watch('js/*.js', ['js-watch']);
		gulp.watch('sass/*.scss', ['sass-watch']);
		gulp.watch('index.html').on('change', browserSync.reload);
	});





})();