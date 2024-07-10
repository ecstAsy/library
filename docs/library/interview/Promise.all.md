---
title: 手写 Promise.all
author: ecstAsy
date: "2024-07-10"
---

#### **手写实现 Promise.all**

```js
Promise.myAll = function (params) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  let i = 0;
  const result = [];
  for (const param of params) {
    const index = i;
    i++;
    Promise.resolve(param).then((data) => {
      result[index] = data;
      i--;
      if (i === 0) {
        res(result);
      }
    }, rej);
  }

  if (i === 0) {
    res([]);
  }
  return p;
};

Promise.myAll([1, 2, 3, 4])
  .then((datas) => {
    console.log(datas);
  })
  .catch((err) => {
    console.log(err);
  });
```
