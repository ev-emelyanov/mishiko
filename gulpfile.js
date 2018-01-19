"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csslint = require('gulp-csslint'); // https://www.npmjs.com/package/gulp-csslint
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var run = require("run-sequence");
var del = require("del");

gulp.task("style", function() {
    gulp.src("less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("serve", ["style"], function() {
    server.init({
        server: "build/",
        notify: false,
        open: false,
        cors: true,
        ui: false
    });

    gulp.watch("less/**/*.less", ["style"]);
    gulp.watch("*.html", ["html"]);
});

gulp.task('css', function() {
    gulp.src('client/css/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter());
});

gulp.task('sprite', function () {
    return gulp
        .src("img/svg/**/*.svg")
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("build/img"));
});

gulp.task('html', function () {
    return gulp
        .src("*.html")
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest("build"));
});

gulp.task('build', function (done) {
    run(
        "clean",
        "copy",
        "style",
        "sprite",
        "html",
        done
    );
});

gulp.task('copy', function () {
    return gulp
        .src([
            "fonts/**/*.{woff,woff2}",
            "img/**",
            "js/**"
        ], {
            base: "."
        })
        .pipe(gulp.dest("build"));
});

gulp.task('clean', function () {
    return del("build");
});