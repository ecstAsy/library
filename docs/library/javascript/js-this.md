---
title: this 指向
author: ecstAsy
date: "2022-01-04"
---

## 非箭头函数

this => 调用其所在函数对象，而且距离谁近指向谁（常规对象，原型链，getter & setter 都适用）；

## 构造函数

this => 被新创建的对象

## DOM 事件

this => 触发事件的元素

## 内联事件

bind/call & apply

## 全局环境

在全局环境下，this 始终指向全局对象（window）, 无论是否严格模式；

```js
console.log(this.document === document); // true

// 在浏览器中，全局对象为 window 对象：
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

## 函数上下文调用

### 函数直接调用

普通函数内部 this 分两种情况 严格模式和非严格模式

非严格模式下 this 指向 window 对象

```js
function f1() {
  return this;
}
console.log(f1() === window); // true
```

严格模式下 this 为 undefind

```js
function f2() {
  "use strict"; // 严格模式
  return this;
}
console.log(f2() === undefind); // true
```

### Object 中的 this

**对象内部方法的 this 指向调用这些方法的对象**

1. 定义函数的位置和 this 没有关系，只和调用函数的对象有关。
2. 多层嵌套的对象，内部函数调用的 this 指向调用函数最近的对象（window 也是对象，其内部对象调用方法的 this 指向内部对象，非 window 对象）。

```js
var Obj = {
  name: "Mary",
  age: 20,
  getName: function () {
    return this.name;
  },
};

console.log(Obj.getName()); // Mary  this 指向 Obj(最近的)

var f3 = Obj.getName;

console.log(f3()); // undefind this 指向 f3(最近的) 非 Obj

function Age() {
  return this.age;
}

Obj.getAge = Age;

console.log(Obj.getAge()); // 20  this 指向 Obj(最近的)

Obj.prop = {
  getAge: Age,
  age: 30,
};

console.log(Obj.prop.getAge()); // 30 this 指向 Obj.prop(最近的) 非 Obj
```

**原型链中 this**

原型链中方法的 this 同样指向调用它的对象

```js
var Obj = {
  Todo: function () {
    return this.a + this.b;
  },
};

var P = Object.create(Obj);

P.a = 2;

P.b = 3;

console.log(P.Todo()); // 5 this 指向 P 调用方法的对象（最近的）
```

由此可见 P 中没有 Todo 方法，但是执行 P.Todo 时，会查找 P 的原型链，找到 Todo 函数并执行，但这与内部 this 指向 P 没有任何关系，和调用函数的对象有关系。

**getter & setter**

同上所述

## 构造函数中的 this

构造函数的 this 与新创建的对象绑定

注：当构造器返回的默认值是 this 引用的一个对象时，可手动设置返回其他对象。
如果返回值不是一个对象，则返回 this。

```js
function C1() {
  this.name = "Mary";
}

var P1 = new C1();
console.log(P1.name); // Mary 返回值不是对象 而是this

function C2() {
  this.name = "Mary";
  return {
    name: "Tom",
  };
}

var P2 = new C2();
console.log(P2.name); // Tom 返回值是一个对象  可手动更改  this.name = 'Mary' 被忽略
```

## call && apply

当函数通过 Function 原型中继承的 call() & apply() 方法时，其函数内部的 this 可绑定到 call() & apply() 方法指定的第一个对象上，
如果第一个参数不是 Object，JavaScript 内部会尝试将其转换成 Object 然后指向它。

```js
function Add(c, d) {
  console.log(this);
  return this.a + this.b + c + d;
}

var obj = { a: 5, b: 9 };
Add.call(obj, 6, 8); //  {a: 5, b: 9}
Add.apply(obj, [7, 9]); //  {a: 5, b: 9}

function Cost() {
  console.log(this);
}

