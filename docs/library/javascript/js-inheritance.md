---
title: JavaScript中的继承
author: ecstAsy
date: "2022-01-04"
---

- 最简单的类
- 构造函数和原型链里面增加方法
- 类里面的静态方法
- 原型链+对象冒充的组合继承模式
- 原型链实现继承
- 原型链实现继承的一个问题
- 原型链+对象冒充的组合继承模式
- 原型链+对象冒充继承的另一种方式

###### ① 最简单的类

```js
function Person(name, age) {
  this.name = name; /* 属性 */
  this.age = age; /* 属性 */
}

var p = new Person("张三", 20);

console.log(p.name); // 张三
```

###### ② 构造函数和原型链里面增加方法

> _原型链上的属性会被多个实例共享，但是构造函数不会被共享_

```js
function Person(name, age) {
  this.name = name; /* 属性 */
  this.age = age; /* 属性 */
  this.run = function () {
    /* 实例方法 */
    console.log(`${this.name}在跑步！`);
  };
}

// 原型链上的属性会被多个实例共享，但是构造函数不会被共享
Person.prototype.sex = "男";

Person.prototype.work = function () {
  /* 原型链方法 */
  console.log(`${this.name}在工作！`);
};

var p = new Person("张三", 20);

console.log(p.name); // 张三

p.run(); // 张三在跑步！

p.work(); // 张三在工作！
```

###### ③ 类里面的静态方法

```js
function Person(name, age) {
  this.name = name; /* 属性 */
  this.age = age; /* 属性 */
  this.run = function () {
    /* 实例方法 */
    console.log(`${this.name}在跑步！`);
  };
}

Person.getInfo = function () {
  /* 静态方法 */
  console.log("我是静态方法！");
};

// 原型链上的属性会被多个实例共享，但是构造函数不会被共享

Person.prototype.sex = "男";

Person.prototype.work = function () {
  /* 原型链方法 */
  console.log(`${this.name}在工作！`);
};

var p = new Person("张三", 20);

console.log(p.name); // 张三

p.run(); // 张三在跑步！

p.work(); // 张三在工作！

// 调用静态方法   直接用构造函数调用，实例无法调用
Person.getInfo(); // 我是静态方法
```

###### ④ 原型链+对象冒充的组合继承模式

> _对象冒充可以继承构造函数里面的属性和方法,但是不能继承原型链上面的属性和方法_

```js
function Person(name, age) {
  this.name = name; /* 属性 */
  this.age = age; /* 属性 */
  this.run = function () {
    /* 实例方法 */
    console.log(`${this.name}在跑步！`);
  };
}

Person.prototype.sex = "男";

Person.prototype.work = function () {
  /* 原型链方法 */
  console.log(`${this.name}在工作！`);
};

// Web类继承Person类   原型链+对象冒充的组合继承模式
function Web(name, age) {
  Person.call(this, name, age);
}

var w = new Web("李四", 16);

console.log(w.name); // 李四

// 对象冒充可以继承构造函数里面的属性和方法
w.run(); // 李四在工作

// 但是不能继承原型链上面的属性和方法
w.work(); // Error: w.work is not a function
```

###### ⑤ 原型链实现继承

> _原型链实现继承:可以继承构造函数里面的属性和方法,也可以继承原型链上面的属性和方法_

```js
function Person(name, age) {
  this.name = name; /* 属性 */
  this.age = age; /* 属性 */
  this.run = function () {
    /* 实例方法 */
    console.log(`${this.name}在跑步！`);
  };
}

Person.prototype.sex = "男";

Person.prototype.work = function () {
  /* 原型链方法 */
  console.log(`${this.name}在工作！`);
};

function Web() {}

// 原型链实现继承
Web.prototype = new Person("王五", 24);

var w = new Web();

// 原型链实现继承:可以继承构造函数里面的属性和方法
w.run(); // 王五在运动

// 原型链实现继承:也可以继承原型链上面的属性和方法
w.work(); // 王五在工作！
```

###### ⑥ 原型链继承的一个问题

> **实例化子类的时候不能给父类传参**

```js
function Person(name, age) {
  this.name = name; /* 属性 */
  this.age = age; /* 属性 */
  this.run = function () {
    /* 实例方法 */
    console.log(`${this.name}在跑步！`);
  };
}

Person.prototype.sex = "男";

Person.prototype.work = function () {
  /* 原型链方法 */
  console.log(`${this.name}在工作！`);
};

function Web(name, age) {}

// 原型链实现继承
Web.prototype = new Person();

// 实例化子类的时候不能给父类传参
var w = new Web("王五", 26);

w.run(); // undefined在跑步！
```

###### ⑦ 原型链+对象冒充的组合继承模式

```js
function Person(name, age) {
  this.name = name; /* 属性 */
  this.age = age; /* 属性 */
  this.run = function () {
    /* 实例方法 */
    console.log(`${this.name}在跑步！`);
  };
}

Person.prototype.sex = "男";

Person.prototype.work = function () {
  /* 原型链方法 */
  console.log(`${this.name}在工作！`);
};

function Web(name, age) {
  // 对象冒充继承   实例化子类可以给父类传参
  Person.call(this, name, age);
}

// 原型链实现继承
Web.prototype = new Person();

var w = new Web("王五", 26);

w.run(); // 王五在跑步！

w.work(); // 王五在工作！
```

###### ⑧ 原型链+对象冒充继承的另一种方式

```js
function Person(name, age) {
  this.name = name; /* 属性 */
  this.age = age; /* 属性 */
  this.run = function () {
    /* 实例方法 */
    console.log(`${this.name}在跑步！`);
  };
}

Person.prototype.sex = "男";

Person.prototype.work = function () {
  /* 原型链方法 */
  console.log(`${this.name}在工作！`);
};

function Web(name, age) {
  // 对象冒充继承   实例化子类可以给父类传参
  Person.call(this, name, age);
}

// 原型链实现继承
Web.prototype = Person.prototype;

var w = new Web("王五", 26);

w.run(); // 王五在跑步！

w.work(); // 王五在工作！
```
