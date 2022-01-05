---
title: React之Context
author: ecstAsy
date: "2022-01-04"
---

## Context

在 React 应用中，数据是通过 props 自上而下（父组件到子组件）传递的，但这对一些嵌套层数很多的组件来说，
数据的传递是很繁琐的，不出 BUG 还好，如果出现 BUG，我们需要从最内层组件开始一层一层的排除问题所在，对于代码
维护以及可读性来说是很大的挑战。

Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
它提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

## 简单例子

**_App.js_**

```js
import React from "react";
import Screen from "./Screen";

/**
|--------------------------------------------------
| @createContext
| 创建一个上下文的容器 生成一个 Context 对象。
| @Provider
| 生产者  生产共享数据的地方
| @Consumer
| 消费者  专门消费（使用）共享数据的地方
|--------------------------------------------------
*/

export const MyContext = React.createContext({
  name: "ddd",
  click: () => console.log("33"),
});

class App extends React.Component {
  state = {
    name: "点我啊！",
    num: 0,
    click: () => {
      this.setState({
        name: "你真点我啊？",
        num: this.state.num + 1,
      });
    },
  };
  render() {
    return (
      <MyContext.Provider value={this.state}>
        <Screen />
      </MyContext.Provider>
    );
  }
}

export default App;
```

**_Screen.js_**

```js
import React from "react";
import { Button } from "antd";
import { MyContext } from "./App";

const Toggle = () => {
  return (
    <MyContext.Consumer>
      {({ name, click }) => <Button onClick={click}>{name}</Button>}
    </MyContext.Consumer>
  );
};

export default Toggle;
```

**_Toggle.js_**

```js
import React from "react";
import { Button } from "antd";
import { MyContext } from "./App";

const Toggle = () => {
  return (
    <MyContext.Consumer>
      {({ name, click }) => <Button onClick={click}>{name}</Button>}
    </MyContext.Consumer>
  );
};

export default Toggle;
```

## 消费多个 Context

**_App.js_**

```js
import React from "react";
import Screen from "./Screen";

/**
|--------------------------------------------------
| @createContext
| 创建一个上下文的容器 生成一个 Context 对象。
| @Provider
| 生产者  生产共享数据的地方
| @Consumer
| 消费者  专门消费（使用）共享数据的地方
|--------------------------------------------------
*/

export const MyContext = React.createContext({
  name: "ddd",
  click: () => console.log("33"),
});
export const MyTheme = React.createContext("#1DA57A");

class App extends React.Component {
  state = {
    name: "点我啊！",
    num: 0,
    click: () => {
      this.setState({
        name: "你真点我啊？",
        num: this.state.num + 1,
      });
    },
  };
  render() {
    return (
      <MyContext.Provider value={this.state}>
        <MyTheme.Provider value={{ theme: "primary" }}>
          <Screen />
        </MyTheme.Provider>
      </MyContext.Provider>
    );
  }
}

export default App;
```

**_Screen.js_**

```js
import React from "react";
import { Button } from "antd";
import { MyContext } from "./App";

const Toggle = () => {
  return (
    <MyContext.Consumer>
      {({ name, click }) => <Button onClick={click}>{name}</Button>}
    </MyContext.Consumer>
  );
};

export default Toggle;
```

**_Toggle.js_**

```js
import React from "react";
import { Button } from "antd";
import { MyContext, MyTheme } from "./App";

const Toggle = () => {
  return (
    <MyContext.Consumer>
      {({ name, click }) => (
        <MyTheme.Consumer>
          {({ theme }) => (
            <Button onClick={click} type={theme}>
              {name}
            </Button>
          )}
        </MyTheme.Consumer>
      )}
    </MyContext.Consumer>
  );
};

export default Toggle;
```

如果多个 Context 有共享的数据，最好能合并到一起。

更多关于 Context 的介绍，请点击[React-Context 中文文档](https://react.docschina.org/docs/context.html)查看.
