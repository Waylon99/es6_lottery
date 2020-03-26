import yargs from 'yargs';//处理命令行参数，识别命令行

const args = yargs// 命令行参数处理

  .option('production',{// 区分开发环境和正式环境
    boolean:true,
    default:false,
    describe:'min all scripts'
  })

  .option('watch',{// 监听开发环境中的文件
    boolean:true,
    default:false,
    describe:'watch all files'
  })

  .option('verbose',{// 详细输出命令行日志
    boolean:true,
    default:false,
    describe:'log'
  })

  .option('sourcemaps',{// 资源映射，强制生成 sourcemaps
    describe:'force the creation of sroucemaps'
  })

  .option('port',{// 服务器端口
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv// 命令行以字符串进行解析

export default args;