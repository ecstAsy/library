---
title: Object
author: ecstAsy
date: "2022-01-04"
---

## 克隆对象

```js
const _obj = { a: 0, b: 1, c: 2 };

// 以下方法任选一种
const obj = { ..._obj };

const obj = JSON.parse(JSON.stringify(_obj));

console.log(obj); // obj => { a: 0, b: 1, c: 2 }
```

## 合并对象

```js
const obj1 = { a: 0, b: 1, c: 2 };

const obj2 = { c: 3, d: 4, e: 5 };

const obj = { ...obj1, ...obj2 };

console.log(obj); // obj => { a: 0, b: 1, c: 3, d: 4, e: 5 }
```

## 对象字面量

> _获取环境变量时必用此方法，用它一直爽，一直用它一直爽_

```js
const env = "prod";

const link = {
  dev: "Development Address",
  test: "Testing Address",
  prod: "Production Address",
}[env];

console.log(link); // link => "Production Address"
```

## 对象变量属性

```js
const flag = false;

const obj = {
  a: 0,
  b: 1,
  [flag ? "c" : "d"]: 2,
};

console.log(obj); // obj => { a: 0, b: 1, d: 2 }
```

## 创建纯空对象

```js
const obj = Object.create(null);

Object.prototype.a = 0;

console.log(obj); // obj => {}
```

## 删除对象无用属性

```js
const obj = { a: 0, b: 1, c: 2 };

// 只想拿b和c
const { a, ...rest } = obj;

console.log(rest); // rest => { b: 1, c: 2 }
```

## 解构对象属性嵌套

```js
const obj = { a: 0, b: 1, c: { d: 2, e: 3 } };

const {
  c: { d, e },
} = obj;

console.log(d, e); // d e => 2 3
```

## 解构对象属性别名

```js
const obj = { a: 0, b: 1, c: 2 };

const { a, b: d, c: e } = obj;

console.log(a, d, e); // a d e => 0 1 2
```

## 解构对象属性默认值

```js
const obj = { a: 0, b: 1, c: 2 };

const { a, b = 2, d = 3 } = obj;

console.log(a, b, d); // a b d => 0 1 3
```
