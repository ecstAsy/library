---
title: Vue 零碎知识点
author: ecstAsy
date: "2022-02-07"
---

#### **1. Vue 优点**

- 轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十 kb
- 简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习
- 双向数据绑定：保留了 angular 的特点，在数据操作方面更为简单
- 组件化：保留了 react 的优点，实现了 html 的封装和重用，在构建单页面应用方面有着独特的优势
- 视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作
- 虚拟 DOM：dom 操作是非常耗费性能的， 不再使用原生的 dom 操作节点，极大解放 dom 操作，但具体操作的还是 dom 不过是换了另一种方式
- 运行速度更快:相比较与 react 而言，同样是操作虚拟 dom，就性能而言，vue 存在很大的优势

#### **2. Vue 响应式实现原理**

- 接收 **data** 对象并监听 **data** 变化，遍历此对象所有的 **property** ,并使用 **Object.defineProperty()** 把这些 **property** 全部转为 **getter/setter** 在内部 **getter/setter** 让 Vue 能够追踪依赖在 property 被访问和修改时通知变更
- 每一个 **Component** 实例都对应一个 **watcher** 实例，它会在组件渲染的过程中把“接触”过的数据 **property** 记录为依赖。之后当依赖项的 **setter** 触发时，会通知 **watcher**，从而使它关联的组件重新渲染

![自动获取 input 框焦点](../../assets/data.png)

#### **3. Vue 数据双向绑定实现**

- **Vue** 双向数据绑定是通过 数据劫持 结合 发布订阅模式的方式来实现的， 也就是说数据和视图同步，数据发生变化，视图跟着变化，视图变化，数据也随之发生改变；
- 核心：关于 **Vue** 双向数据绑定，其核心是 **Object.defineProperty()** 方法

#### **4. Vue 的两个核心点**

- **数据驱动:** **ViewModel** 保证数据和视图的一致性
- **组件系统:** 应用类 **UI** 可以看作全部是由组件树构成

#### **5. Vue 常见指令**

- **v-show/v-if:** 控制节点的显示隐藏
- **v-for:** 数据遍历
- **v-model:** 双向数据绑定
- **v-on:click/@click:** 事件绑定 **v-on** 可以一次绑定多个事件
- **v-bind/:info:** 数据绑定
- **v-once:** 只绑定一次

#### **6. Vue 数据传递**

- 父组件向子组件传递：**props**
- 子组件向父组件传递：**$emit**

#### **7. v-show 和 v-if 区别**

- 共同点：都是控制元素的显示和隐藏
- 不同点：本质方法不同
- **v-show**: 通过 **CSS** 中的 **display** 是否为 **none**，来控制元素的显示与隐藏，且只会编译一次
- **v-if**: 动态的向 **DOM** 树添加或删除 **DOM** 元素，如果初始值设置为 **false** ,则不会编译。且不停的销毁和创建 **DOM** 元素，比较消耗性能
- 如果需要频繁的切换某节点，使用 **v-show** 更优（初始开销大，切换开销小），如果不需要频繁切换某节点，则使用 **v-if** 更优（初始开销小，切换开销大）

#### **8. CSS 只在当前组件生效**

在组件的 **style** 前面添加 **scoped**

#### **9. keep-alive 作用**

**keep-alive** 是 **Vue** 的内置组件，可以使被包含的组件保留状态，避免被重新渲染

#### **10. 如何获取 DOM**

给节点添加 **ref=domName** 属性，通过 **this.$refs.domName** 获取

#### **11. Key 的作用**

每个节点的唯一标识，**Diff** 算法就可以正确识别此节点，高效的更新虚拟 **DOM**

#### **12. v-model 的使用**

用于表单数据的双向绑定，其实就是一个语法糖，实际上就是 **v-bind** 指令绑定一个 **value** 属性，**v-on** 指令给当前元素绑定 **input** 事件

#### **13. computed 和 watch 使用场景**

- **computed:** 当一个属性受多个属性影响的时候 🌰：**购物车商品结算的时候**
- **watch:** 当一个属性影响多个属性的时候 🌰：**搜索数据**

#### **14. $nextTick 的使用**

当你修改了 **data** 的值然后马上获取这个 **DOM** 元素的值，是不能获取到更新后的值，你需要使用 **$nextTick** 这个回调，让修改后的 **data** 值渲染更新到 **DOM** 元素之后在获取，才能成功

#### **15. data 为什么必须是一个函数**

