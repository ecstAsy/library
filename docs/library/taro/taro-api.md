---
title: Taro 交互API封装
author: ecstAsy
date: "2022-01-04"
---

#### API 封装

```js
import Taro from "@tarojs/taro";

/**
 * 整合封装微信的原生弹窗
 * 提示、加载、工具类
 */

export default class $message {
  static isLoading = false;

  /**
   * 提示信息
   */
  static toast(title, onHide) {
    Taro.showToast({
      title: title,
      icon: "none",
      mask: true,
      duration: 1500,
    });
    // 去除结束回调函数
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /**
   * 加载提示弹窗
   * @force NavigationBarLoading
   */

  static loading(title = "加载中", force = false) {
    this.isLoading = true;
    Taro.showLoading({
      title: title,
      mask: true,
    });
    if (force) {
      Taro.showNavigationBarLoading(); //导航条加载动画
    }
  }

  /**
   * 加载完成
   */
  static loaded(force = false) {
    let duration = 0;
    if (this.isLoading) {
      this.isLoading = false;
      Taro.hideLoading();
      if (force) {
        Taro.hideNavigationBarLoading(); //导航条加载动画
      }
      duration = 500;
    }
    // 设定隐藏的动画时长为500ms,防止直接toast时出现问题
    return new Promise((resolve) => setTimeout(resolve, duration));
  }

  /**
   * 弹出提示框
   */

  static success(title, duration = 1500) {
    Taro.showToast({
      title: title,
      icon: "success",
      duration: duration,
      mask: true,
    });
    if (duration > 0) {
      return new Promise((resolve) => setTimeout(resolve, duration));
    }
  }
}
```
