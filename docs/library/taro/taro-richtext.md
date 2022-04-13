---
title: Taro 小程序渲染富文本内容
author: ecstAsy
date: "2022-01-04"
---

#### **RichText**

这是小程序自带的富文本渲染组件，但是对于一些特别的渲染不能很好的实现，所以改用了 **mp-html** 插件实现。

#### **mp-html**

该插件是作者用 **VUE** 框架写的，如果是用 **uni-app** 开发的话会有好一点，我是用 **Taro** 开发的，所以在使用方法上面有点差异。

- **uni-app**

  > yarn add mp-html

- **Taro**

  > 需要下载编译完的组件到项目 **components** 目录下面，在 **config** 文件里面使用下面方法引入

  ```json
  usingComponents: {
  "mp-html": "@/components/mp-html",
  },
  ```

#### **Taro** 中使用方法

> 最主要是为了实现表格功能

![Weapp Table](../../assets/taro-rich-text.png)

- **tagStyle** 设置标签的默认样式

因为内容中的 **table** 没有设置默认样式，需要添加默认样式

```json
{
  "table": "border-collapse: collapse;",
  "th": "border: 1px solid #ccc;padding: 3px 5px;text-align: left;background-color: #f1f1f1;text-align: center;background: #f1f1f1;",
  "td": "border: 1px solid #ccc;padding: 3px 5px;text-align: left;"
}
```

```js
<mp-html
  className="new-mp-html"
  content={content}
  tagStyle={{
    table: "border-collapse: collapse;",
    th: "border: 1px solid #ccc;padding: 3px 5px;text-align: left;background-color: #f1f1f1;text-align: center;background: #f1f1f1;",
    td: "border: 1px solid #ccc;padding: 3px 5px;text-align: left;",
  }}
/>
```
