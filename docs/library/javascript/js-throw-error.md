<h2 align="center">Throw Error</h2>

### 自定义捕获抛出异常

**new Error（）：** 生成的是一个对象

> 我们就可以再生成的对象里面添加我们自己的参数，以供我们捕获的时候需要！

```js
const todo = () => {
  try {
    const Error = new Error("error message!");
    Error.type = "done";
    throw Error;
  } catch (error) {
    if (error.type === "done") {
      // todo
    }
  }
};
```