Cost.call(7); // Number {[[PrimitiveValue]]: 5}
Cost("222"); // STring {[[PrimitiveValue]]: '222'}
Cost.apply(7); // Number {[[PrimitiveValue]]: 5}
Cost.apply([7]); // [7]
```

## bind 方法

**Function.prototype.bind**

通过 bind 方法绑定后，函数被永远绑定在第一个参数对象上，被一直调用。

```js
function todo() {
  return this.name;
}

var Foo = todo.bind({ name: "Mary" });
console.log(Foo()); // Mary

var Bar = {
  name: "Tom",
  age: 20,
  getName: todo,
};

console.log(Bar.getName()); // Tom 同 Object 中的 this
```

## setTimeout & setInterval

延时函数内部 this 指向 window 对象，可以使用 bind 改变其 this 指向。

```js
function Person1() {
  this.age = "20";
  setTimeout(function () {
    console.log(this);
  }, 1000);
}

var P1 = new Person1(); // 1s 后输出 window 对象

function Person2(age) {
  this.age = age;
  setTimeout(function () {
    console.log(this);
  }, 1000).bind(this);
}

var P2 = new Person2(20); // 1s 后输出 P2 （新生成的 Person2 对象）
```

## 箭头函数中的 this

### 方法内部箭头函数，非方法方式调用

注：箭头函数没有定义 this 绑定，它会捕获其所在（即定义的位置）上下文的 this 值， 作为自己的 this 值。

1. call() & apply() & bind() 只是传入参数，对 this 没有影响。
2. 考虑到 this 是词法层面上的，严格模式中与 this 相关的规则都将被忽略。（可以忽略是否在严格模式下的影响）

因为箭头函数可以捕获其所在上下文的 this 值，所以

```js
function Person1() {
  this.age = 10;
  setTimeout(() => {
    console.log(this);
  }, 1000);
}

var P1 = new Person1(); // 1s 后输出 P1 （新生成的 Person1 对象)

function Person2() {
  this.age = "20";
  setTimeout(function () {
    console.log(this);
  }, 1000);
}

var P2 = new Person1(); // 1s 后输出 window 对象
```

使用箭头函数，this 指向上下文的 this， 而普通函数则指向 window 对象.

**Object 中的箭头函数**

```js
var People = {
  firstName: "Mary",
  getName: function (lastName) {
    var f1 = (str) => `${this.firstName} ${str}`;
    return f1(lastName);
  },
  getFullName: function isFull(lastName) {
    var f2 = (str) => `${this.firstName} ${str}`;
    var auther = {
      firstName: "Tom",
    };
    return f2.call(auther, lastName);
  },
};
console.log(People.getName("Mr")); // Mary Mr this 指向 People
console.log(People.getFullName("Mr")); // Mary Mr this 仍然指向 People，没有因为 call 而改变。
```

**严格模式和非严格模式对比**

```js
var f1 = () => {
  "use strict";
  return this;
};

var f2 = () => {
  return this;
};

console.log(f1()); // window 对象
console.log(f2()); // window 对象
console.log(f1() === f2()); // true  因为都是 window 对象
```

### 箭头函数作为方法调用

```js
var obj = {
  i: 10,
  b: () => {
    console.log(this.i, this);
  },
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // undefind   window 对象   (注：箭头函数没有定义this绑定)
obj.c(); // 10  对象 obj  （注：函数最近的对象）

var fun = obj.c;
fun(); // undefind  window 对象   （注：调用最近的对象 fun 非 obj)
```

## DOM 中的 this

```js
case1：

<button onclick="console.log('1:', this)">1</button>
// 1: <button onclick="console.log('1:', this)">1</button> （注：this 指向该元素）


case2：
html
<button onclick="handleClick2()">2</button>
js
function handleClick2(){    // 非严格模式
  console.log('2:', this)  // 2: window
}

case3:
html
<button onclick="handleClick3()">3</button>
js
function handleClick3(){
  "use strict";            // 严格模式
  console.log('3:', this)  // 3: undefind
}

case4:
html    // error 格式  此写法是不允许的
<button onclick="() => handleClick4()">4</button>

```
