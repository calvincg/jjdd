var gulp = require('gulp'),
    css = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin');
gulp.task('css',function () {
    return gulp.src('./css/*.css',{base:'./'})
        .pipe(css())
        .pipe(rev())
        .pipe(gulp.dest('./release'))
        .pipe(rev.manifest())
        .pipe(rename('css-json.json'))
        .pipe(gulp.dest('./release/rev'));
})
.task('js',function () {
    return gulp.src('./js/*.js',{base:'./'})
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./release'))
        .pipe(rev.manifest())
        .pipe(rename('js-json.json'))
        .pipe(gulp.dest('./release/rev'));
})
.task('html',['css','js'],function () {
    return gulp.src('./*.html')
        .pipe(htmlmin({collapseWhitespace:true,removeComments:true,minifyJS:true}))
        .pipe(gulp.dest('./release'));
});
