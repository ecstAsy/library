---
title: Taro 项目配置 Dva
author: ecstAsy
date: "2022-01-04"
---

### 准备工作

###### _Taro-cli_ 工具安装

使用 npm 安装 cli

> npm install -g @tarojs/cli

使用 yarn 安装 cli

> yarn global add @tarojs/cli

使用 cnpm 安装 cli

> cnpm install -g @tarojs/cli

###### 创建项目模板

> taro init project-name

一定要选择 **_默认模板_**

### 安装配置文件

###### 安装 **dva**

> cnpm install --save dva-core dva-loading

- dva-core : 封装了 redux 和 redux-saga 的一个插件
- dva-loading : 管理页面的 loading 状态

###### 安装@tarojs/redux

> cnpm install --save redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger

### 开始配置

- ###### 在 _page_ 文件下面新建 _utils_ 文件夹;

- ###### 在 _utils_ 文件下新建 _dva.js_;

**_dva.js_**

```js
import Taro from "@tarojs/taro";
import { create } from "dva-core";
import { createLogger } from "redux-logger";
import createLoading from "dva-loading";

let app, store, dispatch, registered;

function createApp(options) {
  // redux日志
  opt.onAction = [createLogger()];

  app = create(options);

  app.use(createLoading({}));

  if (!global.registered) options.models.forEach((model) => app.model(model));

  registered = true;

  app.start();

  store = app._store;

  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;

  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
```

- ###### 修改 _app.js_;

**_app.js_**

```js
import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import dva from "./utils/dva";
import models from "./models";
import Home from "./pages/home";
import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});

const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: ["pages/home/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black",
    },
    tabBar: {
      color: "#888888",
      selectedColor: "#D92638",
      backgroundColor: "#fff",
      borderStyle: "black",
    },
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
```

- ###### 新建 _models_ 文件夹 新建 _index.js_ _common.js_

**_common.js_**

```js
import Taro from "@tarojs/taro";
import { getTime } from "../utils/Public";

const getSystemInfo = () => {
  let SystemInfo = Taro.getSystemInfoSync();
  SystemInfo.windowHeight = SystemInfo.windowHeight + 48;
  SystemInfo["RPX"] = SystemInfo.windowWidth / 375;
  let res = SystemInfo.model.indexOf("iPhone X");
  SystemInfo["mobile"] = res === 0 ? "IPhoneX" : "IPhoneY";
  return SystemInfo;
};

export default {
  namespace: "common",
  state: {
    SystemInfo: getSystemInfo(),
    nowTime: getTime(),
  },
  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
```

**_index.js_**

```js
import common from "./common";

export default [common];
```
