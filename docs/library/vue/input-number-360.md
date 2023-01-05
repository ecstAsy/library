---
title: 360浏览器
author: ecstAsy
date: "2023-01-05"
---

#### 问题描述

**360 浏览器** **elementPluus-InputNumber** 随着鼠标滚轮滚动值会变化。

- 方案一
  在 DOM 上添加 **@mousewheel.native.prevent**

  ```html
  <el-input-number @mousewheel.native.prevent />
  ```

- 方案二
  添加自定义指令 **v-stopMousewheel**

  ```js
  import type { Directive } from "vue";
  const stopMousewheel: Directive = {
    updated: function (el: HTMLElement) {
      el.addEventListener("mousewheel", () => {
        const elem: any =
          el.tagName === "INPUT" ? el : el.querySelector("input");
        elem.blur();
      });
    },
  };
  export default stopMousewheel;
  ```

  ```html
  <el-input-number v-stopMousewheel />
  ```
