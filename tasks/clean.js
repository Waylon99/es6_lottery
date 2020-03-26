/*
* @Author: Waylon
* @Date:   2019-03-30 20:55:22
* @Last Modified by:   Waylon
* @Last Modified time: 2019-04-01 19:41:10
*/
import gulp from 'gulp';
import del from 'del';// 做删除处理
import args from './util/args';

gulp.task('clean',()=>{// 创建任务
  return del(['server/public','server/views']) // 清空两个目录
})
