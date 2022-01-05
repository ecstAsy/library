---
title: Antd-Vue-Pro 使用汇总
author: ecstAsy
date: "2022-01-04"
---

### BasicLayout 宽度自定义

![BasicLayout文档截图](../../assets/BasicLayout.png)

```js
<pro-layout
 :menus="menus"
 :collapsed="collapsed"
 :mediaQuery="query"
 :isMobile="isMobile"
 :handleMediaQuery="handleMediaQuery"
 :handleCollapse="handleCollapse"
 :i18nRender="i18nRender"
 v-bind="settings"
 :sider-width="200"
 >
```
