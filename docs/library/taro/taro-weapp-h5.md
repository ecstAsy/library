<h2 align="center">Taro Weapp H5 实现踩坑记录</h2>

### HTML

- **CoverView、CoverImage**

  > 在 **H5** 不生效

- **Input、Textarea**

  > 如果你已经在 **Input/Textarea** 添加 **class/id** 写了 **CSS** 样式，仍需在 **CSS** 中单独写其样式

  ```scss
  &-input {
    @include wh(510px, 100%);
    padding: 0 40px;
    font-size: 28px;

    // 单独写input样式
    input {
      @include wh(510px, 100%);
      font-size: 28px;
    }
  }

  textarea {
    @include sc(28px, $font-color-regular);
    background: #eef3ff;
  }
  ```

- **Radio**

  > 小程序端直接 使用 **color** 就可以修改选择状态颜色，但是在 **h5**,就需要手动写样式覆盖，样式要写在当前组件的根下面，或者写在外面（否则覆盖不了）

  - checked 选中状态下
  - disabled 禁用状态下
  - scale 缩放大小

  ```scss
  .weui-cells_checkbox {
    scale: 0.9;
    line-height: 40px;
    text-indent: -3px;
    margin-right: 5px;

    .weui-check:checked + .weui-icon-checked {
      &::before {
        color: $theme-color !important;
        scale: 0.85;
      }
    }

    .weui-check:disabled + .weui-icon-checked {
      &::before {
        color: #c0c4cc !important;
        scale: 0.85;
      }
    }
    // 多选框的大小
    .taro-checkbox_checked {
      top: 0 !important;
      scale: 0.85;
    }
  }
  ```

- **Video**

  - IOS 全屏问题

    > **webkit-playsinline/playsinline**.

    ```html
    <video
      className="video"
      webkit-playsinline
      playsinline
      autoplay="{true}"
      enable-auto-rotation
      src="{sourceUrl}"
      title="{title}"
    />
    ```

    > 需要给 **Video** 设置明确的 **width**,**height**.

    ```scss
    .video,
    video {
      @include wh(750px, 420px);
    }
    ```

### API

- 很多 API 都是支持的，除了小程序独有的 API
  ```js
  if (process.env.TARO_ENV === "weapp") {
    // todo
  } else if (process.env.TARO_ENV === "h5") {
    // todo
  }
  ```

### Css

- 如果想实现一套代码在 **WEAPP** & **H5** 同时运行，在书写 **CSS** 的时候一定要把 每个元素都写上 **class/id** 名称，写样式的时候最好指定到 **类名/ID**,不要把样式写在通用元素上（: **View** , **Text** ...）, 在 H5 端编译的时候会被转换为 **WEB** 元素，或者被 **Taro** 编译为自己的元素。

- **Flex 布局**
  - 如果是 **View** 块级元素
  ```css
  display: inline-block;
  ```

### Component

- 方法一

> 写组件的时候可以根据不同端去写不同的组件，根据 **Taro** ，的编译规则，只要你把对应平台的简称写进去就好了

    ├── src
    │   ├── components
    │   │   ├──MyConponent             // 组件
    │   │   │   ├──index.h5.js         // 在 H5 情况下的组件
    │   │   │   ├──index.weapp.js      // 在 Weapp 情况下组件
    │   │   │   ├──index.scss          // 通用样式

- 方法二

> 在页面里面使用环境变量来加载组件

```js
{
  process.env.TARO_ENV === "weapp" && <MyWeappComponent />;
}

{
  process.env.TARO_ENV === "weapp" && <MyH5Component />;
}
```
