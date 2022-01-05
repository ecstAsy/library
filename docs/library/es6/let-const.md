<h2 align="center">let&const详解</h2>

|           | 声明变量，没有变量提升 | 块级作用域 | 不能重复声明 | 声名常量，一旦赋值就不能被修改 |
| :-------: | :--------------------: | :--------: | :----------: | :----------------------------: |
|  **let**  |           √            |     √      |      √       |                                |
| **const** |           √            |     √      |              |               √                |

### let

- let 声明变量，没有变量提升
- let 是一个块级作用域
- let 不能重复声明

**_let 没有变量提升_**

```js
console.log(a);
let a = 10; // Uncaught ReferenceError: Cannot access 'a' before initialization.
```

**_let 是块级作用域_**

```js
console.log(a); // Uncaught ReferenceError: a is not defined.
if (1 === 1) {
  let a = 10;
}
console.log(a); // Uncaught ReferenceError: a is not defined.
```

**_let 不能重复声明_**

```js
let a = 5;
let a = 10;
console.log(a); // Uncaught SyntaxError: Identifier 'a' has already been declared.
```

### const

- const 声明变量，没有变量提升
- const 是一个块级作用域
- const 声名常量，一旦赋值就不能被修改

**_const 一旦赋值不能被修改_**

```js
// 声明常量
const a = 5;
a = 10;
console.log(a); // Uncaught TypeError: Assignment to constant variable.

// 声明对象
const Car = {
  name: "奥迪",
};

Car.name = "宝马";

console.log(Car); // {name: "宝马"}

Car = {
  name: "宝马",
};

console.log(Car); // Uncaught TypeError: Assignment to constant variable.
```

#### 作用

- for 循环
- 不污染全局变量

**_for 循环_**

```js
// var 变量提升
var arr1 = [];

for (var i = 0; i < 10; i++) {
  arr1[i] = function () {
    return i;
  };
}

console.log(arr1[5]()); // 10

// let & const  块级作用域
const arr2 = [];

for (let i = 0; i < 10; i++) {
  arr2[i] = function () {
    return i;
  };
}

console.log(arr2[5]()); // 5
```

**_不污染全局变量_**

```js
let RegExp = 10;
console.log(RegExp); // 10
console.log(window.RegExp); // ƒ RegExp() { [native code] }
```

##### **_提示： 在默认情况下使用 const，如果你知道这个变量要被修改的情况下使用 let._**
