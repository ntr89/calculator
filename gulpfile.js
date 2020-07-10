const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");
const cache = require("gulp-cache");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const notifier = require("gulp-notifier");

filesPath = {
  sass: "source/sass/**/*.scss",
  js: "source/js/**/*.js",
  html: "source/**/*.html",
  images: "./source/images/**/*.+(png|jpg|gif|svg)",
};

// SASS

gulp.task("sass", function (done) {
  return gulp
    .src(filesPath.sass)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(
      rename(function (path) {
        if (!path.extname.endsWith(".map")) {
          path.basename += ".min";
        }
      })
    )
    .pipe(gulp.dest("build/css"));
  done();
});

// JS
gulp.task("javascript", function (done) {
  return (
    gulp
      // .src("./source/js/**/*.js")
      .src(filesPath.js)
      .pipe(plumber({ errorHandler: notifier.error }))
      .pipe(
        babel({
          presets: ["@babel/env"],
        })
      )
      .pipe(concat("scripts.js"))
      .pipe(uglify())
      .pipe(
        rename({
          suffix: ".min",
        })
      )
      .pipe(gulp.dest("build/js"))
  );
  done();
});

// HTML

gulp.task("html", function (done) {
  return gulp
    .src(filesPath.html)
    .pipe(plumber({ errorHandler: notifier.error }))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest("build"));
  done();
});

// IMAGES

gulp.task("imagemin", function (done) {
  return gulp
    .src(filesPath.images)
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("build/images"));
  done();
});

// WATCH with browserSync
gulp.task("watch", function () {
  browserSync.init({
    server: "./build",
    projectURL: "calculator.potapov.io",
  });
  gulp
    .watch(
      [filesPath.sass, filesPath.html, filesPath.js],
      gulp.parallel(["sass", "javascript", "imagemin", "html"])
    )
    .on("change", browserSync.reload);
});

// Clear Cache
gulp.task("clear-cache", function (done) {
  return cache.clearAll(done);
});

// Serve
gulp.task("serve", gulp.parallel(["sass", "javascript", "imagemin", "html"]));

// DEFAULT
gulp.task("default", gulp.series(["serve", "watch"]));
