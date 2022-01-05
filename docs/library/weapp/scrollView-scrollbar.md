---
title: 在小程序中隐藏ScrollView的滚动条
author: ecstAsy
date: "2022-01-04"
---

在小程序中，我们会使用到 ScrollView 组件，在 IOS 端不会出现滚动条，但是在 Android
会出现滚动条，滚动条会影响页面的美观。

我们可以采取以下方法来隐藏滚动条：

在 app.wxss 文件里面添加以下代码

```css
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
```

这个 ::-webkit-scrollbar CSS 伪类选择器影响了一个元素的滚动条的样式;
更多介绍请参考 <a href='https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar'>::-webkit-scrollbar 的更多用法</a>
