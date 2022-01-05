<h2 align="center">数组转对象</h2>

## 快速将数组转换成对象

```js
const Arry = [
  { name: 1, is: 0 },
  { name: 2, is: 1 },
  { name: 3, is: 2 },
]

const todo = arr => {
  let obj = {};
  let KEYS = Array.from(arr, ({ is }) => is);
  KEYS = [...new Set(KEYS)];
  KEYS.forEach(i => {
    obj[`is${i}`] = arr.filter(item => item.is === i)
  })
  return obj
}

console.log(todo(Arry)) 
// { is0: [ { name: 1, is: 0 } ], is1: [ { name: 2, is: 1 } ], is2: [ { name: 3, is: 2 } ] }
```

## 方法解析

***Array.from()***

Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

```js
const cities = [
  { name: 'Paris', visited: 'no' },
  { name: 'Paris', visited: 'no' },
  { name: 'Marseille', visited: 'yes' },
  { name: 'Rome', visited: 'yes' },
  { name: 'Milan', visited: 'no' },
  { name: 'Palermo', visited: 'yes' },
  { name: 'Genoa', visited: 'yes' },
  { name: 'Berlin', visited: 'no' },
  { name: 'Hamburg', visited: 'yes' },
  { name: 'New York', visited: 'yes' }
];

const cityNames = Array.from(cities, ({ name }) => name);

console.log(cityNames);
//[ 'Paris', 'Paris', 'Marseille', 'Rome', 'Milan', 'Palermo', 'Genoa', 'Berlin', 'Hamburg', 'New York' ]


```

***new Set()***

数组去重。

```js
const cityNames = [ 'Paris', 'Paris', 'Marseille', 'Rome', 'Milan', 'Palermo', 'Genoa', 'Berlin', 'Hamburg', 'New York' ];

cityNames = [...new Set(cityNames)];

console.log(cityNames)
// ['Paris', 'Marseille', 'Rome', 'Milan', 'Palermo', 'Genoa', 'Berlin', 'Hamburg', 'New York']
```