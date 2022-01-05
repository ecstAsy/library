---
title: 闭包
author: ecstAsy
date: "2022-01-04"
---

## 简介

闭包就是能够读取其他函数内部变量的函数。例如在 javascript 中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

## 简单使用

```js
function _getName() {
  var _initName = "Mary";
  function Todo() {
    console.log(_initName);
  }
  return Todo;
}

var getName = _getName();
getName(); //  Mary  (注：函数内部的子函数能读取局部变量)
```

在 \_getName() 执行以后，误以为 \_initName 不会被读取到，但是执行以后发现 \_initName 被读取值为 ‘Mary'。
因为在 JavaScript 中，JavaScript 函数会形成闭包。
闭包是由函数以及创建该函数的词法环境组合而成。
这个环境包含了这个闭包创建时所能访问的所有局部变量。

```js
function Cunter(x) {
  function add(y) {
    return x + y;
  }
  return add;
}
// 分别生成独立的闭包
var Counter5 = Counter(5); // x = 5
var Counter9 = Counter(9); // x = 9

console.log(Counter5(5)); // 10
console.log(Counter9(9)); // 18
```

## 闭包模拟私有方法

在编程语言中，(exp:Java) 支持将方法声明为私有，即他们只能被同一个类中其他方法所调用。

然而 JavaScript 中没有这种原生支持。我们可以使用闭包模拟私有方法。私有方法不仅有利于限制对代码的访问，
还提供了管理全局命名空间的强大能力，避免非核心的方法弄乱了代码的公共接口部分。

下面的示例展现了如何使用闭包来定义公共函数，并令其可以访问私有函数和变量。
这个方式也称为 模块模式（module pattern）：

```js
var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.value()); /* logs 0 */
Counter1.increment();
Counter1.increment();
console.log(Counter1.value()); /* logs 2 */
Counter1.decrement();
console.log(Counter1.value()); /* logs 1 */
console.log(Counter2.value()); /* logs 0 */
```

以这种方式使用闭包，提供了许多与面向对象编程相关的好处 —— 特别是数据隐藏和封装。

## 注意

在循环中创建闭包特别要注意，很容易出错。
