---
title: Vue 自动化全局注册组件
author: ecstAsy
date: "2022-01-04"
---

> src 目录下新建 components 文件夹，里面写入你的全局组件，并新建 index.js 文件

#### Vue2.x + webpack

- **require.context**

**index.js**

```js
const components = require.context("@/components", true, /\.vue$/);

let COMPONENTS = [];
components.keys().forEach((fileName) => {
  const commonComponent = components(fileName);
  COMPONENTS.push(commonComponent.default);
});

export default COMPONENTS;
```

**main.js**

```js
import components from "./components";

app.use(components);
```

#### Vue3.x + vite + ts

- **import.meta.glob 为过动态导入**
  > import.meta.glob() 参数 不能使用别名 一定要相对路径
- **import.meta.globEager 为直接引入**

**index.ts**

```ts
import { defineAsyncComponent, App } from "vue";

const fiels = import.meta.glob("/src/components/*/index.vue");
const fileNames = Object.keys(fiels);

export default {
  install(app: App<Element>) {
    fileNames.map((item) => {
      const cname = item.split("/")[3];
      app.component(cname, defineAsyncComponent(fiels[item]));
    });
  },
};
```

**main.ts**

```ts
import components from "@/components";

app.use(components);
```
