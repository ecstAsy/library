<h2 align="center">hasOwnProperty 函数随笔</h2>

为了判断对象是否含有自定义属性，而不是原型链上的属性，我们可以使用继承自 Object.prototype 的 hasOwnProperty 方法.

### 特点

hasOwnProperty 是 JavaScript 中唯一一个处理属性，而不查找原型链的函数。

例子：
```js
Object.prototype.PSTR = '原型链属性';
const TEST = {
  OSTR: '自身属性'
} 

console.log(TEST.PSTR);                       // 原型链属性
console.log('PSTR' in TEST);                  // true

console.log(TEST.hasOwnProperty('PSTR'));     // false
console.log(TEST.hasOwnProperty('OSTR'));     // true
```

 没有其它方法可以用来排除原型链上的属性，而不是定义在对象自身上的属性。

### 如果 hasOwnProperty 被作为属性

JavaScript 不会保护 hasOwnProperty 被非法占用(特殊字符： delete，...)，因此如果一个对象碰巧存在这个属性， 
就需要使用外部的 hasOwnProperty 函数来获取正确的结果。

例子：
```js
const Test = {
  hasOwnProperty: function() {
    return false
  },
  OSTR: '自身属性'
}

console.log(Test.hasOwnProperty('OSTR'));                  // false (注：会一直返回 false)
console.log({}.hasOwnProperty.call(Test, 'OSTR'));        // true
```

### for in 中的 hasOwnProperty

使用 for in 遍历对象的属性的时候，它会不仅遍历对象自定义属性，还会遍历原型链上面的属性。

例子：
```js
Object.prototype.PSTR = '原型链属性';
const TEST = {
  OSTR: '自身属性'
}

for (let key in TEST) {
  console.log(key)
  // 分别输出  PSTR, OSTR
}

// 使用 hasOwnProperty 可以只遍历自定义属性
for (let key in TEST) {
  if({}.hasOwnProperty.call(TEST,KEY)) {
    console.log(key);    // 输出 OSTR
  }
}
```

注意: 由于 for in 总是要遍历整个原型链，因此如果一个对象的继承层次太深的话会影响性能。


### 总结
当检查对象上某个属性是否存在时，hasOwnProperty 是唯一可用的方法。 
同时在使用 for in loop 遍历对象时，推荐总是使用 hasOwnProperty 方法， 
这将会避免原型对象扩展带来的干扰。