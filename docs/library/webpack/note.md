---
title: Webpack学习笔记
author: ecstAsy
date: "2022-01-04"
---

### npm install

**_npm install --save:_** 生成环境的依赖包
**_npm install --save-dev:_** 开发环境依赖包

当在 windows 中通过调用路径去调用 webpack 时，必须使用反斜线();

webpack 中的名词解析：

我们可以通过配置方式指定 loader
**_规则(loader rules)_**、
**_插件(plugins)_**、
**_解析选项(resolve options)_** ，
以及许多其他增强功能。

### **loader**

- style-loader
- css-loader
- file-loader
- ts-loader
- js-loader

### **eslint**

- eslint 不认识 window、navigator 全局变量

  **解决**：需要修改 `package.json` 中的 `eslintConfig` 配置

  ```json
  "env": {
    "browser": true // 支持浏览器全局变量
  }
  ```

### **source-map**

**_source-map_** : 一种提供 **源代码到构建后代码映射** 技术（如果构建后代码出错了，通过映射可以追踪源代码错误位置）

:::tip

**有效值**

[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map

:::

- **source-map**
  - 外部
  - 错误代码准确信息
  - 源代码的错误位置
- **inline-source-map**
  - 内联
  - 只生成一个内联 source-map
  - 错误代码准确信息
  - 源代码的错误位置
- **hidden-source-map**
  - 外部
  - 错误代码错误原因，但是没有错误位置
  - 不能追踪源代码错误，只能提示到构建后代码的错误位置
- **eval-source-map**
  - 内联
  - 每一个文件都生成对应的 source-map，都在 eval
  - 错误代码准确信息
  - 源代码的错误位置
- **nosources-source-map**
  - 外部
  - 错误代码错误原因，但是没有任何源代码信息
- **cheap-source-map**
  - 外部
  - 错误代码错误信息
  - 源代码的错误位置（只能精确到行）
- **cheap-module-source-map**
  - 外部
  - 错误代码错误信息
  - 源代码的错误位置
  - module 会将 loader 的 source-map 加入

**内联和外部的区别**：

- 外部生成了文件、内联没有
- 内联构建速度更快

**如何选择**

开发环境 **速度快、调试更加友好**

- 速度快 （**_eval > inline > cheap > ..._**）
  - **eval-cheap-source-map**
  - **eval-source-map**
- 调试更加友好
  - **source-map**
  - **cheap-module-source-map**
  - **cheap-source-map**

---

**_总结_** : **_eval-source-map_** / **_eval-cheap-module-source-map_**

生产环境 **源代码要不要隐藏、调试要不要更友好**

> 内联会让代码体积变大，所以在生产环境不用内联

- **nosources-source-map** 全部隐藏
- **hidden-source-map** 只隐藏构建后的代码，会提示构建后代码错误信息

**_总结_** : **_source-map_** / **_cheap-module-source-map_**

### 缓存

- **babel 缓存**
  ```json
  { "cacheDirectory": true }
  ```
  让第二次打包构建速度更快
- 文件资源缓存

  - **hash**: 每次 webpack 构建时会生成一个唯一的 hash 值

    **问题 🤔️**：因为 js 和 css 同时使用一个 hash 值，如果重新打包，会导致所有缓存失效。（可能我们只修改一个文件）

  - **chunkhash** : 根据 chunk 生成的 hash 值，如果打包来源同一个 chunk， 那么 hash 值就一样

    **问题 🤔️**：js 和 css 的 hash 值还是一样的？

    **因为 css 是在 js 中被引入的，所以同属一个 chunk,所以 js 和 css 的 hash 值是一样的**

  - **contenthash** : 根据文件的内容生成 hash 值，不同文件 hash 值一定不一样

  让代码上线运行缓存更好使用

### **tree shaking**

- 目的：**去除无用代码**
- 前提
  - 必须使用 ES6 模块化
  - 开启 production 环境
- 作用： **减少代码体积**

在 `package.json` 中配置

`"sideEffects": false` ：则所有代码都没有副作用（都可以进行 tree shaking）

问题：可能会把 css / @babel/polyfill (副作用)文件干掉

`"sideEffects": ["*.css", "*.less"]`

### **code split** 代码分割

- 单入口改成多入口
- **optimization**

  - **可以将 node_modules 中的代码单独打包成一个 chunk 最终输出**
  - 自动分析多入口 chunk 中有没有公共的文件（10k +），如果有会打包成单独的一个 chunk

  ```json
  optimization: {
    splitChunks: {
      chunks: "all";
    }
  }
  ```

- 通过 js 代码，让某个文件被单独打包成一个 chunk

  import 动态导入语法：能将某个文件单独打包

```js
import(/* webpackChunkName:"test" */ "./test")
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.log("文件加载失败～");
  });
```

### **lazy loading 懒加载**

就是将代码引入放到一个异步的函数中，当函数被调用的时候才会加载对应的文件

```js
document.getElementById("btn").onclick = function () {
  // 懒加载～
  // prefetch 预加载
  import(/*webpackChunkName/:'test', webpackPrefetch:true*/ "./test").then(
    ({ add }) => {
      console.log(add(2, 4));
    }
  );
};
```

- 懒加载 : 当文件需要使用时才会加载
- 预加载 （`prefetch`） **慎用 暂时只适合在 pc 端运行，移动端有很多兼容性问题**
  - 会在使用之前，提前加载 js 文件
  - 等待其他资源加载完毕，浏览器空闲了，再偷偷加载资源
- 正常加载
  - 可以认为是并行加载（同一时间加载多个文件）
  - 文件越多，加载时间越久

### **PWA**

渐进式网络开发应用程序（离线可访问）

- workbox: **workbox-webpack-plugon**

```js
const WorkboxWebpackPlugin = require("workbox-webpack-plugon");
module.export = {
  ...
  plugins:[
    ...
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
}
```

**clientsClaim** 和 **skipWaiting** 作用：

- 帮助 `serviceworker` 快速启动
- 删除旧的 `serviceworker`
  - 生成一个 `serviceworker` 配置文件
  - 入口注册 `serviceWorker`
  ```js
  // 处理兼容性问题
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceworker
        .register("./service-worker")
        .then(() => {
          console.log("sw注册成功～");
        })
        .catch(() => {
          console.log("sw注册失败～");
        });
    });
  }
  ```
- sw 代码必须运行在服务器上
  - node.js
  - - npm i serve -g
    - serve -s build 启动服务器，将 build 目录下的所有资源作为静态资源暴露出去

### **多进程打包**

- **thread-loader** 开启多进程打包
  - 进程启动大概为 600ms，进程通信也有开销
  - 只有工作消耗时间比较长，才需要多进程打包
  ```json
  {
    "loader": "thread-loader",
    "options": {
      "workers": 2 // 进程两个
    }
  }
  ```

### **externals**

```json
{
  "externals": {
    // 忽略库名 --- npm 包名
    // 拒绝Jquery被打包进去
    "jquery": "Jquery"
  }
}
```

### **dll**

使用 `dll` 技术，对某些库（第三方库：jquery、react、vue...）进行单独打包

**webpack.dll.js**

```js
const { resolve } = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    // 最终打包生成的【name】 =》 jquery
    // ['jquery'] --> 要打包的库是jquery
    jquery: ["Jquery"],
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dll"),
    library: "[name]_[hash]",
  },
  plugins: [
    // 打包生成一个 manifest.json ---> 提供和jquery 映射
    new webpack.DllPlugin({
      name: "[name_[hash]", // 映射库的暴露的内容名称
      path: reslve(__dirname, "dll/manifest.json"), // 输出文件路径
    }),
  ],
  mode: "production",
};
```

当运行 `webpack` 时，默认查找的是 `webpack.config.js`

需求：需要运行的是 `webpack.dll.js`

> webpack --config webpack.dll.js

**webpack.config.js**

```js
const webpack = require("webpack");

module.exports = {
  plugins: [
    // 告诉 webpack 哪些库不参与打包，同时使用时的名称也要变更～
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, "dll/manifest.json"),
    }),
  ],
};
```
