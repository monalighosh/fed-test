"use strict";
// Variables
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");

// File paths
const htmlFiles = "src/**/*.html";
const sassFiles = "src/sass/**/*.scss";
const imageFiles = "src/images/**/*.**";
const jsFiles = "src/js/**/*.js";

// HTML Tasks
gulp.task("html", function() {
  return gulp
    .src(htmlFiles)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

// CSS Tasks
gulp.task("css", function() {
  return gulp
    .src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css"));
});

// Images Tasks
gulp.task("images", function() {
  return gulp
    .src(imageFiles)
    .pipe(imagemin())
    .pipe(gulp.dest("build/images"));
});

// JS Tasks
gulp.task("js", function() {
  return gulp
    .src(jsFiles)
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ["env"] }))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/js"));
});

// Watch Task
gulp.task("watch", function() {
  gulp.watch(htmlFiles, ["html"]);
  gulp.watch(sassFiles, ["css"]);
  gulp.watch(imageFiles, ["images"]);
  gulp.watch(jsFiles, ["js"]);
});

// Default Task
gulp.task("default", ["html", "css", "images", "js", "watch"]);
