//编写任务，管理当前的项目。
const gulp = require("gulp");

//拷贝html
const htmlmin = require("gulp-htmlmin");
//gulp-htmlmin 压缩html代码
/*
    1、https://gulpjs.com/plugins/ 查找插件
    2、下载插件
    3、抄文档
*/
gulp.task("copy-html", () => {
    return gulp.src("*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

//拷贝图片
gulp.task("images", () => {
    return gulp.src("*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

//拷贝数据
gulp.task("data", () => {
    return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"));
})

//js代码
gulp.task("scripts", () => {
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

//处理scss代码  gulp-sass gulp-minify-css gulp-rename
const scss = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("scss1", () => {
    return gulp.src("stylesheet/index.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scss2", () => {
    return gulp.src("stylesheet/css.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("css.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})


//编写一个可以执行上述所有文件的任务
gulp.task("build", ["copy-html", "images", "scripts", "data", "scss1", "scss2"], () => {
    console.log("项目建立成功");
})

//启动监听
gulp.task("watch", () => {
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("*.{jpg,png}", ["images"]);
    gulp.watch(["*.json", "!package.json"], ['data']);
    gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
    gulp.watch("stylesheet/index.scss", ['scss1']);
    gulp.watch("stylesheet/css.scss", ['scss2']);
})

//启动一个临时服务器  不支持运行php
const connect = require("gulp-connect");
gulp.task("server", () => {
    connect.server({
        root: "dist",
        port: 8888,
        livereload: true
    })
})


//同时启动服务和监听
gulp.task("default", ["watch", 'server']);