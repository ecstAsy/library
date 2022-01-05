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
