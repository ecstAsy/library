---
title: refs 自动获取 input 框焦点记录
author: ecstAsy
date: "2022-01-04"
---

### 效果图

![自动获取 input 框焦点](../../assets/inputFoucs.png)

### 实现代码

```js
componentDidMount = () => {
  // 用 ref 自动获取输入框焦点
  const { input } = this.refInput;
  input.focus();
};

<Input
  ref={(input) => {
    this.refInput = input;
  }}
  style={{ width: 300 }}
/>;
```
