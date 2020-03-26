/*
* @Author: Waylon
* @Date:   2019-03-30 21:02:56
* @Last Modified by:   Waylon
* @Last Modified time: 2019-04-01 19:41:32
*/
import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';// 处理包执行顺序

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));// 清目录->拷css->编译模板->执行脚本->数组browser->serve
