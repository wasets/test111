const gulp = require("gulp");
const scss = require("gulp-sass");


//编译所有后缀是.sass或者.scss的文件  变成.css代码
gulp.task("scssAll", function(){
    return gulp.src("*.{sass,scss}")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"));
})

//增加一个压缩版本  重命名（一个文件单独写一个任务

const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss1", function(){
    return gulp.src("07.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("07.min.css"))
    .pipe(gulp.dest("dist/css"));

})

//监听
gulp.task("watch", function(){
    gulp.watch("*.{sass,scss}", ["scssAll"]);
})