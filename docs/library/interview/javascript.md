---
title: 前端 javascript
author: ecstAsy
date: "2022-04-12"
---

#### **1. this 的指向问题**

[this 指向文摘](../../library/javascript/js-this.md)

#### **2. JavaScript 有哪些垃圾回收机制？**

- 标记清除（ mark and sweep）
  这是 JavaScript 最常见的垃圾回收方式。当变量进入执行环境的时候，比如在函数中声明一个变量，垃圾回收器将其标记为“进入环境”。当变量离开环境的时候（函数执行结束），将其标记为“离开环境”。垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量，以及被环境中变量所引用的变量（闭包）的标记。在完成这些之后仍然存在的标记就是要删除的变量。
- 引用计数（ reference counting）
  在低版本的 E 中经常会发生内存泄漏，很多时候就是因为它采用引用计数的方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数。当声明了一个变量并将个引用类型赋值给该变量的时候，这个值的引用次数就加 1.如果该变量的值变成了另外一个，则这个值的引用次数减 1.当这个值的引用次数变为 0 的时候，说明没有变量在使用，这个值没法被访问。因此，可以将它占用的空间回收，这样垃圾回收器会在运行的时候清理引用次数为 0 的值占用的空间在正中虽然 JavaScript 对象通过标记清除的方式进行垃圾回收，但是 BOM 与 DOM 对象是用引用计数的方式回收垃圾的。 也就是说，只要涉及 BOM 和 DOM，就会出现循环引用问题

#### **3. 列举几种类型的 DOM 节点**

| 节点          | 解释                                              |
| :------------ | :------------------------------------------------ |
| **Document**  | 整个文档是一个文档（ **Document** ）节点          |
| **Element**   | 每个 HTML 标签是一个元素（ **Element** ）节点     |
| **Attribute** | 每一个 HTML 属性是一个属性（ **Attribute** ）节点 |
| **Text**      | 包含在 HTML 元素中的文本是文本（ **Text** ）节点  |

#### **4. 谈谈 script 标签中 defer 和 async 属性的区别**

- **defer**属性规定是否延迟执行脚本，直到页面加载为止， **async** 属性规定脚本一旦可用，就异步执行。
- **defer** 并行加载 **JavaScript** 文件，会按照页面上 **script** 标签的顺序执行， **async** 并行加载 **JavaScript** 文件，下载完成立即执行，不会按照页面上 **script** 标签的顺序执行。

#### **5. 闭包**

使用闭包主要是为了设计私有的方法和变量。

- 闭包的优点是可以避免全局变量的污染；
- 缺点是闭包会常驻内存，增加内存使用量，使用不当很容易造成内存泄漏。在 **JavaScript** 中，函数即闭包，只有函数才会产生作用域。

闭包有 3 个特性

- 函数嵌套函数
- 在函数内部可以引用外部的参数和变量
- 参数和变量不会以垃圾回收机制回收

  **注：** [闭包](../../library/javascript/js-closure.md)

#### **6. 解释一下 unshift() push() shift() pop()方法**

- **unshift()** 在数组前面添加元素

```js
const arr = ["Lily"];
arr.unshift("Tom", "Jane");
console.log(arr); // ['Tom', 'Jane', 'Lily']
```

- **push()** 在数据后面添加元素

```js
const arr = ["Lily"];
arr.push("Tom", "Jane");
console.log(arr); // ['Lily', 'Tom', 'Jane']
```

- **shift()** 在数组前面删除一个元素

```js
const arr = ["Lily", "Tom", "Jane"];
arr.shift();
console.log(arr); // ['Tom', 'Jane']
```

- **pop()** 在数组后面删除一个元素

```js
const arr = ["Lily", "Tom", "Jane"];
arr.pop();
console.log(arr); // ['Lily', 'Tom']
```

#### **7. encodeURL()和 decodeURL()的作用**

- encodeURI()用于将 URL 转换为十六进制编码
- decodeURI()用于将编码的 URL 转换回正常 URL

#### **8. 为什么不建议在 JavaScript 中使用 innerHTML？**

通过 **innerHTML** 修改内容，每次都会刷新，因此很慢。在 **innerHTML** 中没有验证的机会，因此更容易在文档中插入错误代码，使网页不稳定。
缺点：

- 内容随处可见
- 不能像“追加到 **innerHTML** 一样使用
- 即使使用**+=**，如 **"innerHTML= innerhTML+'htm'"**，旧的内容仍然会被 **HTML** 替换
- 整个 **innerHTML** 内容被重新解析并构建成元素，因此它的速度要慢得多
- **innerHTML** 不提供验证，因此可能会在文档中插入具有破坏性的 HTML 并将其中断

#### **9. 如何在不支持 JavaScript 的旧浏览器中隐藏 JavaScript 代码？**

