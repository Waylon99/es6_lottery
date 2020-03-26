import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';// 启动脚本作为服务器
import args from './util/args';

gulp.task('serve',(cb)=>{// 创建 serve 任务
  if(!args.watch) return cb();// 如果不监听，返回 cb

  var server = liveserver.new(['--harmony','server/bin/www']);// 创建服务器
  server.start();// 启动服务器

  gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
    server.notify.apply(server,[file]);// 通知服务器做处理// 监听 server/ 下的 js 和 ejs 文件
  })// 监听 server/ 下的 js 和 ejs 文件

  gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
    server.start.bind(server)()
  });// 监听路由和应用接口变化
})