因为 **JavaScript** 的特性所导致，在 **Component** 中，**data** 必须以函数的形式存在，不可以是对象。 组件中的 **data**写成一个函数，数据以函数返回值的形式定义，这样每次复用组件的时候，都会返回一份新的 **data** ，相当于每个组件实例都有自己私有的数据空间，它们只负责各自维护的数据，不会造成混乱。而单纯的写成对象形式，就是所有的组件实例共用了一个 **data** ，这样改一个全都改了。

#### **16. v-if 和 v-for 的优先级**

当 **v-if** 与 **v-for** 一起使用时，**v-for** 具有比 **v-if** 更高的优先级，这意味着 **v-if** 将分别重复运行于每个 **v-for** 循环中。所以，不推荐 **v-if** 和 **v-for** 同时使用。 如果 **v-if** 和 **v-for** 一起用的话，**Vue** 中的的会自动提示 **v-if** 应该放到外层去
Vue 3.0 对 **v-if** 和 **v-for** 做了权重比较，可以混合使用

#### **17. vue 常用的修饰符**

- **.stop :** 等同于 **JavaScript** 中的 **event.stopPropagation()** ,防止事件冒泡
- **.prevent :** 等同于 **JavaScript** 中的 **event.preventDefault()** ,防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）
- **.capture :** 冒泡事件的方向相反，事件捕获由外到内
- **.self :** 只触发自己范围内的事件，不包含子元素
- **.once :** 只会触发一次
- **.keyup :** 按键修饰符
- **.passive :** 滚动事件的默认行为 (即滚动行为) 将会立即触发(提升移动端性能)

#### **18. vue-router 跳转和 location.href 的区别**

- **location.href** 跳转简单方便，但是刷新了页面
- **history.pushState(’/url’)** 无刷新页面，静态跳转
- **router.push('/url')** 使用 **diff** 算法，实现按需加载，减少 **DOM** 消耗
- 在 **history** 下，**history.pushState(’/url’)** 和 **router.push('/url')** 是一样的，因为 **vue-router** 就是用了**history.pushState()**

#### **19. vue-router 如何定义动态路由，怎么获取参数**

- 在 **router** 目录下的 **index.js** 文件中，对 **path** 属性加上 **/:id**
- 使用 **router** 对象的 **params.id**

#### **20. assets 和 static 的区别**

- 两者都是存放静态资源文件
  - 图片
  - 字体图标
  - 样式文件
- **assets:** 存放的静态资源在进行 **npm run build** 打包时会将 **assets** 中存放的文件进行打包压缩，代码格式化，并且压缩后的文件都会放在 **static** 文件中跟随 **index.html** 上传至服务器
- **static:** 存放的静态资源不会走打包压缩格式化流程，而是直接上传至服务器,对比 **assets** 文件，提价较大，上传至服务器会占据更大的空间
- **建议：** 项目中 **template** 的 **css、js** 文件最好都放到 **assets** 中，进行压缩和格式化，减少体积。而对于第三方的资源文件或者 **iconfont** 这些都是经过压缩处理过的，可以直接放在 **static** 中

#### **21. slot 的作用**

**slot** 插槽，它的作用即父组件内放了一些 **DOM** , 这些 **DOM** 是显示还是不显示，在哪里显示，如何显示，这就是 **slot** 的分发作用

#### **22. router-link 在电脑上有用，在安卓上没反应**

**Vue** 路由在 **Android** 机上有问题，**babel** 问题，安装 **babel polypill** 插件解决

#### **23. Vue2 中注册在 router-link 上事件无效**

使用 **@click.native** 原因：**router-link** 会阻止 **click** 事件，**.native** 指直接监听一个原生事件

#### **24. vue-loader 作用**

它是 **webpack** 的一个 **loader** ，用于处理 **.vue** 文件，将 **template/style/js** 转换成 js 模块

- js => es6/7/8/9
- style => sass/scss/less
- template => html

#### **25. vue 项目是打包了一个 js 文件，一个 css 文件，还是有多个文件**

根据 **vue-cli** 脚手架规范，一个 **js** 文件，一个 **CSS** 文件

#### **26. vuex 有哪几种属性**

- state
- getter
- mutation
- action
- module

#### **27. vuex 中的 store 特性**

- **vuex** 就像是一个仓库，仓库里面放了很多对象。其中 **state** 就是数据源存放地，对应 **vue** 里面的 **data**
- **state** 里面存放的数据源是响应式的，**vue** 组件从 **store** 读取数据，若是 **store** 中的数据发生变化，依赖这组数据的组件也会发生更新
- 它通过 **mapState** 把全局的 **state** 和 **getter** 映射到当前组件的 **computed** 中

