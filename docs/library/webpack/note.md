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
