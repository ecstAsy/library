---
title: 小程序左滑删除组件封装
author: ecstAsy
date: "2022-01-04"
---

## 基本介绍

因为目前在使用 Taro 进行多端的开发，现在所有的写法都是按照 Taro 的语法封装的，如果使用原生小程序的可以
自己按照原理转换就可以。

Taro 开发文档

> https://nervjs.github.io/taro/docs/README.html

## 代码

```js
index.js：

import Taro, { Component } from '@tarojs/taro';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
import './index.scss';

/**
|--------------------------------------------------
| @ScrollTouch
| #Component
| 左滑删除组件
|--------------------------------------------------
*/

export default class ScrollTouch extends Component {

  static propTypes = {
    Scroll: PropTypes.bool
  };
  static defaultProps = {
    Scroll: false
  };

  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  handleAngle = (start, end) => {
    var _X = end.clientX - start.clientX,
      _Y = end.clientY - start.clientY;
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  }

  // 触摸开始
  handleTouchStart = e => {
    const { touches } = e;
    // @touches typeof  Array
    // touches.length  手指触摸屏幕的个数
    this.scroll = touches.length === 1;
    this.touches = e.touches;
  }

  handleTouchMove = e => {
    if (this.scroll) {
      // 滑滑动的角度
      let angle = this.handleAngle(this.touches[0], e.touches[0]);
      // 滑滑动的角度 如果 > 30 不做操作
      if (Math.abs(angle) > 30) return;
      // PosX 手指在X轴的坐标差   判断滑动方向
      let PosX = e.touches[0].pageX - this.touches[0].pageX;
      // PosX < -50  => Left  左滑
      // PosX > 50  => Right 右滑
      if (PosX < -50) {
        this.props.onLeftMove();
      } else if (PosX > 50) {
        this.props.onRightMove();
      }
    }
  }

  // 触摸结束
  handleTouchEnd = () => {
    this.scroll = false;
  }

  // 删除操作
  handleDelete = () => {
    this.props.onDelete();
  }

  render() {
    const { Scroll } = this.props;
    return (
      <View
        className={Scroll ? 'scroll-touch active' : 'scroll-touch'}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <View className='scroll-touch-content'>
          {this.props.children}
        </View>
        <View className='scroll-touch-delete' onClick={this.handleDelete}>
          <View className='scroll-touch-delete-icon'>
            取消
          </View>
        </View>
      </View>
    )
  }
}
```

index.scss:

```scss
.scroll-touch {
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  &.active {
    .scroll-touch-content,
    .scroll-touch-delete {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  .scroll-touch-content {
    width: 720px;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    -webkit-transform: translateX(150px);
    transform: translateX(150px);
    margin-left: -150px;
    margin-right: 0;
  }
  .scroll-touch-delete {
    background: #ff3b30;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    -webkit-transform: translateX(150px);
    transform: translateX(150px);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
    position: relative;
    vertical-align: middle;
    .scroll-touch-delete-icon {
      position: absolute;
      height: 100px;
      width: 100%;
      line-height: 100px;
      text-align: center;
      top: 50%;
      margin-top: -50px;
    }
  }
}
```

## 结束语

有什么不足的地方，请指正。
