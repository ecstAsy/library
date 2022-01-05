---
title: TS 的接口
author: ecstAsy
date: "2022-01-04"
---

##### interface

**js**

```js
function getName({ firstName, secondName }) {
  return `my name is ${secondName}-${firstName}!`;
}

let obj = {
  firstName: "秋萍",
  secondName: "李",
};

console.log(getName(obj)); // my name is 李-秋萍!
```

**ts**

> 接口里面所提到属性，必须都要有。

```js
interface Name {
  realName: string;
  age: number;
  sex?: string;
}

function getRealName(info: Name): string {
  return `my name is ${info.realName}!`;
}

let people = { realName: "秋萍", age: 20 };

console.log(getRealName(people)); // my name is 秋萍!
```

##### 可选属性

> 如果有的属性不是必须的可以在属性后面加？来代替 例如： **sex?: string**

##### 只读属性

###### readonly

> 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly 来指定只读属性

```js
interface Point {
  readonly x: number;
  readonly y: number;
}

let P: Point = { x: 10, y: 20 };
P.x = 40;    // Error: Cannot assign to 'x' because it is a read-only property.
```

###### ReadonlyArray<泛型>

> 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改

```js
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```
