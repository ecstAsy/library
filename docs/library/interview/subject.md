---
title: 前端题目
author: ecstAsy
date: "2022-09-23"
---

- 1.
```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an aduit!');
  } else if(data == { age: 18 }) {
    console.log('You are still an aduit!');
  } else {
    console.log('Hmm.. You don’t have an age!');
  }
}

// Hmm.. You don’t have an age!
```
在比较相等性，原始类型通过他们的值进行比较，而对象通过他们的引用进行比较。JavaScript检查对象是否具有对内存中相同位置的引用。

我们作为参数传递的对象和我们检查相等性的对象在内存中处于不同位置，所以他们的引用是不同的。

- 2.
```js
[ 1, 2, 3, 4 ].reduce((x, y) => console.log(x, y));

// 1 2
// undefined 3
// undefined 4
```