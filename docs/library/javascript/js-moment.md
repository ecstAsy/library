---
title: moment
author: ecstAsy
date: "2022-01-04"
---

#### 今天

```js
moment(new Date());
```

#### 昨天

```js
moment(new Date()).add(-1, "days");
```

#### 本周第一天

```js
moment().startOf("week");
```

##### 本周最后一天

```js
moment().endOf("week");
```

#### 本月第一天

```js
moment().startOf("month");
```

#### 本月最后一天

```js
moment().endOf("month");
```

#### 一步从时间中提取年月日时分秒

```js
function extract(date) {
  const d = new Date(new Date(date).getTime() + 8 * 3600 * 1000);
  return new Date(d)
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);
}
console.log(extract(new Date())); // ['2022', '09', '19', '18', '06', '11', '187']
```
