---
title: JS 去除输入框里面空格、英文字符、换行符
author: ecstAsy
date: "2022-01-04"
---

```js
// 去除所有空格和换行符
const _s = str.replace(/\ +/g, "").replace(/[\r\n]/g, "");
// 获取所有英文字符
const _ss = _s.replace(/[^a-zA-Z]/g, "");
```