- 在< script>标签之后的代码中添加“<！--”，不带引号。
- 在< /script>标签之前添加“//-->”，代码中没有引号。
- 旧浏览器现在将 JavaScript 代码视为一个长的 HTML 注释，而支持 JavaScript 的浏览器则将"<！-"和"//-->"作为一行注释。

#### **10. 如何实现浏览器内多个标签页之间的通信？**

调用 **localstorge**、 **cookie** 等数据存储通信方式

#### **11. null 和 undefined 的区别是什么？**

- **null** 是一个表示“无”的对象，转为数值时为 0；
- **null** 用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。
- **undefined** 是一个表示“无”的原始值，转为数值时为 **NaN**。
- 当声明的变量还未初始化时，变量的默认值为 **undefined** 。

:::tip
**undefined** 表示“缺少值”，即此处应该有一个值，但是还没有定义，典型用法是如下。

- 如果变量声明了，但没有赋值，它就等于 **undefined**。
- 当调用函数时，如果没有提供应该提供的参数，该参数就等于 **undefined**。
- 如果对象没有赋值，该属性的值为 **undefined**。
- 当函数没有返回值时，默认返回 **undefined**。

**null** 表示“没有对象”，即此处不应该有值，典型用法是如下

- 作为函数的参数，表示该函数的参数不是对象。
- 作为对象原型链的终点。

:::

#### **12. new 操作符的作用是什么**

- 创建一个空对象
- 由 **this** 变量引用该对象
- 该对象继承该函数的原型（更改原型链的指向）
- 把属性和方法加入到 **this** 引用的对象中
- 新创建的对象由 **this** 引用，最后隐式地返回 **this**

```js
const obj = {};
obj.__proto__ = Base.prototype;
Base.call(obj);
```

#### **13. JavaScript 延迟加载的方式有哪些**

包括 **defer** 和 **async**、动态创建 **DOM**（创建 **script**，插入 **DOM** 中，加载完毕后回调、按需异步载入 **JavaScript**。）

#### **14. call()和 apply()的区别和作用是什么**

- 作用
  - 都是在函数执行的时候，动态改变函数的运行环境（执行上下文）。
  - **call** 和 **apply** 的第一个参数都是改变运行环境的对象
- 区别
  - **call** 从第二个参数开始，每一个参数会依次传递给调用函数；
  ```js
  func.call(funcl, var1, var2, var3);
  ```
  - **apply** 的第二个参数是数组，数组的每一个成员会依次传递给调用函数。
  ```js
  func.apply(funcl, [var1, var2, var3]);
  ```

#### **15. 哪些操作会造成内存泄漏？**

内存泄漏指不再拥有或需要任何对象（数据）之后，它们仍然存在于内存中。

- 提示：
  - 垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的唯一引用是循环的，那么该对象占用的内存立即被回收。
  - 如果 setTimeout 的第一个参数使用字符串而非函数，会引发内存泄漏闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）等会造内存泄漏。

#### **16. 列举 IE 与 firefox 的不同之处**

|         | style              | text            | 透明度滤镜                       | 事件                 | 鼠标位置          | event                | 要消除 list 的原点                            | CSS 圆角           |
| :------ | :----------------- | :-------------- | :------------------------------- | :------------------- | :---------------- | :------------------- | :-------------------------------------------- | :----------------- |
| IE      | **currentStyle**   | **innerText**   | **filter:alpha（ opacity=num）** | **attachEvent**      | **event.clientX** | **event.srcElement** | **margin：0**                                 | IE7 以下不支持圆角 |
| Firefox | **getComputStyle** | **textContent** | **-moz- opacity :num**           | **addEventListener** | **event.pageX**   | **event.target**     | **margin：0、 padding：0 和 list-style:none** | 都支持             |

#### **17. JavaScript 对象的几种创建方式**

- Object 构造函数式
- 对象字面量式
- 工厂模式
- 安全工厂模式
- 构造函数模式
- 原型模式
- 混合构造函数和原型模式
- 动态原型模式
- 寄生构造函数模式
- 稳妥构造函数模式

#### **18. 如何实现异步编程**

| 名称         | 解释                                                                                                                                                                               |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 回调函数     | **优点：** 简单、容易理解和部署。<br/> **缺点:** 是不利于代码的阅读和维护，各个部分之间高度耦合（ Coupling），流程混乱，而且每个任务只能指定一个回调函数。                         |
| 事件监听     | **优点：** 可以绑定多个事件，每个事件可以指定多个回调函数，而且可以“去耦合”（ Decoupling），有利于实现模块化。<br/> **缺点:** 整个程序都要变成事件驱动型，运行流程会变得很不清晰。 |
| 发布订阅方式 | 性质与“事件监听”类似，但是明显优于后者                                                                                                                                             |
| Promise 对象 | Promise 对象是 Commonjs 工作组提出的一种规范，旨在为异步编程提供统一接口。它的思想是，每一个异步任务返回一个 Promise 对象，该对象有一个 then 方法，允许指定回调函数。              |

