<h2 align="center">Uni-App 请求模板</h2>

### 目录结构

**src**

    ├── components         // 组件
    ├── http               // 请求
    │   ├── api.js         // 接口列表
    │   ├── config.js      // 请求配置
    │   ├── index.js       // 导出
    │   └── request.js     // 请求方法封装
    ├── images             // 图片资源
    ├── pages              // 页面
    ├── models
    ├── styles
    ├── utils              // 工具

### 代码

- request.js

```js
// 配置请求相关信息  域名
const noConsole = false;
const baseUrl = "https://your-host-port/";
// uni.request 封装
const Request = (
  options = {
    method: "GET",
    data: {},
  }
) => {
  return uni
    .request({
      url: `${baseUrl}${options.url}`,
      method: options.method.toUpperCase(),
      header: {
        "Content-Type": options.contentType || "application/json",
      },
      data: {
        ...options.data,
      },
    })
    .then((res) => {
      const { statusCode, data } = res;
      if (statusCode >= 200 && statusCode < 300) {
        if (!noConsole) {
          console.log(
            `${new Date().toLocaleString()}【 M=${
              options.url
            } 】【接口响应：】`,
            res.data
          );
        }
        if (data.code || data.statusCode) {
          if (data.code) {
            data.statusCode = String(data.code);
          }
          if (data.statusCode !== "200") {
            uni.showToast({
              title: `网络错误！`,
              icon: "none",
              mask: true,
            });
          }
        }
        return data;
      } else {
        throw new Error(`网络请求错误，状态码${statusCode}`);
      }
    });
};

const getRuquestApi = (args) => {
  if (args.constructor !== Object) {
    throw Error(
      `function getRuquestApi args Error: The parameter must be Object !`
    );
  }
  const HttpObj = {};
  const argsKeys = Object.keys(args);
  argsKeys.forEach((apiName) => {
    const { url, method, contentType } = args[apiName];
    HttpObj[apiName] = (data) =>
      Request({
        url,
        method: method || "GET",
        data,
        contentType,
      });
  });
  return HttpObj;
};

export default getRuquestApi;
```
