<h2 align="center">Object.{keys,values,assign}方法随笔</h2>

## for...in 语句

for...in 可以任意顺序的遍历一个 Object (对象)里面自有的、原型链上面的、可枚举的、非 Symblo 的属性。
对于每一个属性，都会被执行。

*注 可循环枚举原型链上的属性。

可枚举属性: 能被 for...in 语句迭代出来的就属性
不可枚举属性: 原型链上的属性原则上都属于不可枚举属性，不能被 for...in 语句迭代出来，但是每一个属性都会被执行

## Object.keys()

Object.keys() 方法会返回一个字符串数组，如果键-值都不可枚举，则返回键组成的数组。

Object.keys() 会返回一个所有元素都是字符串的数组，该数组的元素都属于给定对象的可枚举属性，其遍历顺序和 for...in
遍历的顺序一致。


```js
const NUMS = [1, 2, 3];
console.log(Object.keys(NUMS))              // ['0', '1', '2']

const Person = {
  name: 'Mary',
  job: 'IT',
  age: '20',
  sex: '男'
}

const KEYS = Object.keys(Person);
console.log(KEYS);                          // ["name", "job", "age", "sex"]

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  } 
});
myObj.foo = 1;
console.log(Object.keys(myObj));            // ['foo']

```

## Object.values()

Object.values() 返回一个数组。

Object.values() 返回一个数组，其元素是给定对象可枚举属性的值，其遍历顺序和 for...in
遍历的顺序一致。


```js
const Person = {
  name: 'Mary',
  job: 'IT',
  age: '20',
  sex: '男'
}

const VALUES = Object.values(Person);
console.log(VALUES);                      //  ["Mary", "IT", "20", "男"]

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj));       // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo'));        // ['f', 'o', 'o']
```


所以当需要遍历一个 Object 的属性时，请尽量避免 for...in 语句的使用，我们可以使用  Object.keys() 方法。
或者 propertyIsEnumerable() 方法判断该属性是否是可枚举属性， hasOwnProperty() 方法判断可枚举属性里面是否
包含该属性。


## Object.assign()

Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

```js
const obj1 = { a: 1, b: 2, c: 4 };

const obj2 = { a: 2, b: 4, c: 4, d: 6 };

const obj3 = Object.assign(obj1, obj2);

console.log(obj3);                     // { a: 2, b: 4, c: 4, d: 6 }

// ... 展开符同样可以实现相同效果
const obj4 = {...obj1, ...obj2};

console.log(obj4);                     // { a: 2, b: 4, c: 4, d: 6 }
```

***注：*** 为响应函数式编程，推荐使用 ... 展开操作符。