#### **19. JavaScript 的同源策略**

同源策略是客户端脚本（尤其是 JavaScript）的重要安全度量标准。它最早出自 Netscape Navigator2.0，目的是防止某个文档或脚本从多个不同源装载。
这里的同源策略指的是协议、域名、端口相同。同源策略是一种安全协议。指一段脚本只能读取来自同一来源的窗口和文档的属性。

#### **20. 为什么要有同源限制**

我们举例说明。比如一个黑客，他利用 Iframe 把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名、密码登录时，他的页面就可以通过 Javascript 读取到你表单上 Input 中的内容，这样黑客就会轻松得到你的用户名和密码。

#### **21. 在 JavaScript 中，为什么说函数是第一类对象**

第一类函数即 JavaScript 中的函数。这通常意味着这些函数可以作为参数传递给其他函数，作为其他函数的值返回，分配给变量，也可以存储在数据结构中。

#### **22. 什么是事件？E 与 Firefox 的事件机制有什么区别？如何阻止冒泡？**

事件是在网页中的某个操作（有的操作对应多个事件）例如，当单击一个按钮时，就会产生一个事件，它可以被 JavaScript 侦测到，
在事件处理机制上，IE 支持事件冒泡；Firefox 同时支持两种事件模型，也就是捕获型事件和冒泡型事件。

阻止方法是 **event.stopPropagation**.注意旧版 E 中的方法 **event.cancelBubble=true**.

#### **23. 函数声明与函数表达式的区别？**

在 JavaScript 中，在**向执行环境中加载数据**时，解析器对函数声明和函数表达式并非是一视同仁的。

- 解析器会**首先读取函数声明**，并使它在执行任何代码之前可用（可以访问）。
- 至于**函数表达式**，则必须等到解析器**执行到它所在的代码行**，才会真正解析和执行它。

#### **24. cookie 是什么？如何删除一个 cookie？**

- **cookie** 是存储在访问者计算机中的变量。每当一台计算机通过浏览器请求某个页面时，就会发送这个 **cookie**， JavaScript 来创建和获取 **cookie** 的值。

  为了删除 **cookie** expires

```js
document.cookie = "user=icketang；expires =" + new Date(0);
```

#### **25. 对于元素， attribute 和 property 的区别是什么？**

- **attribute** 是 **DOM** 元素在文档中作为 **HTML** 标签拥有的属性
- **property** 就是 **DOM** 元素在 **JavaScript** 中作为对象拥有的属性
- **注：** 对于 HTML 的标准属性来说， **attribute** 和 **property** 是同步的，会**自动更新**，但是对于**自定义的属性**来说，它们是**不同步**的。

#### **26. 延迟脚本在 JavaScript 中的作用**

默认情况下，在页面加载期间，HTML 代码的解析将暂停，直到脚本停止执行。

这意味着，如果服务器速度较慢或者脚本特别“沉重”，则会导致网页延迟。在使用 Deferred 时，脚本会延迟执行，直到 HTML 解析器运行。这缩短了网页的加载时间，并且它们的显示速度更快。

#### **27. 如何判断一个对象是否属于某个类**

- **instanceof** 关键字，判断一个对象是否是类的实例化对象
- **constructor** 属性，判断一个对象是否是类的构造函数

#### **28. 在 JavaScript 中有一个函数，执行直接对象查找时，它始终不会查找原型，这个函数是什么？**

**hasOwnProperty**
[hasOwnProperty](../javascript/js-hasOwnProperty.md)

#### **29. documen.wrte 和 innerHTML 的区别是什么**

- **document.wite**重绘整个页面
- **innerHTML**可以重绘页面的一部分

#### **30. 在 JavaScript 中读取文件的方法是什么**

- 获取服务器中文件内容

  ```js
  function readAjaxFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readystate === 4 && xhr.status === 200) {
        console.logt(xhr.responseText);
      }
    };
    xhr.open("GET", url, true);
    xhr.send(null);
  }
  ```

- 读取计算机本地内容
  ```js
  function readInputFile() {
    var file = document.getElementById(id).file[0];
    // 实例化FileReader
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (data) {
      console.log(data, this.result);
    };
  }
  ```
  [拖拽上传案例](../../library/react/drop-upload.md)

#### **31. 说几条书写 JavaScript 语句的基本规范**

- 不要在同一行声明多个变量
- 应该使用 **===/!==** 来比较 **true/false** 或者数值
- 使用对象字面量代替 **new Array** 这种形式
- 不要使用全局函数
- **switch** 语句必须带有 **default** 语句
- 函数不应该有时有返回值，有时没有返回值
- **for** 循环必须使用大括号括起来
- **if** 语句必须使用大括号括起来
- **for-in** 循环中的变量必须使用 **var** 关键字明确限定的作用域，从而避免作用域局污染

#### **32. ["1", "2", "3"].map(parselnt)的执行结果是多少？**

**[1, NaN, NaN]**

