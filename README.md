# 前端

webpack+babel 开发工具

react+react-router 开发框架

redux+react-redux 框架数据流管理

eslint 代码检查工具

git 代码管理工具

editorconfig 跨编辑器配置工具

```js
目录结构:
FRONT >>> dist 生产代码
      >>> node_modules node包
      >>> src 源代码目录 所有的代码都在这里面
          >>> components 组件,负责渲染
          >>> containers 容器,负责组件间通讯
          >>> stylesheets 项目的css及类似的文件(less, sass)
          >>> view html模板文件
          index.js 项目入口文件
      .babelrc babel配置文件
      .editorconfig editorconfig配置文件
      .eslintrc.js eslint配置文件
      .gitbranch git分支注释工具配置文件
      .gitignore 让git忽略跟踪的文件列表
      config.js 项目的配置文件
      package.js npm包管理文件
      README.md 项目的介绍文件
      server.js 项目本地开发的服务器启动文件
      webpack.common.js 生产和开发公用的webpack配置
      webpack.dev.js 开发环境的webpack配置
      webpack.prod.js 生产环境的webpack配置
```
