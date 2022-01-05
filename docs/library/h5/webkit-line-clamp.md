<h2 align="center">webkit-line-clamp</h2>

H5端实现多余文字 ___...___ 显示

```js
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
```