- **map ()** 方法的定义用法和参数
  :::tip

  #### array.map(function(item, index, array), this)

  - **item** 必须，当前处理的数组的值
  - **index** 可选，当前处理的值得索引
  - **array** 可选，当前处理的值所属于的数组对象
  - **this** 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"。

  :::

- **parseInt()** 函数的定义用法和参数
  :::tip

  #### parseInt(string, radix)

  - **string** 必须，要被解析的字符串
  - **radix** 可选，表示要解析的数字基数，介于 2-36 之间

  :::

- **numbers.map(parseInt)** 含义为对数组 numbers 的每一项调用 **parseInt()** 方法，传入的参数为每一项的值和该值的索引
  **parseInt()** 被作为 **map()** 方法的回调函数处理每一项，默认把 **map()** 的参数带进 **parseInt()** 中

  ```js
  var arr = [1, 2, 3, 4, 10].map(parsetInt);
  // 上下等价
  var arr = [
    parsetInt(1, 0),
    parsetInt(2, 1),
    parsetInt(3, 1),
    parsetInt(4, 3),
    parsetInt(10, 4),
  ];

  console.log(arr); // [1, NaN, NaN, NaN, 4]
  ```

#### **33. 数组快速排序**

[数组相关算法](../algorithm/array.md)

#### **34. 数组合并**

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 6, 7];
const arr = [...new Set([...arr1, ...arr2])];
console.log(arr); // [1, 2, 3, 4, 6, 7]
```

#### **35. JavaScript 中常用的逻辑运算符**

**&&** 、**||**、 **!**

#### **36. 什么是 JavaScript**

JavaScript 是客户端和服务器端的脚本语言，可以插入 HTML 页面中，并且是目前较热门的 Web 开发语言，同时， JavaScript 也是面向对象的编程语言。

#### **37. 什么是全局变量？这些变量如何声明？使用全局变量有哪些问题？**

- 全局变量是整个代码中都可用的变量，也就是说，这些变量没有任何作用域
- var 关键字用于声明局部变量，如果省略 var 关键字，则声明一个全局变量使用全局变量面临的问题是局部变量和全局变量名称的冲突。此外，很难调试和测试依赖于全局变量的代码。

#### **38. 解释 JavaScript 中定时器的工作，并说明使用定时器的作用**

| 名称                             | 作用                                                               |
| :------------------------------- | :----------------------------------------------------------------- |
| **setTimeout (function, delay)** | 用于启动在所属延迟之后调用特定功能的定时器                         |
| **setInterval(function, dlay)**  | 用于在提到的延迟中重复执行给定的功能，只有在取消时才停止           |
| **clearInterval(id)**            | 指示定时器停止定时器在一个线程内运行，因此事件可能需要排队等待执行 |

#### **39. 如何使用 JavaScript 提交表单**

```js
document.form[0].submit();
```

#### **40. 元素的样式/类如何改变**

```js
// 改变元素样式
document.getElementById("myTextx").style.fontsize = "20";
// 改变元素 class
document.getElementById("myTetx").className = "anyClass";
```

#### **41. JavaScript 中的循环结构都有哪些？**

**for**、**while**、**do...while**、**for...in**、**for...of**

#### **42. == 和 === 的区别**

- **==** 只检查值相等性
- **===** 用于更严格的等式判定，如果两个变量的**值**或者**类型**不同，则返回 **false**

#### **43. delete 操作符的功能是什么？**

**delete** 操作符用于删除对象中的某个属性，但不能删除变量、函数等。

#### **44. JavaScript 中有哪些类型的弹出框？**

**ua**、**alert**、 **confirm** 和 **prompt**。

#### **45. void（0）的作用是什么？**

- **void** 操作符使表达式的运算结果返回 **undefined**。
- **void(0)** 用于防止页面刷新，并在调用时传递参数 **0**。
- **void(0)** 用于调用另一种方法而不刷新页面。

#### **46. 如何强制页面加载 JavaScript 中的其他页面？**

```js
<script language="javascript" type="text/javascript">
<!-- location.href = "http://newhost/newpath/newfile.html"; //-->
</script>
```

#### **47. break 和 continue 语句的作用是什么？**

- **break** 语句从当前循环中退出
- **continue** 语句继续下一个循环语句

#### **48. 如何为对象添加属性？**

```js
obj[" class"] = 12;
obj.class = 12;
```

#### **49. 解释一下 window.onload 和 onDocumentReady。**

在载入页面的所有信息之前，不运行 window. onload。这导致在执行任何代码之前会出现延迟。

window.onDocumentReady 在加载 DOM 之后加载代码。这允许代码更早地执行（早于 window. onload）。

#### **50. JavaScript 中的匿名函数。**

被声明为没有任何命名标识符的函数称为匿名函数。一般来说，匿名函数在声明后无法访问。

#### **51. 阐述一下事件冒泡。**

Java Script 允许 DOM 元素嵌套在一起。在这种情况下，如果单击子级的处理程序，父级的处理程序也将执行同样的工作。

#### **52. JavaScript 里函数参数 arguments 是数组吗？**

在函数代码中，使用特殊对象 arguments，开发者无须明确指出参数名，使用下标就可以访问相应的参数。

arguments 虽然有数组的性质，但其并非真正的数组。它只是一个类数组对象，并没有数组的方法，不能像真正的数组那样调用 .join()、， .concat()、.pop()等方法。

#### **53. 什么是构造函数？它与普通函数有什么区别？**

构造函数是一种特殊的方法，主要用来创建对象时初始化对象，经常与 new 运算符一起使用，创建对象的语句中构造函数的名称必须与类名完全相同。

与普通函数相比，区别如下

- 构造函数只能由 new 关键字调用
- 构造函数可以创建实例化对象
- 构造函数是类的标志。

#### **54. 请解释一下 JavaScript 和 CSS 阻塞。**

JavaScript 的阻塞特性是所有浏览器在下载 JavaScript 代码的时候，会阻止其他一切活动，比如其他资源的下载，内容的呈现等，直到 JavaScript 代码下载、解析、执行完毕后才开始继续并行下载其他资源并渲染内容。

为了提高用户体验，新一代浏览器都支持并行下载 JavaScript 代码，但是 JavaScript 代码的下载仍然会阻塞其他资源的下载（例如图片、CSS 文件等）。

为了防止 JavaScript 修改 DOM 树，浏览器需要重新构建 DOM 树，所以就会阻塞其他资源的下载和渲染。

嵌入的 JavaScript 代码会阻塞所有内容的呈现，而外部 JavaScript 代码只会阻塞其后内容的显示，两种方式都会阻塞其后资源的下载。也就是说，外部脚本不会阻塞外部脚本的加载，但会阻塞外部脚本的执行。

CSS 本来是可以并行加载的，但是当 CSS 后面跟着嵌入的 JavaScript 代码的时候，该 CSS 就会阻塞后面资源的下载。

而当把嵌入的 JavaScript 代码放到 CSS 前面时，就不会出现阻塞的情况了（在 IE6 下 CSS 都会阻塞加载）。

根本原因是因为浏览器会维持 HTML 中 CSS 和 JavaScript 代码的顺序，样式表必须在嵌入的 JavaScript 代码执行前先加载、解析完。而嵌入的 JavaScript 代码会阻塞后面的资源加载，所以就会出现 CSS 阻塞资源加载的情况。

#### **55. for of 和 for in 的区别**

- **for of:** 遍历可迭代对象定义要迭代的值
- **for in:** 任意顺序迭代对象的 **可枚举属性**

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};
let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // 3, 5, 7
}
```

