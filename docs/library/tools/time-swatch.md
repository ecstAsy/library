<h2 align="center">对象中时间格式转换</h2>

#### 时间转换

***背景：*** 在antd-design中，当我们在使用表单时候，会遇到针对时间的处理，按照平常的做法就是
在每一次提交的时候都需要处理一下才能提交给后台。

```js
import moment from 'moment';

// object => 你要处理的对象
// arr => 你要处理的事件 key 值
handleFieldsTime(object, arr) {
  const fields = object;
  arr.forEach(item => {
    // 使用 hasOwnProperty 是为了验证非原型链上面的 key
    if ({}.hasOwnProperty.call(fields, item) && fields[item]) {
      // 判断要处理的时间是不是数组格式
      if (fields[item] instanceof Array) {
        // format => 将时间格式进行转换
        fields[item] = [fields[item][0].format('YYYY-MM-DD'), fields[item][1].format('YYYY-MM-DD')];
      } else {
        fields[item] = fields[item].format('YYYY-MM-DD');
      }
    }
  })
  return fields
}
```

#### 使用方法

在工具函数里面写入此函数，在需要使用的地方引入该方法就可以。

```js
import { handleFieldsTime } from 'utils';

const fields = {
  name: 'Lily',
  entryTime: '20191024171305' // 或者其他moment格式的时间都可以
};

fields = handleFieldsTime(fields, ['entryTime']);

console.log(fields);  // { name: 'Lily', entryTime: '2019-10-24' }

```