---
title: javaScript 零散知识点
author: ecstAsy
date: "2022-01-04"
---

## Js 的数据类型

**_简单数据类型：_** Number、String、Boolean、undefind、null
**_复杂数据类型：_** 数组、函数、对象

## Promise 构造函数是同步执行还是异步执行，then 方法是同步执行还是异步执行？

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});

promise.then(() => {
  console.log(3);
});

console.log(4);

// result => 1、2、4、3
```

注：Promise 构造函数是同步执行，then 方法是异步执行。

## localStorage 和 sessionStorage

localStorage 和 sessionStorage 属性允许在浏览器中存储 key/value 对的数据。

**_localStorage：_** 用于长久保存整个网站的数据，保存的数据没有过期时间，属于永久性存储，直到手动去删除。属性是只读的。

**_sessionStorage：_** 只将数据保存在当前会话中，改数据对象临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

```js
// localStorage 用法
// 存储
localStorage.setItem("userId", 1);
// 取值
const userId = localStorage.getItem("userId");
console.log(userId); // 1
// 移除
localStorage.removeItem("userId");

// sessionStorage 用法
// 存储
sessionStorage.setItem("userId", 1);
// 取值
const userId = sessionStorage.getItem("userId");
console.log(userId); // 1
// 移除
sessionStorage.removeItem("userId");
// 清空所有
sessionStorage.clear();
```

## Input 判断输入框未输入值

**_?? '' !== ''_**: 等价于 **_value !== null && value !== undefined && value !== ''_**

```js
// ES5
if (value !== null && value !== undefined && value !== "") {
  // todo
}
// ES6
if (value ?? "" !== "") {
  // todo
}
```

## src 和 href 的区别

- src 引用的资源成为当前文档的一部分。

- herf 提供一个链接通道，联系着其他资源。

## 标签上 title 和 alt 的区别

- title 为该属性提供信息。

- alt 当图片不显示时，用文字代表。

## JS 基本数据类型

> undefined null string Boolean number Object symbol

## 响应式兼容低版本 IE

```js
<meta
  name="viewport"
  content="width=device-width,"
  initial-scale="1."
  maximum-scale="1, user-scalable=no"
/>
```

## 你有哪些性能优化的方法？

- 减少 http 请求次数：CSS Sprites, JS、CSS 源码压缩、图片大小控制合适；网页 Gzip， CDN 托管，data 缓存 ，图片服务器。

- 前端模板 JS+数据，减少由于 HTML 标签导致的带宽浪费，前端用变量保存 AJAX 请求结果，每次操作本地变量，不用请求，减少请求次数

- 用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能。

- 当需要设置的样式很多时设置 className 而不是直接操作 style。

- 少用全局变量、缓存 DOM 节点查找的结果。减少 IO 读取操作。

- 避免使用 CSS Expression（css 表达式)又称 Dynamic properties(动态属性)。

- 图片预加载，将样式表放在顶部，将脚本放在底部 加上时间戳。

- 避免在页面的主体布局中使用 table，table 要等其中的内容完全下载之后才会显示出来，显示比 div+css 布局慢。

## 常见的浏览器内核有哪些？

- Trident 内核：IE,360，傲游，搜狗，世界之窗，腾讯等。[又称 MSHTML]

- Gecko 内核：Netscape6 及以上版本，FF,MozillaSuite/SeaMonkey 等

- Presto 内核：Opera7 及以上。 [Opera 内核原为：Presto，现为：Blink;]

- Webkit 内核：Safari,Chrome 等。 [ Chrome 的：Blink（WebKit 的分支）]

## link 和@import 有什么区别

- link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。

- link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。所以会出现一开始没有 css 样式，闪烁一下出现样式后的页面(网速慢的情况下)

- link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。

- link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。在 html 设计制作中，css 有四种引入方式。

  - css 有四种引入方式
    - 内联样式
    - 嵌入样式
    - 链接样式
    - 导入样式

## input 属性 disabled 和 readonly 的区别

- disabled 属性在将 input 文本框变成只读不可编辑的同时，还会使文本框变灰，但是 readonly 不会。

- disabled 属性修饰后的文本框内容，在不可编辑的同时，通过 js 也是获取不到的。例如$("input [name='aaa']").val()是不好用的。但是用 readonly 修饰后的文本框内容，是可以通过 js 获取到的，也就只是简单的不可编辑而已！

- disabled 属性对 input 文本框，单选 radio,多选 checkbox 都适用，但是 readonly 就不适用，用它修饰后的单选以及多选按钮仍然是可以编辑状态的。

## Vue-router 跳转和 location.href 有什么区别

- 使用 location.href= /url 来跳转，简单方便，但是刷新了页面；使用 history.pushState( /url ) ，无刷新页面，静态跳转；

- 引进 router ，然后使用 router.push( /url ) 来跳转，使用了 diff 算法，实现了按需加载，减少了 dom 的消耗。其实使用 router 跳转和使用 history.pushState() 没什么差别的，因为 vue-router 就是用了 history.pushState() ，尤其是在 history 模式下。

## 检查用户的设备是否处于暗模式

```js
const isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

console.log(isDarkMode);
// Result: True or False
```
