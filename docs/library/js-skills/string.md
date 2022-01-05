---
title: String
author: ecstAsy
date: "2022-01-04"
---

## 时间对比

> _个位必须补零_

```js
const time1 = "2019-02-14 21:00:00";

const time2 = "2019-05-01 09:00:00";

const overtime = time1 > time2;

console.log(overtime); // overtime => false
```

## 格式化金钱

```js
const ThousandNum = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const money = ThousandNum(20190214);

console.log(money); // money => "20,190,214"
```

## 生成随机 ID

```js
const RandomId = (len) => Math.random().toString(36).substr(3, len);

const id = RandomId(10);

console.log(id); // id => "jg7zpgiqva"
```

## 生成随机 HEX 色值

```js
const RandomColor = () =>
  "#" +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0");

const color = RandomColor();

console.log(color); // color => "#f03665"
```

## 生成星级评分

```js
const StarScore = (rate) => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);

const star = StarScore(3);

console.log(start); // start => "★★★"
```

## 操作 URL 查询参数

```js
// location.search = "?name=young&sex=male"
const params = new URLSearchParams(location.search.replace(/\?/gi, ""));

params.has("young"); // true

params.get("sex"); // "male"
```
