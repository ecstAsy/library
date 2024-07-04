---
title: 前端题目
author: ecstAsy
date: "2022-09-23"
---

- 1.

```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an aduit!");
  } else if (data == { age: 18 }) {
    console.log("You are still an aduit!");
  } else {
    console.log("Hmm.. You don’t have an age!");
  }
}

// Hmm.. You don’t have an age!
```

在比较相等性，原始类型通过他们的值进行比较，而对象通过他们的引用进行比较。JavaScript 检查对象是否具有对内存中相同位置的引用。

我们作为参数传递的对象和我们检查相等性的对象在内存中处于不同位置，所以他们的引用是不同的。

- 2.

```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// 1 2
// undefined 3
// undefined 4
```

- **3.js 如何控制一次只加载一张图片，加载完成后再加载下一张**

  > **通过 onload 事件判断 Img 标签加载完成**

  :::tip
  实现逻辑：新建一个 Image 对象实例，为实例对象设置 src 属性等，在 onload 事件中添加此实例对象到父元素中，然后将图片地址数组中的第一个元素剔除，继续调用此方法直到存储图片地址的数组为空。
  :::

```js
const imgArrs = [...];
const content = document.getElementById('content');
const loadImg = () => {
  if (!imgArrs.length)  return;
  const img = new Image(); // 新建一个Image对象
  img.src = imgArrs[0];
  img.setAttribute('class', 'img-item');
  img.onload = () => { // 监听onload事件
    // setTimeout(() => { // 使用setTimeout可以更清晰的看清实现效果
      content.appendChild(img);
        imgArrs.shift();
        loadImg();
    // }, 1000);
  }
  img.onerror = () => {
    // do something here
  }
}
loadImg();
```