#### **28. vuex 中的 getter 的特性**

- **getter** 可以对 **state** 进行计算操作，它就是 **store** 的计算属性
- 虽然在组件内也可以做计算属性，但是 **getters** 可以在多个组件内复用
- 如果一个状态只在一个组件内使用，是可以不用 **getters**

#### **29. vuex 中的 mutation 的特性**

**action** 类似于 **mutation** ,但是 **action** 提交的是 **mutation** , 而不是直接变更状态， **action** 可以包含任意异步操作

#### **30. vue 中的 ajax 请求是应该写在组件还是 action 中**

如果请求的数据不被其他组件公用，仅仅在组件内部使用，既不需要放在 **vuex** 的 **state** 中。 如果请求的请求的数据被多个组件公用的话，请将请求放在 **action** 中，方便数据复用，并包裹成 **Promise** 返回

#### **31. 为什么要使用 vuex**

- 提高代码的可维护性，方便修改数据，使用 **vuex** 修改数据时只用修改一处，反之你需要修改三处
- 提升代码的可读性，因为一个组件里面的数据你看不出是从哪里来的
- 降低耦合度，本来 **Vue** 的 **Component** 就是为了减少耦合，如果不用 **Vuex** 会大量的上传派发，会让耦合度大大增加

#### **32. vue 中有处理过内存泄露问题吗**

- 意外的全局变量

  函数中意外的定义了全局变量，每次执行函数都会生成该变量，且不会随着函数执行结束而释放。

- 未清除的定时器

  定时器没有清除，它内部引用的变量，不会被释放。

- 脱离 DOM 的元素引用

  一个 DOM 容器删除之后，变量未置为 null ，则其内部的 DOM 元素则不会释放。

- 持续绑定的事件

  函数中 `addEventListener` 绑定事件，函数多次执行，绑定便会产生多次，产生内存泄漏。

- 绑在 `EventBus` 的事件没有解绑
- 闭包引起内存泄漏

  比如事件处理回调，导致 DOM 对象和脚本中对象双向引用。

- 使用第三方库创建，导致 DOM 对象和脚本对象双向引用
- 单页应用时，页面路由切换，内存未释放

#### **33. Eventloop 事件循环机制**

- 将 **执行栈** 最开始的同步代码（宏任务）执行完成。
- 检查是否有微任务，如有则执行所有的微任务。
- 取出 **任务队列** 中事件所对应的回调函数，（宏任务）进入 **执行栈** 并执行完成。
- 再检查是否有微任务，如有则执行所有的微任务。
- 主线程不断重复上面的两个（3，4）步骤

**宏任务**：`同步代码`，`setTimeout`，`setInterval`，`requestAnimationFrame`，`I/O`，`UI rendering`
**微任务**：`process.nextTick`，`promise callback`，`MutationObserver`

#### **34. Vue 的 axios**

`axios` 是一个基于 `Promise` 用于浏览器和 `nodejs` 的 `HTTP` 客户端，它本身具有以下特征：

- 从浏览器中创建 `XMLHttpRequest`
- 从 `node.js` 发出 `http` 请求
- 支持 `Promise API`
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换 `JSON` 数据
- 客户端支持防止 `CSRF/XSRF`

#### **35. vue-router 的两种模式**

- `hash` 模式
  - 使用 `URL` 的 `hash` 来模拟一个完整的 URL,于是当 URL 改变的时候,页面不会重新加载,也就是单页应用
  - 当 `#` 后面的 hash 发生变化时,不会导致浏览器向服务器发出请求,浏览器不发出请求就不会刷新页面,并且会触发 `hasChange` 这个事件,通过监听 hash 值的变化来实现更新页面部分内容的操作
- `history` 模式: 主要使用 `HTML5` 的 **_pushState()_** 和 **_replaceState()_** 这两个 api 来实现的
  - **_pushState()_** 可以改变 url 地址且不会发送请求
  - **_replaceState()_** 可以读取历史记录栈,还可以对浏览器记录进行修改
- 前面的 `hashchange`，你只能改变#后面的 url 片段。而 `pushState` 设置的新 URL 可以是与当前 URL 同源的任意 URL。
  history 模式则会将 URL 修改得就和正常请求后端的 URL 一样,如后端没有配置对应/user/id 的路由处理，则会返回 404 错误
