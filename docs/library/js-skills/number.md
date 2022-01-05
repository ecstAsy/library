---
title: Number
author: ecstAsy
date: "2022-01-04"
---

## 取整

> _代替正数的 Math.floor()，代替负数的 Math.ceil()_

```js
const num = ~1.69;

const num1 = ~~1.69;

const num2 = 1.69 | 0;

const num3 = 1.69 >> 0;

console.log(num, num1, num2, num3); // num num1 num2 num3 => -2 1 1 1
```

## 补零

```js
const FillZero = (num, len) => num.toString().padStart(len, "0");

const num = FillZero(169, 5);

console.log(num); // num => "00169"
```

## 转数值

> _只对 null、""、false、数值字符串有效_

```js
const num1 = +null;

const num2 = +"";

const num3 = +false;

const num4 = +"169";

console.log(num1, num2, num3, num4); // num1 num2 num3 num4 => 0 0 0 169
```

## 时间戳

```js
const timestamp = +new Date("2019-02-14");

console.log(timestamp); // timestamp => 1583462816147
```

## 精确小数

```js
const RoundNum = (num, decimal) =>
  Math.round(num * 10 ** decimal) / 10 ** decimal;

const num = RoundNum(1.69, 1);

console.log(num); //  num => 1.7
```

## 判断奇偶

```js
const OddEven = (num) => (!!(num & 1) ? "odd(奇数)" : "even(偶数)");

const num = OddEven(2);

console.log(num); // even(偶数)
```

## 取最小最大值

```js
const arr = [0, 1, 2];

const min = Math.min(...arr);

const max = Math.max(...arr);

console.log(min, max); // min max => 0 2
```

## 生成范围随机数

```js
const RandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const num = RandomNum(1, 10);

console.log(num); //  1 || 2 || 3 ....
```
