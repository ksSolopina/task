var gulp   = require('gulp'),
	path   = require('path'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename')
;

gulp.task('bundle', function() {
	var filename = path.join(__dirname, './src/client.js');

	gulp.src(filename)
		.pipe(uglify())
		.pipe(rename('common.js'))
		.pipe(gulp.dest('./public/js/'))
	;
});
gulp.task('default', ['bundle'], function(){
	require('./src/server.js');
});
