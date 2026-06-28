const gulp = require("gulp");
const cleanCss = require("gulp-clean-css");

function myMinify() {
    return gulp.src("css/*.css")
      .pipe(cleanCss())
      .pipe(gulp.dest("dist"));
}

exports.css = myMinify;