---
title: Vue3 项目结构
author: ecstAsy
date: "2022-11-08"
---

#### Vue3 项目结构

![Vue3 项目结构](../../assets/vue-source-structure.png)

#### Vue3 项目结构分析

Vue3 的源码都是放在 `packages` 目录下的，每一个目录都是一个单独的项目，每一个项目都对应着 Vue3 中的一个模块。

```
├── compiler-core            // 与平台无关的编译器核心
├── compiler-dom             // 针对浏览器的编译模块
├── compiler-sfc             // 用于解析 xxx.vue 单文件
├── compiler-ssr             // 针对服务器渲染的编译模块
├── reactivity               // 响应式系统
├── runtime-core             // 与平台无关的运行时核心
├── runtime-dom              // 针对浏览器的运行时，例如包含了很多 DOM 操作以及属性事件操作等等
├── runtime-test             // 用于测试的运行时
├── server-renderer          // 服务器端渲染器
├── sfc-playground           // Vue3 单文件组件 playground
├── size-check               // 用来测试代码体积
├── template-explorer        // 用于调试编译器输出的开发工具
├── vue                      // 完整版本 Vue，包含运行时和编译器
```
