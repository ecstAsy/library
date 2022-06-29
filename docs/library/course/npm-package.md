---
title: 前端发布 NPM 包
author: ecstAsy
date: "2022-06-15"
---

#### 初始化项目  

- 新建文件夹

> pnpm init -y

```json
{
  "name": "ecstasy-tools",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
- 添加 ***webpack webpack-cli***
> pnpm add webpack webpack-cli -D
```js
devDependencies:
+ webpack 5.73.0
+ webpack-cli 4.10.0
```
- 使用 ***webpack-cli*** 初始化配置
> pnpm webpack-cli init

```js
? Which of the following JS solutions do you want to use? Typescript
? Do you want to use webpack-dev-server? Yes
? Do you want to simplify the creation of HTML files for your bundle? Yes
? Do you want to add PWA support? No
? Which of the following CSS solutions do you want to use? none
? Do you like to install prettier to format generated configuration? Yes
? Pick a package manager: pnpm
[webpack-cli] ℹ INFO  Initialising project...
 conflict package.json
? Overwrite package.json? overwrite
    force package.json
   create src\index.ts
   create README.md
   create index.html
   create webpack.config.js
   create tsconfig.json
```

到这一步项目已经初始化好了。

#### 测试例子
- 快速生成一个React/Augular/Vue 空项目(以VUE 为例子)
> pnpm create vite example -- --template vue-ts
> cd example
- 安装依赖
> pnpm i
- 启动项目
> pnpm dev

- 进入本地测试
引入 package 中的 index 进行测试
#### GIT 相关配置
- 新建 **.gitignore** 文件
> touch .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
example/node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```
- 新建 **.npmignore** 文件
> touch .npmignore

```
example

node_modules

.gitignore

index.html
src
webpack.config.js
```

#### 修改部分配置文件

- 修改 **src** 为 **package**
- 修改 **tsconfig.json**
```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/",// 打包到的目录
    "sourceMap": false,// 是否生成sourceMap（用于浏览器调试）
    "noImplicitAny": false,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "declaration": true,// 是否生成声明文件
    "declarationDir": "./dist/types/",// 声明文件打包的位置
    "declarationMap": false,// 是否生成声明文件map文件（便于调试）
    "moduleResolution": "node",
    "module": "esnext",
    "target": "es5",// 转化成的目标语言
    "baseUrl": "./",
    "types": [
      "node"
    ],
    "typeRoots": [
      "./node_modules/@types"
    ],
    "lib": [
      "dom",
      "es2015"
    ],
    "jsx": "react",
    "allowJs": false
  },
  "include": [
    "package/**/*.ts",
    "typings.d.ts",
  ],// 要打包的文件
  "exclude": [
    "node_modules",
    "*.test.ts"
  ]
}

```
- 修改 **package.json** 文件
```json
{
  "name": "ecstasy-tools",
  "version": "0.0.2",
  "description": "ecstasy tool library!",
  "main": "./dist/index.js",
  "types": "./dist/types/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=production --node-env=production",
    "build:dev": "webpack --mode=development",
    "build:prod": "webpack --mode=production --node-env=production",
    "watch": "webpack --watch",
    "serve": "webpack serve"
  },
  "keywords": [],
  "author": "ecstAsy",
  "license": "MIT",
  "devDependencies": {
    "@webpack-cli/generators": "^2.5.0",
    "clean-webpack-plugin": "^4.0.0",
    "html-webpack-plugin": "^5.5.0",
    "prettier": "^2.7.0",
    "ts-loader": "^9.3.0",
    "typescript": "^4.7.3",
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.9.2"
  }
}

```
- 修改 **webpack.config.js** 文件
  - **libraryTarget: 'umd'**
  - **library: 'ecstasy-tools',**

> libraryTarget：assign | var | window | global | this | commonjs | commonjs2 | amd | umd

![libraryTarget](../../assets/libraryTarget.jpg)
```js
// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./package/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'ecstasy-tools',
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};

```

#### 发布
> pnpm build 

> pnpm login
> pnpm version x.x.x
> pnpm publish

