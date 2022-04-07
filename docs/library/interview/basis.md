---
title: Web 基础知识点
author: ecstAsy
date: "2022-04-07"
---

#### **1. css3 有哪些新特性**

|    特性    |                                例子                                 |
| :--------: | :-----------------------------------------------------------------: |
| 新增选择器 |                    p:nth-child(n){ color: red }                     |
| 弹性盒模型 |                           display: flex;                            |
|  多列布局  |                          column-count: 5;                           |
|  媒体查询  |        @media (max-width: 480px) {.box: {column-count: 1;}}         |
| 个性化字体 |      @font-face{font-family:BorderWeb;src:url(BORDERW0.eot);}       |
| 颜色透明度 |                    color: rgba(255, 0, 0, 0.75)                     |
|    圆角    |                         border-radius: 5px;                         |
|    渐变    |            background:linear-gradient(red, green, blue);            |
|    阴影    |            box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);            |
|    倒影    |                       box-reflect: below 2px;                       |
|  文字装饰  |                       text-stroke-color: red;                       |
|  文字溢出  |                       text-overflow:ellipsis;                       |
|  背景效果  |                    background-size: 100px 100px;                    |
|  边框效果  |                 border-image:url(bt_blue.png) 0 10;                 |
|    旋转    |                      transform: rotate(20deg);                      |
|    倾斜    |                  transform: skew(150deg, -10deg);                   |
|    位移    |                  transform:translate(20px, 20px);                   |
|    缩放    |                        transform: scale(.5);                        |
|  平滑过渡  |                  transition: all .3s ease-in .1s;                   |
|    动画    | @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s; |

#### **2. :first-child 与 :first-of-type 的区别**

```html
<div>
  <p>第一个子元素</p>
  <h1>第二个子元素</h1>
  <span>第三个子元素</span>
  <span>第四个子元素</span>
</div>
```

**:first-child 选择器是 css2 中定义的选择器，从字面意思上来看也很好理解，就是第一个子元素**<br/>
**p:first-child** 匹配到的是 p 元素,因为 p 元素是 div 的第一个子元素；<br/>
**h1:first-child** 匹配不到任何元素，因为在这里 h1 是 div 的第二个子元素，而不是第一个；<br/>
**span:first-child** 匹配不到任何元素，因为在这里两个 span 元素都不是 div 的第一个子元素；

**:first-of-type 选择器是 css3 中定义的选择器，某父元素下相同类型子元素中的第一个**<br/>
**p:first-of-type** 匹配到的是 p 元素,因为 p 是 div 的所有类型为 p 的子元素中的第一个；<br/>
**h1:first-of-type** 匹配到的是 h1 元素，因为 h1 是 div 的所有类型为 h1 的子元素中的第一个；<br/>
**span:first-of-type** 匹配到的是第三个子元素 span。这里 div 有两个为 span 的子元素，匹配到的是它们中的第一个。

**结论：**
**:first-child** 匹配的是某父元素的第一个子元素，可以说是结构上的第一个子元素。
**:first-of-type** 匹配的是某父元素下相同类型子元素中的第一个，比如 **p:first-of-type**，就是指所有类型为 p 的子元素中的第一个。这里不再限制是第一个子元素了，只要是该类型元素的第一个就行了。
同样类型的选择器 **:last-chil**d 和 **:last-of-type、:nth-child(n)** 和 **:nth-of-type(n**) 也可以这样去理解。

#### **3. 解决使用 transform:translate 属性时会出现闪烁现象**

- 开启 GPU 硬件加速模式，使用 GPU 代替 CPU 渲染动画（在安卓系统中有时会有莫名其妙的 BUG，建议慎重）

```css
.tran {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0); /* Other transform properties here */
}
```

- 隐藏转换的元素的背面

```css
.tran {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000; /* Other transform properties here */
}
```

- 使被转换的元素的子元素保留其 3D 转换

```css
.tran {
  -webkit-transform-style: preserve-3d;
}
```

#### **4. 如何使用@keyframes 使 div 元素移动 200 像素**

```css
div {
  width: 100px;
  height: 50px;
  background: red;
  animation: move 3s;
}
@keyframes move {
  from {
    margin-left: 0px;
  }
  to {
    margin-left: 200px;
  }
}
```

