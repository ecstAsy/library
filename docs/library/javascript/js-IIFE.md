<h2 align="center">IIFE(立即执行函数)随笔</h2>

## IIFE

IIFE（ 立即调用函数表达式）是一个在定义时就会立即执行的 JavaScript 函数。

```js
(function () {
  // todo something
})();
```

自执行函数包括两部分：

- 包围在 圆括号运算符 () 里的一个匿名函数，这个匿名函数拥有独立的词法作用域。这不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。

- 再一次使用 () 创建了一个立即执行函数表达式，JavaScript 引擎到此将直接执行函数。

## 了解函数声明、函数表达式、匿名函数

**_函数声明_**

```js
function todo() {
  console.log("函数声明");
}
```

**_函数表达式_**

```js
var todo = function () {
  console.log("函数表达式");
};
```

**_匿名函数_**

```js
function () {
  console.log('匿名函数')
}
```

## IIFE 的优点

**_通过定义一个匿名函数，生成一个独立私有的函数作用域空间，该空间内的方法和变量，不会污染全局环境，同时也不会被外界使用到_**

```js
(function () {
  var name = "Mary";
})();

console.log(name); // '' 此时在外部是读取不到内部的变量的
```

**_不用再次调用函数，可以直接执行_**

```js
var result = (function () {
  var name = "Barry";
  return name;
})();

console.log(result); // Barry result 保存的不是声明地函数体，而是函数执行的结果。
```