#### **56. 试述服务端渲染和客户端渲染**

- 服务端渲染
  :::tip
  DOM 树在服务端生成，然后返回给前端。服务端返回 HTML 文件，客户端只需解析 HTML。
  :::

  - 优点
    - 首屏渲染快，前端耗时少，速度快。
    - 有利于 SEO 优化，所有的 html 数据都在后台，爬虫更容易爬取信息
  - 缺点
    - 不利于前后端分离，降低效率。
    - html 的解析都在后台执行，前端速度提升了，但是增加了服务器的计算压力。

- 客户端渲染
  :::tip
  前端去后端取数据生成 DOM 树。获取 HTML 文件，根据需要下载 JavaScript 文件，运行文件，生成 DOM，再渲染。
  :::

  - 优点
    - 前后端分离，便于开发。
    - 用户体验会更加好，项目做成单页面（SPA）或部分做成但页面（SPA），当用户操作时，不会形成的频繁的跳转。
  - 缺点
    - 响应速度慢，首屏渲染耗时比较久，影响用户体验。
    - 不利于 SEO 优化，爬虫不认识 SPA，它只是记录页面而已。

- 服务端渲染和客户端渲染两者区别

  - 本质区别：谁解析的 html，服务端渲染是后台解析 html 生成 DOM🌲，客户端渲染是前端解析 html 生成 DOM🌲。
  - 响应速度：服务端渲染提升响应速度，客户端渲染的响应速度会很慢。
  - SEO 优化：服务端渲染是多个页面，利于爬虫爬去数据，客户端是但单页面 📃，不利于爬去数据。
  - 开发效率：服务端渲染不利于前后端分离，客户端渲染有利于前后端分离，提升开发效率。

- 服务端渲染和客户端渲染两者直观区分
  浏览器打开调试模式，在 Application 中看到的源码内容如果和页面显示内容是一样的，那就是服务器渲染，反之则是客户端渲染。

- 服务端渲染和客户端渲染使用的选择
  - 服务端渲染：企业网站等。
  - 客户端渲染：交互性很强的管理网站等。
  - 服务端渲染+客户端渲染：首屏用服务端渲染，提升响应速度，减少用户首屏等待的时间，其他页面使用客户端渲染。

