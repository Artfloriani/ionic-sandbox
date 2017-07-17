var gulp = require('gulp');
var gulpTsLint = require("gulp-tslint");
var tslint = require("tslint");

gulp.task('default', ['tslint']);


gulp.task("tslint", function() {
    var program = tslint.Linter.createProgram("./tsconfig.json");

   gulp.src('src/**/*.ts')
       .pipe(gulpTsLint({ program }))
       .pipe(gulpTsLint.report())
    }
);