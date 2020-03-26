import gulp from 'gulp';
import gulpif from 'gulp-if';// gulp if 判断
import concat from 'gulp-concat';// gulp 文件拼接
import webpack from 'webpack';// 打包
import gulpWebpack from 'webpack-stream'; // gulp 基于 stream
import named from 'vinyl-named';// 文件重命名标志
import livereload from 'gulp-livereload';// 热更新
import plumber from 'gulp-plumber';// 处理文件信息流
import rename from 'gulp-rename';// 文件重命名
import uglify from 'gulp-uglify'; // js,css 压缩
import {log,colors} from 'gulp-util';// 命令行输出，log 和 color 的输出
import args from './util/args'; // 命令行参数解析

gulp.task('scripts',()=>{ // 创建脚本命令
  return gulp.src(['app/js/index.js']) // 打开文件
    .pipe(plumber({
      errorHandle:function(){// 处理错误，结合 webpack

      }
    }))
    .pipe(named())// 文件重命名
    .pipe(gulpWebpack({ // 编译，结合 webpack
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{// 处理错误
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
    .pipe(gulp.dest('server/public/js')) // 输出路径
    .pipe(rename({// 重命名
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))// 输出路径
    .pipe(gulpif(args.watch,livereload())) // 监听文件变化
})
