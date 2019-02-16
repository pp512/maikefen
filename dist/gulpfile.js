var gulp=require('gulp');//引入gulp工具
var html=require('gulp-minify-html');//html压缩插件
var mcss = require('gulp-minify-css');//css压缩插件
var uglify = require('gulp-uglify');//js压缩插件
var concat = require('gulp-concat');//js合并插件
//1.html文件的复制
gulp.task('copyhtml',function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist/src'))
});


