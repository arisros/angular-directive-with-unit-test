var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

var reload = browserSync.reload;




gulp.task('depJs', function () {
	var angular = gulp.src('node_modules/angular/angular.js');
	var angularMaterial = gulp.src('node_modules/angular-material/angular-material.js');
	var angularAria = gulp.src('node_modules/angular-aria/angular-aria.js');
	var angularMocks = gulp.src('node_modules/angular-mocks/angular-mocks.js');
	var angularAnimate = gulp.src('node_modules/angular-animate/angular-animate.js');

	var mergeStream = merge(angular, angularMaterial, angularAria, angularAnimate, angularMocks)
		// .pipe(uglify())
		.pipe(concat('dep.js'))
		.pipe(gulp.dest('lib/'));
	return mergeStream;
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

// SASS

gulp.task('sass', function(){
   return gulp.src('sass/*.scss')
      .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
      .pipe(concat('app.css'))
      .pipe(gulp.dest('lib/css'));
});

gulp.task('sass-watch', ['sass'], reload);

gulp.task('production',  ['depCss', 'depJs', 'sass', 'js'], function () {
	browserSync({server: {
			baseDir: "./"
		}
	});

	gulp.watch('sass/*.scss', ['sass-watch']);
	gulp.watch('index.html').on('change', browserSync.reload);
});



