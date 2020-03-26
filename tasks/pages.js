import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages',()=>{// 创建 pages 任务
  return gulp.src('app/**/*.ejs')// 打开文件，app 下的所有 ejs 文件
    .pipe(gulp.dest('server'))// 拷贝
    .pipe(gulpif(args.watch,livereload()))// 监听 热更新
})
