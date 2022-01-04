---
title: Dom
author: ecstAsy
date: "2021-12-12"
---

###### 显示全部 DOM 边框

> _调试页面元素边界时使用_

```js
[].forEach.call($$("*"), (dom) => {
  dom.style.outline =
    "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
});
```

###### 自适应页面

> _页面基于一张设计图但需做多款机型自适应，元素尺寸使用 rem 进行设置_

```js
function AutoResponse(width = 750) {
  const target = document.documentElement;
  target.clientWidth >= 600
    ? (target.style.fontSize = "80px")
    : (target.style.fontSize = (target.clientWidth / width) * 100 + "px");
}
```

###### 过滤 XSS

```js
function FilterXss(content) {
  let elem = document.createElement("div");
  elem.innerText = content;
  const result = elem.innerHTML;
  elem = null;
  return result;
}
```

###### 存取 LocalStorage

> _反序列化取，序列化存_

```js
const love = JSON.parse(localStorage.getItem("love"));

localStorage.setItem("love", JSON.stringify("I Love You"));
```