#### **57. 浏览器输入 URL 到页面渲染完成都经历了什么？**

- DNS 解析:将域名解析成 IP 地址
- TCP 连接：TCP 三次握手
- 发送 HTTP 请求
- 服务器处理请求并返回 HTTP 报文
- 浏览器解析渲染页面
- 断开连接：TCP 四次挥手

#### **58. 种强制类型转换 和 隐式类型转换**

<!-- - 强制类型转换
  |类型|方法|
  |:--|:--|
  |字符转数值|<ul><li>**_parseInt()_**<ul><li>转整数</li><li>从左到右依次转换、遇到第一个非数字的字符、停止转换</li><li>忽略小数点后的内容，其实是将小数点识别成了非数字、所以没有四舍五入</li><li>如果第一位就是非数字，直接 NaN<ul><li>NaN: not a number</li><li>不是一个数字的数值型数据，非法的数值运算结果</li></ul></li></ul></li><li>**_parseFloat()_**<ul><li>转小数</li><li>从左到右依次转换、遇到第一个非数字的字符、停止转换</li><li>可以识别小数点</li><li>如果第一位就是非数字，直接 NaN<ul><li>NaN: not a number</li><li>不是一个数字的数值型数据，非法的数值运算结果</li></ul></li></ul></li><li>**_Math.round()_**(要转换的数值或变量)<ul><li>四舍五入</li><li>Math.round()不是专门做字符转数值的，专门做取整</li><li>严格转换，只要出现非数字就是 NaN</li><li>去最近的整数</li></ul></li><li>**_Number()_**(要转换的数值或变量)<ul><li>直接转</li><li>Number()不是专门做字符转数值的，专门做系统内置的构造函数，用来创建数值对象</li><li>严格转换，只要出现非数字就是 NaN</li><li>直接转换，不分小数整数</li></ul></li></ul>|
  |数值转字符|<ul><li>数值变量**_.toString()_**<ul><li>直接转换相当于加个引号</li></ul></li><li>数值变量**_.toFixed(n)_**<ul><li>保留 n 位小数直接转换，相当于加个引号</li></ul></li></ul>|
  |其他类型转换|| -->

- **强制类型转换**
  - 字符转数值
    - **_parseInt()_**
      - 转整数
      - 从左到右依次转换、遇到第一个非数字的字符、停止转换
      - 忽略小数点后的内容，其实是将小数点识别成了非数字、所以没有四舍五入
      - 如果第一位就是非数字，直接 NaN
        - NaN: not a number
        - 不是一个数字的数值型数据，非法的数值运算结果
    - **_parseFloat()_**
      - 转小数
      - 从左到右依次转换、遇到第一个非数字的字符、停止转换
      - 可以识别小数点
      - 如果第一位就是非数字，直接 NaN
        - NaN: not a number
        - 不是一个数字的数值型数据，非法的数值运算结果
    - **_Math.round()_**(要转换的数值或变量)
      - 四舍五入
      - Math.round()不是专门做字符转数值的，专门做取整
      - 严格转换，只要出现非数字就是 NaN
      - 去最近的整数
    - **_Number()_**(要转换的数值或变量)
      - Number()不是专门做字符转数值的，专门做系统内置的构造函数，用来创建数值对象
      - 严格转换，只要出现非数字就是 NaN
      - 直接转换，不分小数整数
  - 数值转字符
    - 数值变量**_.toString()_**
      - 直接转换相当于加个引号
    - 数值变量**_.toFixed(n)_**
      - 保留 n 位小数直接转换，相当于加个引号
  - 其他类型转换
    - 其他转布尔
    - 布尔转数值
    - 其他转字符
- **隐式转换（被动转换）**
  - 情况和规则
    - 算术运算
      - **+** 两边只要出现字符，结果必然为字符
      - **-、\*、/、%** 结果必然为数值（字符串转数值）
    - 关系运算
      - **>、<、>=、<=** 两边只要出现数值，那么另一边也会转为数值，进行比较

#### **59. IE 和 DOM 事件流的区别**

- 执行顺寻不一样
- 参数不一样
- 事件加不加 **on**
- **this** 指向问题

:::warning

- IE9 之前： **attachEvent("onclick")、datachEvent("onclick")**
- IE9 开始给 DOM 事件流是一样的，都是 **addEventListener**

:::

#### **60. IE 和 标准下有哪些兼容方法**

```js
var event = event || window.event;
document.documentElement.clientWidth || document.body.clientWidth;
var target = event.srcElement || evemt.target;
```

#### **61. JavaScript 的数据类型**

- 基本数据类型 **String、Boolean、Number、undefined、object、null**
- 引用数据类型 **Object(Array、Date、RegExp、Function)**

#### **62. 获取 url 中 get 参数**

```js
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
```

#### **63. a++ 和 ++a 的区别**

