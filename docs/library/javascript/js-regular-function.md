<h2 align="center">javaScript中常用函数</h2>

### Array

**_toString():_** 数组转字符串

```js
const Citys = ["北京", "上海", "广州", "深圳"];

const CityStr = Citys.toString();

console.log(CityStr); // 北京,上海,广州,深圳
```

**_Array.form():_** 获取数组元素中的某个字段的集合

```js
const Citys = [
  { id: 1, name: "北京" },
  { id: 2, name: "上海" },
  { id: 3, name: "广州" },
  { id: 4, name: "深圳" },
];

const CityNames = Array.from(Citys, ({ name }) => name);

console.log(CityNames); // [ '北京', '上海', '广州', '深圳' ]
```

**_sort():_** 数组排序

```js
// 单维数组
const Arrys = [1, 5, 6, 3, 7, 8];

const newArrys = Arrys.sort((a, b) => a - b);

console.log(newArrys); // [ 1, 3, 5, 6, 7, 8 ]

// 多维数组
const Students = [
  { name: "Lily", age: 18 },
  { name: "Mary", age: 25 },
  { name: "Tom", age: 15 },
  { name: "Bob", age: 19 },
];

const newStudents = Students.sort((a, b) => a.age - b.age);

console.log(newStudents);
// [ { name: 'Tom', age: 15 }, { name: 'Lily', age: 18 }, { name: 'Bob', age: 19 }, { name: 'Mary', age: 25 } ]
```

**_new Set():_** 数组去重

使用 new Set()方法进行数组去重的时候，一定要保证数组元素的类型是一致的，因为在内部判断的时候用的是 '===' 而不是 '=='。

```js
// 数组元素类型一致
const Arry = [1, 2, 4, 3, 1, 2, 3, 4, 6];

let Arrys = [...new Set(Arry)];

console.log(Arrys); // [ 1, 2, 4, 3, 6 ]

// 数组元素不一致
const Arrys = [1, 2, 4, 3, "1", 2, "3", 4, 6];

let Arry = [...new Set(Arrys)];

console.log(Arry); // [ 1, 2, 4, 3, '1', '3', 6 ]
```

**_数组去重方法自实现_**

```js
// duplicate removal
function duplicateRemoval(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        array.splice(j, 1);
        j--; // 删除一个元素后，后面的元素会依次往前，下标也会依次往前。
      }
    }
  }
  return array;
}

const Arry = duplicateRemoval([1, 2, 3, 4, 5, 6, 7, 1, 2, 2, 3, 3, 4, 4]);

console.log("====================================");
console.log(Arry); // [1, 2, 3, 4, 5, 6, 7]
console.log("====================================");
```

**_冒泡算法排序_**

```js
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
```

**_Math:_** 数组取最大最小值

```js
const arr = [2, 5, 6, 10, 22];

const max = Math.max(...arr);

console.log(max); // 22

const min = Math.min(...arr);

console.log(min); // 2
```

**_reduce:_** 数组求和

```js
const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);

console.log(sumOfAges); // 64.
```

**_every:_** 验证数组每个元素

```js
var numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function (currentValue) {
  return currentValue < 10;
});

// Returns false
```

**_some:_** 验证数组每个元素

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function (currentValue) {
  return currentValue < 10;
});
// Returns true
```

### String

**_split():_** 字符串转数组

```js
const CityStr = "北京,上海,广州,深圳";

const Citys = CityStr.split(",");

console.log(Citys); //  [ '北京', '上海', '广州', '深圳' ]
```

**_charAt():_** 截取字符串第一个字符

```js
const str = "Welcome";

const a = str.charAt();

console.log(a); // W
```
