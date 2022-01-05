---
title: 元素添加滚动监听
author: ecstAsy
date: "2022-01-04"
---

> 添加滚动事件一般是为了实现下拉加载

```html
<ul ref="list">
  <li v-for="item in data" :key="item">
    <div></div>
  </li>
</ul>
```

```js
mounted(){
  this.$refs.list.addEventListener("scroll", this.scrollBottom)
}

scrollBottom(){
  const scrollTop = this.$refs.list.scrollTop
  console.log(scrollTop)
}
```
