---
title: VuePress + Github Pages 搭建博客
author: ecstAsy
date: "2022-06-28"
---

#### **VuePress介绍** 
VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。[查看更多](https://www.vuepress.cn/)
#### **本地搭建**
- 创建并进入一个新目录
> mkdir vuepress-starter && cd vuepress-starter
- 使用你喜欢的包管理器进行初始化
> yarn init # npm init # pnpm init
-  VuePress 安装为本地依赖
> yarn add -D vuepress # npm install -D vuepress # pnpm install -D vuepress
- 创建你的第一篇文档，VuePress 会以 docs 为文档根目录，所以这个 README.md 相当于主页：
> mkdir docs && echo '# Hello VuePress' > docs/README.md
- 在 package.json 中添加一些 scripts
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
- 在本地启动服务器
> yarn docs:dev # npm run docs:dev
VuePress 会在 **http://localhost:8080** (opens new window) 启动一个热重载的开发服务器。
#### **基础配置**
在文档目录下创建一个 **.vuepress** 目录，所有 VuePress 相关的文件都会被放在这里。此时你的项目结构可能是这样：
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
在 **.vuepress** 文件夹下添加 ***config.js***，配置网站的标题和描述，方便 SEO：
```js
module.exports = {
  title: 'ecstAsy 前端记录',
  description: 'ecstAsy 前端记录'
}
```
#### **添加导航栏**
我们现在在页首的右上角添加导航栏，修改 config.js:
```js
module.exports = {
  title: 'ecstAsy 前端记录',
  description: 'ecstAsy 前端记录',
  themeConfig: {
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: 'ecstAsy 的前端博客',
      items: [{
        text: 'Github',
        link: 'https://github.com/ecstAsy/library.git'
      }, {
        text: 'Gitee',
        link: 'https://gitee.com/ecst/library.git'
      }, ]
    }],
  }
}
```
#### **添加侧边栏**
现在我们添加一些 md 文档，目前文档的目录如下：
```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
|  └─ library
|     └─ course
|        └─ vuepress-gitpage.md
└─ package.json
```
我们在 **config.js** 配置如下：
```js
module.exports = {
  title: 'ecstAsy 前端记录',
  description: 'ecstAsy 前端记录',
  themeConfig: {
    nav: [{
      text: '首页',
      link: '/'
    }, {
      text: 'ecstAsy 的前端博客',
      items: [{
        text: 'Github',
        link: 'https://github.com/ecstAsy/library.git'
      }, {
        text: 'Gitee',
        link: 'https://gitee.com/ecst/library.git'
      }, ]
    }],
    sidebar:[{
      title: '前言',
      path: '/',
      collapsable: false, // 不折叠
    }, {
      title: '教程',
      path: '/library/course/npm-package',
      collapsable: true,
      children: [{
        title: 'NPM 包开发配置',
        path: '/library/course/npm-package'
      }, {
        title: 'VuePress 搭建博客',
        path: '/library/course/vuepress-gitpage'
      }]
    }]
  }
}
```
#### **更换主题**
现在基本的目录和导航功能已经实现，但如果我还想要加载 loading、切换动画、模式切换（暗黑模式）、返回顶部、评论等功能呢，为了简化开发成本，我们可以直接使用主题，这里使用的主题是 vuepress-theme-rec：

现在我们安装 **vuepress-theme-reco**：
> npm install vuepress-theme-reco --save-dev
> yarn add vuepress-theme-reco
> pnpm add vuepress-theme-reco

然后在 **config.js** 里引用该主题：
```js
module.exports = {
  // ...
  theme: 'reco'
  // ...
}  
```
刷新一下页面，我们会发现一些细节的改变，比如加载时的 loading 动画、以及支持切换暗黑模式.
#### **添加文章信息**
我们可以在每篇文章的 md 文件中添加一些信息修改：
```md
---
title: VuePress + Github Pages 搭建博客
author: ecstAsy
date: "2022-06-28"
---
```
#### **设置语言**
因为  VuePress 默认的 lang 为 **en-US**，我们修改一下 ***config.js***：
```js
module.exports = {
  // ...
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // ...
}  
```
#### **开启目录结构**
```js
module.exports = {
  //...
  themeConfig: {
    subSidebar: 'auto'
  }
  //...
}
```
#### **修改主题颜色**
VuePress 基于 Vue，所以主题色用的是 Vue 的绿色，如果像自定义颜色，那如何修改 VuePress 的主题色呢？

你可以创建一个 **.vuepress/styles/palette.styl** 文件，文件代码如下：
```
$accentColor = #7367F0
```
#### **自定义修改样式**
[vuepress](https://www.vuepress.cn/)
#### **部署**
我们在 **Github/Gitee** 上新建一个仓库 ***library**

对应，我们需要在 ***config.js*** 添加一个 base 路径配置：
```js
module.exports = {
   // 路径名为 "/<REPO>/"
    base: '/library/',
   //...
}
```

#### **案例**

 - [apifox](https://www.apifox.cn/help/reference/install-java/)