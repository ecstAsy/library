<h2 align="center">普通数字格式转金钱计数格式</h2>

## 展示效果

||Decimal|ThousandNum|
|:-:|:-:|:-:|
|1|1.00|1.00|
|1.1|1.10|1.10|
|1.11|1.11|1.11|
|34567.876|34567.88|34,567.88|
|20190214|20190214.00|20,190,214.00|

## 代码

__补齐两位小数__
```js
function Decimal(x) {
  let f = parseFloat(x);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(f)) {
    return false;
  }
  f = Math.round(x * 100) / 100;
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}
```

__转成金钱计数格式__

```js
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214.34);
console.log(money);   // 20,190,214
```


__金额计算（精确到分，不足一分向上进一）__

```js
function toPrice2(x) {
  let f = parseFloat(x);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(f)) {
    return false;
  }
  let rs = f.toString().split('.');
  if (rs.length !== 1 && rs[1].length > 2) {
    f = Math.ceil(x * 100) / 100;
  }
  return f;
}
```