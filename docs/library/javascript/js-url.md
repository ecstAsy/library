<h2 align="center">获取URL参数</h2>

#### URL 传参

- encodeURIComponent 传入编码
- decodeURIComponent 接收解码

#### 获取参数

```js
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
```
