<h2 align="center">a++ 和 ++a 的区别</h2>

## a++ 和 ++a 的区别

不管 a++ 还是 ++a ，都是要自身 + 1。
***a++:*** 先返回值，再执行语句。 （先返回旧值，再计算，最后存储新值）
***++a:*** 先执行语句，再返回值。 （先计算，再存储新值，最后返回新值）

```js
let number = 0;
console.log(number++);     // 0
console.log(number);       // 1
console.log(++number);     // 2
console.log(number);       // 2
```