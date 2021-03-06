---
title: javaScript中常用的正则表达式
author: ecstAsy
date: "2022-01-04"
---

#### 正则表达式

- 邮箱

```js
/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
```

- URL

```js
/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
```

- 手机号

```js
/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
```

- 身份证号码

```js
/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
```

- 邮编

```js
/^[1-9]\d{5}(?!\d)$/;
```

- 日期 （YYYY-MM-DD)

```js
/^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/;
```

- 中文字符

```js
/[\u4e00-\u9fa5]/gm;
```

- 只能输入数字

```js
/^\d+$/;
```

- 只能英文字母

```js
// （小写）
/^[a-z]+$/i
// （大写）
/^[A-Z]+$/
```

- 只能输入英文数字

```js
/^[a-z0-9]+$/i;
```

- 英文 数字 下划线

```js
/^\w+$/;
```

#### 正则匹配的两种方式

**_match_**

```js
var str = "Is is the cost of of gasoline going up up";
var patt1 = /\b([a-z]+) \1\b/gi;
if (str.match(patt1)) {
  console.log("str 里面存在对应的字符串！");
}
```

**_test_**

```js
var str = "Is is the cost of of gasoline going up up";
var patt1 = /\b([a-z]+) \1\b/gi;

if (patt1.test(str)) {
  console.log("str 里面存在对应的字符串！");
}
```
