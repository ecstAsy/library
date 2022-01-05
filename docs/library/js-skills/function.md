---
title: Function
author: ecstAsy
date: "2022-01-04"
---

## 函数自执行

```js
const Func = (function () {})(); // 常用

(function () {})(); // 常用

(function () {})(); // 常用

[(function () {})()];

+(function () {})();

-(function () {})();

~(function () {})();

!(function () {})();

new (function () {})();

new (function () {})();

void (function () {})();

typeof (function () {})();

delete (function () {})();

1, (function () {})();

1 ^ (function () {})();

1 > (function () {})();
```

## 隐式返回值

> _只能用于单语句返回值箭头函数，如果返回值是对象必须使用()包住_

```js
const Func = function (name) {
  return "I Love " + name;
};

// 换成
const Func = (name) => "I Love " + name;
```

## 一次性函数

> _适用于运行一些只需执行一次的初始化代码_

```js
function Func() {
  console.log("x");
  Func = function () {
    console.log("y");
  };
}
```

## 惰性载入函数

> _函数内判断分支较多较复杂时可大大节约资源开销_

```js
function Func() {
  if (a === b) {
    console.log("x");
  } else {
    console.log("y");
  }
}
// 换成
function Func() {
  if (a === b) {
    Func = function () {
      console.log("x");
    };
  } else {
    Func = function () {
      console.log("y");
    };
  }
  return Func();
}
```

## 检测非空参数

```js
function IsRequired() {
  throw new Error("param is required");
}

function Func(name = IsRequired()) {
  console.log("I Love " + name);
}

Func(); // "param is required"

Func("You"); // "I Love You"
```

## 字符串创建函数

```js
const Func = new Function("name", 'console.log("I Love " + name)');

console.log(Func); // anonymous(name) { console.log("I Love " + name) }
```

## 优雅处理错误信息

```js
try {
  Func();
} catch (e) {
  location.href = "https://stackoverflow.com/search?q=[js]+" + e.message;
}
```

## 优雅处理 Async/Await 参数

```js
function AsyncTo(promise) {
  return promise.then((data) => [null, data]).catch((err) => [err]);
}

const [err, res] = await AsyncTo(Func());
```

## 优雅处理多个函数返回值

```js
function Func() {
  return Promise.all([fetch("/user"), fetch("/comment")]);
}

// 需在async包围下使用
const [user, comment] = await Func();
```