#### **5. 如何实现文本换行**

> **word-wrap** 属性
>
> - **normal**，只在允许的断字点换行（浏览器保持默认处理）
> - **break-word**，在长单词或 URL 地址内部进行换行。

#### **6. 超出文本省略（超出文本长度用 ... 代替）**

- **text-overflow: ellipsis;**

```css
div {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
```

#### **7. css3 动画如何在动作结束时保持状态不变**

> - **animation-fill-mode**属性
>
> - **none**，不改变默认行为。
> - **forwards**，当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）
> - **backwards**，在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
> - **both**，向前和向后填充模式都可以应用。

#### **8. 实现某 div 元素以每秒 50px 的速度左移 100px**

- **jQuery**

```js
$('div').animate({ 'left': 100}, 2000）;
```

- **Javascript + CSS**

```css
div {
  transition: all 2s linear;
}
```

```js
const div = document('element');
div.style.left =(div.offsetLeft + 100)+'px'；
```

#### **9. 介绍 box-sizing 属性**

- **content-box(默认值)** <br/>
  标准盒子模型。 width 与 height 只包括内容的宽和高， 不包括边框（border），内边距（padding），外边距（margin）。<br/>
  **注意**: 内边距、边框和外边距都在这个盒子的外部。 比如说，.box {width: 350px; border: 10px solid black;} 在浏览器中的渲染的实际宽度将是 370px。
  > 尺寸计算公式：<br/>
  > width = 内容的宽度<br/>
  > height = 内容的高度<br/>
  > 宽度和高度的计算值都不包含内容的边框（border）和内边距（padding）。
- **border-box**
  width 和 height 属性包括内容，内边距和边框，但不包括外边距。这是当文档处于 Quirks 模式 时 Internet Explorer 使用的盒模型。<br/>
  **注意**: 填充和边框将在盒子内 , 例如, .box {width: 350px; border: 10px solid black;} 导致在浏览器中呈现的宽度为 350px 的盒子。内容框不能为负，并且被分配到 0，使得不可能使用 border-box 使元素消失。
  > 尺寸计算公式：<br/>
  > width = border + padding + 内容的宽度<br/>
  > height = border + padding + 内容的高度

#### **10. 如何实现把文本分隔为 4 列并使两列之间间隔 30 像素**

- **column-count** 多列布局
- **column-gap** 规定列之间的间隔

```css
div {
  width: 600px;
  -moz-column-count: 4;
  column-count: 4;
  -moz-column-gap: 40px;
  -webkit-column-gap: 40px;
  column-gap: 40px;
}
```

#### **11. background-clip 和 background-orgin 的区别**

- **background-clip** 设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。

```css
div {
  background-clip: padding-box | border-box | content-box;
}
```

![background-clip](../../assets/background-clip.png)

- **background-origin** 规定 **background-position** 属性相对于什么位置来定位。

```css
div {
  background-origin: padding-box | border-box | content-box;
}
```

![background-origin](../../assets/background-origin.png)

#### **12. css3 中 transition 属性值以及含义**

- **transition**
  - **transition-property**，哪个属性需要实现过渡
  - **transition-duration**，完成过渡效果需要多少秒/毫秒
  - **transition-timing-function**，速度效果的运动曲线，如 **linear | ease-in | ease | ease-out | ease-in-out | cube-bezier**。
  - **transition-delay**，规定过渡开始前的延迟时间。

#### **13. 当元素不面向屏幕时其可见性如何定义**

```css
div {
  backface-visibility: visible | hidden;
}
```

#### **14. 如何实现 css3 倒影**

- **-webkit-box-reflect** 设置方向、距离 **below | above | left | right**

```css
div {
  height: 144px;
  width: 144px;
  background: url(img url);
  -webkit-box-reflect: right 10px;
}
```

![reflect](../../assets/reflect.png)

#### **15. css3 实现背景颜色线性渐变**

```css
div {
  width: 200px;
  height: 100px;
  background-image: linear-gradient(to left, red, green 50%, blue);
}
```

![gradient](../../assets/gradient.png)

#### **16. 为盒子添加蒙版**