不管 a++ 还是 ++a ，都是要自身 + 1。
**_a++:_** 先返回值，再执行语句。 （**先返回旧值，再计算，最后存储新值**）
**_++a:_** 先执行语句，再返回值。 （**先计算，再存储新值，最后返回新值**）

```js
let a = 0;
console.log(a++); // 0
console.log(a); // 1
console.log(++a); // 2
console.log(a); // 2
```

#### **64. 浏览器对象模型以及 window 常用方法**

- 浏览器对象模型 **window、document、location、screen、history、navigator**
- window 常用方法 **alert()、confirm()、prompt()、open()、close()**

#### 65. 创建函数的几种方式

- 函数声明
  ```js
  function getSum(num1, num2) {
    return num1 + num2;
  }
  ```
- 函数表达式
  ```js
  var getSum = function (num1, num2) {
    return num1 + num2;
  };
  ```
  - 匿名函数 (**只能自己执行自己**)
  ```js
  function(num1,num2) {
    return num1 + num2;
  }
  ```
- 函数对象
  ```js
  var getSum = new Function("num1", "num2", "return num1 + num2");
  ```

#### **66. ifream 的优缺点**

- 优点
  - 解决加载缓慢的第三方内容如图标和广告等问题
  - **Security sandbox**
  - 并行加载脚本
- 缺点
  - ifream 会阻塞主页面的 **onload** 事件
  - 即使内容为空，加载也需要时间
  - 没有语义

#### **67. 哪些操作会造成内存泄漏**

**概念**: 内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。

垃圾回收器定期扫描对象，并计算引用了每个对象的其他数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或该对象的唯一引用是循环的，那么该对象的内存即可回收。

- setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏
- 闭包
- 控制台日志
- 循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

#### 68. JavaScript 的 typeof 返回哪些数据类型

**object、number、function、boolean、undefined**

#### **69. 字符串反转 “1，2，3，4，5，6，7，8，9”变成“9，8，7，6，5，4，3，2，1”**

```js
var str = "123456789";
str = str.split("").reverse().join("");
```

#### **70. console.log("11" + 2 - "1")**

```js
var str = "11" + 2 - "1";
console.log("11" + 2 - "1");
console.log(typeof str);
```

- 减法操作符在处理各种数据类型转换时
  :::warning

  - 如果两个操作符都是数值, 则执行常规的算术减法操作，并返回结果。
  - 如果有一个操作数是 NAN， 则结果也是 NaN。
  - 如果有一个操作数是字符串、布尔值、null、undefined 则先在后台调用 Number()方法将其转换为数值, 然后在根据根据前面的规则进行减法计算，如果转换的结果是 NaN, 则减法的结果就是 NaN。
  - 如果有一个操作数是对象，则调用对象的 valueof() 方法以取得该方法返回后的值，如果得到的值是 NaN,则减法的结果就是 NaN, 如果对象没有 valueOf()方法，则调用其 toString()方法并将得到的字符串转为数值。

  :::

#### **71. HTTP 的三次握手四次挥手**

[HTTP 的三次握手四次挥手](../javascript/js-HTTP-TCP.md)

#### **72. HTTP 协议中，GET 和 POST 有什么区别？分别适用什么场景**

| 请求方式 | 传送数据长度 | 传递方式                   | 用处           |
| :------- | :----------- | :------------------------- | :------------- |
| **GET**  | 有限制       | url 传递，浏览器地址栏可见 | 简单的数据查询 |
| **POST** | 无限制       | 报文传递                   | 表单提交       |

#### **73. 主流浏览器内核**

| 名称           | 内核   |
| :------------- | :----- |
| IE             | tridet |
| Fifre(火狐)    | gecko  |
| Chrome、safari | webkit |

#### **74. Ajax 是什么？如何创建一个 Ajax？**

Ajax 并不算是一种新技术，全称是 **asynchronous javascript and xml**，可以说是已有技术的组合，主要用来实现客户端与服务端的异步通信效果，实现页面的局部刷新，早期的浏览器并不能原生支持 ajax，可以使用隐藏帧（iframe）方式变相实现异步效果，后来的浏览器提供了对 ajax 的支持。

使用 ajax 原生方式发送请求主要通过 XMLHttpRequest(标准浏览器)、ActiveXObject(IE 浏览器)对象实现异步通信效果。

基本步骤：

```js
var xhr = null;
if (window.XMLHttpRequest) {
  //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
  xhr = new HMLHttpRequest();
} else {
  // IE6, IE5 浏览器执行代码
  xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    return xhr.responseText;
  }
};
xhr.open("GET", "/try/ajax/ajax_info.txt", true);
xhr.send();
```

#### **75. 同步 & 异步**

同步和异步关注的是消息通信机制。

**同步**: 就是调用某个方法时，调用方得等待这个调用返回结果才能继续往后执行。

- 同步方法调用一旦开始，调用者必须等到方法调用返回后，才能继续后续的行为。
  ![同步导图](../../assets/await.png)

