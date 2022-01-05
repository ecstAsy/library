---
title: 递归取值
author: ecstAsy
date: "2022-01-04"
---

从嵌套数组种取一个指定的值。

```js
const data = [
  {
    id: 42,
    name: "A",
    children: [
      {
        id: 43,
        name: "B",
        children: [
          {
            id: 44,
            name: "C",
            children: [],
            goodsList: [],
          },
          {
            id: 45,
            name: "D",
            children: [],
            goodsList: [],
          },
        ],
        goodsList: [],
      },
    ],
    goodsList: [],
  },
  {
    id: 52,
    name: "E",
    children: [
      {
        id: 53,
        name: "F",
        children: [
          {
            id: 54,
            name: "G",
            children: [],
            goodsList: [],
          },
          {
            id: 55,
            name: "H",
            children: [],
            goodsList: [],
          },
        ],
        goodsList: [],
      },
    ],
    goodsList: [],
  },
];
const getName = function (id, fields) {
  let obj = null;
  const doArry = function (Arry) {
    // Arry.forEach(function (item) {
    //   if (item.id === id) {
    //     obj = item;
    //   } else {
    //     if (item.children.length) {
    //       doArry(item.children)
    //     }
    //   }
    // })
    for (let item of Arry) {
      if (item.id === id) {
        obj = item;
        break;
      } else {
        if (item.children.length) {
          doArry(item.children);
        }
      }
    }
  };
  doArry(fields);
  return obj.name;
};
console.log(getName(43, data));
// B
```
