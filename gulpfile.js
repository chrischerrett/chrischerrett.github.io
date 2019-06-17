var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Task for building when something changed:
gulp.task('build', shell.task(['jekyll serve --watch --host 0.0.0.0']));

// Task for serving with Browsersync
gulp.task('serve', ['scripts'], function () {
    browserSync.init({
        server: {baseDir: '_site/'},
        notify: false
    });

    gulp.watch('assets/scripts/src/**/*.js', ['scripts']);
    gulp.watch('assets/styles/**/*.scss', ['styles']);

    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

var jsDest = 'assets/scripts/dist';
var cssDest = 'assets/styles/dist';

gulp.task('scripts', function() {
    return gulp.src(['assets/scripts/src/vendor/*.js', 'assets/scripts/src/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(jsDest))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

gulp.task('styles', function() {
    return gulp.src('assets/styles/src/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest(cssDest))
    .pipe(rename('styles.min.css'))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
});

gulp.task('default', ['build', 'serve']);