**异步**: 和同步相反，调用方不会立即得到结果，而是在调用发出后调用者可用继续执行后续操作，被调用者通过状体来通知调用者，或者通过回掉函数来处理这个调用。

- 异步方法调用更像一个消息传递，一旦开始，方法调用就会立即返回，调用者就可以继续后续的操作。而，异步方法通常会在另外一个线程中，“真实”地执行着。整个过程，不会阻碍调用者的工作
  ![异步导图](../../assets/async.png)

**解决方法**

- Promise

  ```js

  ```

- generator/yield

  ```js
  const getSum = (a, b) => a + b;

  const getSubtract = (a, b) => a - b;

  const getNums = function* () {
    const num1 = yield getSum(a, b);
    const num2 = yield getSubtract(num1, c);
    return num2;
  };
  ```

- async/await

  ```js
  const getSum = (a, b) => a + b;

  const getSubtract = (a, b) => a - b;

  const getNums = async (a, b, c) => {
    const num1 = await getSum(a, b);
    const num2 = await getSubtract(num1, c);
    console.log(num2);
  };

  getNums(3, 2, 1); // 4
  ```

#### **76. 同步异步与阻塞非阻塞的区别**

**同步和异步**: 强调的是消息通信机制，所谓同步，就是在发出一个"调用"时，在没有得到结果之前，该“调用”就不返回。但是一旦调用返回，就得到返回值了。换句话说，就是由“调用者”主动等待这个“调用”的结果。而异步则是相反，"调用"在发出之后，这个调用就直接返回了，所以没有返回结果。换句话说，当一个异步过程调用发出后，调用者不会立刻得到结果。而是在"调用"发出后，"被调用者"通过状态、通知来通知调用者，或通过回调函数处理这个调用。

**阻塞和非阻塞**: 强调的是程序在等待调用结果（消息，返回值）时的状态. 阻塞调用是指调用结果返回之前，当前线程会被挂起。调用线程只有在得到结果之后才会返回。非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程。 对于同步调用来说，很多时候当前线程还是激活的状态，只是从逻辑上当前函数没有返回而已，即同步等待时什么都不干，白白占用着资源。

#### **77. 如何解决跨域问题?**

**跨域概念**： **协议、域名、端口都相同才同域，否则都是跨域**

处于安全考虑，服务器不允许 ajax 跨域请求数据，但是可以跨域获取文件内容，所以基于这一点，可以动态创建 script 标签，使用 src 属性访问 js 文件的形式获取 js 脚本，并且这个 js 脚本中的内容是函数调用，该函数调用的参数是服务器返回的数据，为了获取这里的参数数据，需要事先在页面定义回调函数，在回调函数中处理服务器返回的数据，这就是解决跨域问题的主流方案。

#### **78. 数据的运算符**

- 算数运算符
  - **+** 加号、加法
    - 当加号两边都是数值型数据时，是加法运算
    - 两边任意一边出现字符就变成了拼接就不是加法，已经不是单纯的加法了，变成了拼接，拼接就是将两个数组直接组合起来
  - **-、\*、/、%**
    - 就是正常的数学运算符
    - 就算两边不是数值，也会默认转成数值，进行运算
    - 如果某个数值不能转成数值，就会得到 NaN
- 关系运算符 - 结果是布尔值
  - **>、<、>=、<=**
    - 只要有一边出现数值，都是数值的比较规则
    - 如果都是字符、才是字符的比较规则：逐渐比较得到结果，就停止
  - **!=、==**
    - 会发生隐式类型转换，只比较大小、不比较类型
  - **!==、===**
    - 不会发生隐式类型转换，不仅比较大小，也会比较类型
- 逻辑运算符 - 主要操作布尔值
  - **||** 或
    - 或的规则：两边只要出现 true，结果就是 true；两边都为 false,结果才是 false
  - **&&** 且
    - 且的规则：两边只要出现 false，结果就是 false；两边都为 true，结果才是 true
  - **!** 非
    - 非的规则：取反
- 赋值运算符
  - **=、+=、-=、\*=、/=、%=**
  - 先计算，再赋值 **c1 = c1 + 10; c1 += 10;**
- 一元运算符
  - **++a**、**a++**
    - **++a**：先计算、后使用
    - **a++**：先使用、后计算
  - **--a**、**a--**
    - **--a**：先计算、后使用
    - **a--**：先使用、后计算

#### **79. 箭头函数**

- 更简短的函数

  ```js
  // ES5
  const getSum = function (num1, num2) {
    return num2 + num2;
  };
  // ES6
  const getSum = (num1, num2) => num1 + num2;
  ```

- 箭头函数没有 prototype 属性
- 箭头函数不绑定 **_this_**
  - 如果该函数是一个构造函数，**_this_** 指针指向一个新的对象
  - 在严格模式下的函数调用下，**_this_** 指向 **_undefined_**
