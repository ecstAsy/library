<h2 align="center">querystring小记</h2>

### querystring 四个方法

***stringify：*** 将一个对象序列化成一个字符串，与querystring.parse相对。 （序列化）

***parse：*** 将一个字符串反序列化为一个对象。 （反序列化）

***escape：*** 对传入的字符串进行编码。 （编码）

***unescape：*** 可将含有%的字符串进行解码。 （解码）

### queryString 的使用

***在使用querystring之前一定要先引入该模块。***

```js
// ***方法1
import querystring from 'querystring';          // ES6
const querystring = require("querystring");     // ES5
  // 调用
querystring.parse();
querystring.stringify();
querystring.escape();
querystring.unescape();

// ***方法2
import { stringify, parse, escape, unescape } from 'querystring';
  // 调用
parse();
stringify();
escape();
unescape();
```

#### stringify()

#### parse()

#### escape()

#### unescape()