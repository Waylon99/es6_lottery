/*
* @Author: Waylon
* @Date:   2019-03-30 20:48:34
* @Last Modified by:   Waylon
* @Last Modified time: 2019-04-01 19:40:58
*/
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';// gulp 常用工具集合
import args from './util/args';

gulp.task('browser',(cb)=>{// 创建任务
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js',['scripts']); // app/中 js发生变化，执行 script 脚本
  gulp.watch('app/**/*.ejs',['pages']);//app中的ejs文件发生变化，执行pages脚本
  gulp.watch('app/**/*.css',['css']);//app中的css文件发生变化，执行css脚本
});
