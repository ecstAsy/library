---
title: TS 的基础变量
author: ecstAsy
date: "2022-01-04"
---

###### 变量的表示

- **布尔值**

```js
let sex: boolean = true;
```

- **数字**

```js
let age: number = 20;
```

- **字符串**

```js
let firstName: string = "Lily";
```

- **数组**

```js
let list_a: number[] = [2, 3, 4];
let list_b: Array<number> = [1, 2, 3];
```

- **元组（Tuple） 类似于数组**

```js
let X: [number, string];
X = [10, "Tom"]; // success
// X = ['Tom', 10];        // error
```

- **枚举**

```js
enum Color { Red = 1, Green = 2, Blue = 4 }
let c: Color = Color.Green;
let colorName: string = Color[2];
alert(colorName);  // 显示'Green'因为上面代码里它的值是2
```

- **任意值**

```js
let A: any = "Mairy";
let B: any = 23;
let C: any = { name: "Tome" };
```

- **空值 (void)**

> 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void

```js
function todo(): void {
  alert("my name is void");
}
```

> 声明一个 void 类型的变量没有什么大用，因为你只能为它赋予 undefined 和 null

```js
let To: void = undefined;
let Do: void = null;
```

- **null 和 undefined**

> null 和 undefined 只能赋值给 void 和它们各自

```js
let u: undefined = undefined;
let n: null = null;
```

- **Never**

> never 类型表示的是那些永不存在的值的类型。 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never 类型，当它们被永不为真的类型保护所约束时。

> never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外）。 即使 any 也不可以赋值给 never。

```js
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```
