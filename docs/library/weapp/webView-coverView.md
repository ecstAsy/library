<h2 align="center">Weapp WebView And CoverView</h2>

#### **WebView**

> 承载网页的容器。会自动 **铺满整个小程序页面** ，个人类型的小程序暂不支持使用。客户端 6.7.2 版本开始，navigationStyle: custom 对 web-view 组件无效

#### **CoverView**

> 覆盖在原生组件之上的文本视图。 目前原生组件均已支持同层渲染，建议使用 **view** 替代。可覆盖的原生组件包括 **map、video、canvas、camera、live-player、live-pusher**。 只支持嵌套 **cover-view**、**cover-image**，可在 **cover-view** 中使用 **button**。组件属性的长度单位默认为 **px** ，**2.4.0** 起支持传入单位( **rpx/px** )。

#### **WebView And CoverView**

这原本是不可能的事情，但是随着 **CoverView** 的限制逐渐放宽，已经可以实现在 **WebView** 里面放 **CoverView** 包裹的组件。

- **CoverView** 组件一定要在 **WebView** 渲染后渲染

- **IOS** 可以在操作中重新渲染 **CoverView** 组件， **Android** 不支持此操作

- **CoverView** 组件一定要包含在 **WebView** 标签里面 （注：首次渲染的时候必须要放进去，否则 **IOS** 、 **Android** 都不会渲染，但是在操作中重新加载其他的组件，不写在**WebView** 标签里面，可以在 **IOS** 中渲染，**Android** 根本不支持此操作。）

HTML 代码

```html
<WebView className="study-webview" src="相同域名下的H5地址">
  {show && (
    <CoverView className="study-action">
      <Button className="study-btn done" onClick={() => onCheck()}>
        学习完毕
      </Button>
      <Button className="study-btn back" onClick={() => onCheck()}>
        返回
      </Button>
    </CoverView>
  )}
</WebView>
```

JS 代码

```js
// CoverView 组件一定要在 WebView 渲染后渲染 所以设置定时器
setTimeout(() => {
  setShow(true);
}, 1000);
```

效果图

![WebView 嵌套 CoverView](../../Image/WebView-CoverView.jpg)

**_附言：_** **按照官方给出的文档说明，WebView 和 CoverView 是不可能共存的，社区也一直提出只有部分手机机型支持，还是有部分机型不支持的，使用时候请慎用！！！**
