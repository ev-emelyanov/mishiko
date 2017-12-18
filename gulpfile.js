"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csslint = require('gulp-csslint'); // https://www.npmjs.com/package/gulp-csslint

gulp.task("style", function() {
    gulp.src("less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("css"))
        .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: ".",
        notify: false,
        open: false,
        cors: true,
        ui: false
    });

    gulp.watch("less/**/*.less", ["style"]);
    gulp.watch("*.html").on("change", server.reload);
});

gulp.task('css', function() {
    gulp.src('client/css/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter());
});