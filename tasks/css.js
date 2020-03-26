import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('css',()=>{//创建css任务
  return gulp.src('app/**/*.css')//打开app下所有得ejs文件
    .pipe(gulp.dest('server/public'))//拷贝

})
