---
title: Boolean
author: ecstAsy
date: "2022-01-04"
---

## 短路运算符

```js
// 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
const a = d && 1;

// 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
const b = d || 1;

// 取假赋值：单个表达式转换为true则返回false，否则返回true
const c = !d;
```

## 判断数据类型

> _可判断类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap_

```js
function DataType(tgt, type) {
  const dataType = Object.prototype.toString
    .call(tgt)
    .replace(/\[object (\w+)\]/, "$1")
    .toLowerCase();

  return type ? dataType === type : dataType;
}
DataType("young"); // "string"

DataType(20190214); // "number"

DataType(true); // "boolean"

DataType([], "array"); // true

DataType({}, "array"); // false
```

## 是否为空数组

```js
const arr = [];

const flag = Array.isArray(arr) && !arr.length;

console.log(flag); // flag => true
```

## 是否为空对象

```js
const obj = {};

const flag = DataType(obj, "object") && !Object.keys(obj).length;

console.log(flag); // flag => true
```

## 满足条件时执行

```js
// 条件A
const flagA = true;

// 条件B
const flagB = false;

// 满足A或B时执行
(flagA || flagB) && Func();

// 满足A或不满足B时执行
(flagA || !flagB) && Func();

// 同时满足A和B时执行
flagA && flagB && Func();

// 满足A且不满足B时执行
flagA && !flagB && Func();
```

## 为非假值时执行

```js
// undefined、null、""、0、false、NaN
const flag = false;

!flag && Func();
```

## 数组不为空时执行

```js
const arr = [0, 1, 2];

arr.length && Func();
```

## 对象不为空时执行

```js
const obj = { a: 0, b: 1, c: 2 };

Object.keys(obj).length && Func();
```

## 函数退出代替条件分支退出

```js
if (flag) {
  Func();

  return false;
}
// 换成
if (flag) {
  return Func();
}
```

## switch/case 使用区间

```js
const age = 26;

switch (true) {
  case isNaN(age):
    console.log("not a number");

    break;

  case age < 18:
    console.log("under age");

    break;

  case age >= 18:
    console.log("adult");

    break;

  default:
    console.log("please set your age");

    break;
}
```
