---
title: Web 零碎知识点
author: ecstAsy
date: "2022-02-09"
---

#### **闭包（概念，作用，场景）**

> - 概念：闭包就是能够读取其他函数内部变量的函数。例如在 javascript 中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成“定义在一个函数内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。
> - 作用：

#### **函数节流**

> - 概念： 在指定的时间内只会执行一次。
> - 原理： 函数节流就是通过闭包保存一个标识 **(canDo = true)**，在函数开始时候判断这个标识是否为 **true** ,如果是 **true** 的话就继续执行函数，否则就 **return** 出去。判断完这个标识后，立即把这个 标识改为 **false** ，然后把外部传入的函数执行包在 **setTimeout** 中，最后在 **setTimeout** 执行完毕后，再把标识改为 **true** ，表示可以执行下一次任务了，在 **setTimeout** 没有执行完的时候，标识一直为 **false** ，在函数开头的时候会被 **return** 出去
> - 代码：
>
> ```js
> function throttle(fn, interval = 300) {
>   let canDo = true;
>   return () => {
>     if (!canDo) return;
>     setTimeout(() => {
>       fn.apply(this, arguments);
>       canDo = true;
>     }, interval);
>   };
> }
> ```
>
> - 场景：搜索引擎

#### **函数防抖**

> - 概念：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
> - 原理：函数防抖就是通过闭包保存一个标记来保存 **setTimeout** 返回的值，每当用户输入的时候把前一个 **setTimeout clear** 掉，然后又创建一个新的 **setTimeout**，这样就能保证输入字符后的 **interval** 间隔内如果还有字符输入的话，就不会执行 fn 函数了。
> - 代码：
>
> ```js
> function debounce(fn, interval = 300) {
>   let timeout = null;
>   return function () {
>     clearTimeout(timeout);
>     timeout = setTimeout(() => {
>       fn.apply(this, arguments);
>     }, interval);
>   };
> }
> ```
>
> - 场景： 表单提交，付款

#### **Promise setTimeOut**