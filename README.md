# es6_lottery
## es6彩票项目

##目录创建

- app —— 前端

  - css
  - ​	js
    - class —— 存放教程的代码
      - test.js
    - lottery —— 存放项目实战的代码
    - index.js —— 入口文件
  - views
    - error.ejs
    - index.ejs （express框架使用的模板引擎就是ejs）

- server ——服务器

  - bin
    - www
  - public
    - js
      - index.js
  - routes
    - index.js
    - users.js
  - views
    - error.ejs
    - index.ejs
  - app.js
  - package.json

- tasks ——构建工具

  - util —— 常见脚本
    - args.js
  - browser.js
  - build.js
  - clean.js
  - css.js
  - page.js
  - script.js
  - server.js

- package.json （npm init -y）

- gulpfile.babel.js （夹杂 babel 是因为要使用 es6 语法）

- .babelrc （ES6语法转译器）

  