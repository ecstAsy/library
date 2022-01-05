---
title: Taro 请求模板
author: ecstAsy
date: "2022-01-04"
---

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

```
import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from './config';

export default (options = { method: 'GET', data: {} }) => {
  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...options.data
    },
    header: {
      'Content-Type': options.contentType || 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`, res.data);
      }
      if (data.code || data.statusCode) {
        if (data.code) {
          data.statusCode = String(data.code);
        }
        if (data.statusCode !== '200') {
          Taro.showToast({
            title: `网络错误！`,
            icon: 'none',
            mask: true,
          });
        }
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}

```

- config.js

```
// 配置请求相关信息  域名
const noConsole = true;
const baseUrl = 'https://your-host-port/';

export {
  baseUrl,
  noConsole
}
```

- api.js

```
const APIV = '/proxy';  // 代理

const api = {
  user: {
    login: `${APIV}/api/login`
  }
}

module.exports = api;
```

- index.js

```
import Request from './request';
import api from './api';

export {
  Request,
  api
}
```
