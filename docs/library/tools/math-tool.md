<h2 align="center">JS + - × ÷ 浮点计算</h2>

### 代码部分
```js
/*
 * 判断obj是否为一个整数
 */
function isInteger(obj) {
  return Math.floor(obj) === obj;
}

/*
 * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
 * @param floatNum {number} 小数
 * @return {object}
 *   {times:100, num: 314}
 */
function toInteger(floatNum) {
  var ret = {
    times: 1,
    num: 0
  };
  if (isInteger(floatNum)) {
    ret.num = floatNum;
    return ret;
  }
  var strfi = floatNum + '';
  var dotPos = strfi.indexOf('.');
  var len = strfi.substr(dotPos + 1).length;
  var times = Math.pow(10, len);
  var intNum = parseInt(floatNum * times + 0.5, 10);
  ret.times = times;
  ret.num = intNum;
  return ret;
}

/*
 * 核心方法，实现加减乘除运算，确保不丢失精度
 * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
 *
 * @param a {number} 运算数1
 * @param b {number} 运算数2
 * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
 * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
 *
 */

function operation(a, b, op) {
  var o1 = toInteger(a);
  var o2 = toInteger(b);
  var n1 = o1.num;
  var n2 = o2.num;
  var t1 = o1.times;
  var t2 = o2.times;
  var max = t1 > t2 ? t1 : t2;
  var result = null;
  switch (op) {
    case 'add':
      if (t1 === t2) {
        // 两个小数位数相同
        result = n1 + n2;
      } else if (t1 > t2) {
        // o1 小数位 大于 o2
        result = n1 + n2 * (t1 / t2);
      } else {
        // o1 小数位 小于 o2
        result = n1 * (t2 / t1) + n2;
      }
      return result / max;
    case 'subtract':
      if (t1 === t2) {
        result = n1 - n2;
      } else if (t1 > t2) {
        result = n1 - n2 * (t1 / t2);
      } else {
        result = n1 * (t2 / t1) - n2;
      }
      return result / max;
    case 'multiply':
      result = (n1 * n2) / (t1 * t2);
      return result;
    case 'divide':
      return (result = (function () {
        var r1 = n1 / n2;
        var r2 = t2 / t1;
        return operation(r1, r2, 'multiply');
      })());
  }
}

const MathTool = {
  // 加减乘除的四个接口
  add(a, b) {
    return operation(a, b, 'add');
  },
  subtract(a, b) {
    return operation(a, b, 'subtract');
  },
  multiply(a, b) {
    return operation(a, b, 'multiply');
  },
  divide(a, b) {
    return operation(a, b, 'divide');
  },
}

export default MathTool
```

### 使用方法

在工具函数里面写入此函数，在需要使用的地方引入该方法就可以。

```js
import MathTool from 'utils';

// 加 +
MathTool.add(2, 5); // 7
// 减 -
MathTool.subtract(10, 5); // 5
// 乘 *
MathTool.multiply(2, 5); // 10
// 除 ÷
MathTool.divide(10, 5); // 2

```