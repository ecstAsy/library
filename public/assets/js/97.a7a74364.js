(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{681:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"npm-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-install"}},[t._v("#")]),t._v(" npm install")]),t._v(" "),a("p",[a("strong",[a("em",[t._v("npm install --save:")])]),t._v(" 生成环境的依赖包\n"),a("strong",[a("em",[t._v("npm install --save-dev:")])]),t._v(" 开发环境依赖包")]),t._v(" "),a("p",[t._v("当在 windows 中通过调用路径去调用 webpack 时，必须使用反斜线();")]),t._v(" "),a("p",[t._v("webpack 中的名词解析：")]),t._v(" "),a("p",[t._v("我们可以通过配置方式指定 loader\n"),a("strong",[a("em",[t._v("规则(loader rules)")])]),t._v("、\n"),a("strong",[a("em",[t._v("插件(plugins)")])]),t._v("、\n"),a("strong",[a("em",[t._v("解析选项(resolve options)")])]),t._v(" ，\n以及许多其他增强功能。")]),t._v(" "),a("h3",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" "),a("strong",[t._v("loader")])]),t._v(" "),a("ul",[a("li",[t._v("style-loader")]),t._v(" "),a("li",[t._v("css-loader")]),t._v(" "),a("li",[t._v("file-loader")]),t._v(" "),a("li",[t._v("ts-loader")]),t._v(" "),a("li",[t._v("js-loader")])]),t._v(" "),a("h3",{attrs:{id:"eslint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" "),a("strong",[t._v("eslint")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("eslint 不认识 window、navigator 全局变量")]),t._v(" "),a("p",[a("strong",[t._v("解决")]),t._v("：需要修改 "),a("code",[t._v("package.json")]),t._v(" 中的 "),a("code",[t._v("eslintConfig")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持浏览器全局变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"source-map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-map"}},[t._v("#")]),t._v(" "),a("strong",[t._v("source-map")])]),t._v(" "),a("p",[a("strong",[a("em",[t._v("source-map")])]),t._v(" : 一种提供 "),a("strong",[t._v("源代码到构建后代码映射")]),t._v(" 技术（如果构建后代码出错了，通过映射可以追踪源代码错误位置）")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[a("strong",[t._v("有效值")])]),t._v(" "),a("p",[t._v("[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map")])]),a("ul",[a("li",[a("strong",[t._v("source-map")]),t._v(" "),a("ul",[a("li",[t._v("外部")]),t._v(" "),a("li",[t._v("错误代码准确信息")]),t._v(" "),a("li",[t._v("源代码的错误位置")])])]),t._v(" "),a("li",[a("strong",[t._v("inline-source-map")]),t._v(" "),a("ul",[a("li",[t._v("内联")]),t._v(" "),a("li",[t._v("只生成一个内联 source-map")]),t._v(" "),a("li",[t._v("错误代码准确信息")]),t._v(" "),a("li",[t._v("源代码的错误位置")])])]),t._v(" "),a("li",[a("strong",[t._v("hidden-source-map")]),t._v(" "),a("ul",[a("li",[t._v("外部")]),t._v(" "),a("li",[t._v("错误代码错误原因，但是没有错误位置")]),t._v(" "),a("li",[t._v("不能追踪源代码错误，只能提示到构建后代码的错误位置")])])]),t._v(" "),a("li",[a("strong",[t._v("eval-source-map")]),t._v(" "),a("ul",[a("li",[t._v("内联")]),t._v(" "),a("li",[t._v("每一个文件都生成对应的 source-map，都在 eval")]),t._v(" "),a("li",[t._v("错误代码准确信息")]),t._v(" "),a("li",[t._v("源代码的错误位置")])])]),t._v(" "),a("li",[a("strong",[t._v("nosources-source-map")]),t._v(" "),a("ul",[a("li",[t._v("外部")]),t._v(" "),a("li",[t._v("错误代码错误原因，但是没有任何源代码信息")])])]),t._v(" "),a("li",[a("strong",[t._v("cheap-source-map")]),t._v(" "),a("ul",[a("li",[t._v("外部")]),t._v(" "),a("li",[t._v("错误代码错误信息")]),t._v(" "),a("li",[t._v("源代码的错误位置（只能精确到行）")])])]),t._v(" "),a("li",[a("strong",[t._v("cheap-module-source-map")]),t._v(" "),a("ul",[a("li",[t._v("外部")]),t._v(" "),a("li",[t._v("错误代码错误信息")]),t._v(" "),a("li",[t._v("源代码的错误位置")]),t._v(" "),a("li",[t._v("module 会将 loader 的 source-map 加入")])])])]),t._v(" "),a("p",[a("strong",[t._v("内联和外部的区别")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("外部生成了文件、内联没有")]),t._v(" "),a("li",[t._v("内联构建速度更快")])]),t._v(" "),a("p",[a("strong",[t._v("如何选择")])]),t._v(" "),a("p",[t._v("开发环境 "),a("strong",[t._v("速度快、调试更加友好")])]),t._v(" "),a("ul",[a("li",[t._v("速度快 （"),a("strong",[a("em",[t._v("eval > inline > cheap > ...")])]),t._v("）\n"),a("ul",[a("li",[a("strong",[t._v("eval-cheap-source-map")])]),t._v(" "),a("li",[a("strong",[t._v("eval-source-map")])])])]),t._v(" "),a("li",[t._v("调试更加友好\n"),a("ul",[a("li",[a("strong",[t._v("source-map")])]),t._v(" "),a("li",[a("strong",[t._v("cheap-module-source-map")])]),t._v(" "),a("li",[a("strong",[t._v("cheap-source-map")])])])])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[a("em",[t._v("总结")])]),t._v(" : "),a("strong",[a("em",[t._v("eval-source-map")])]),t._v(" / "),a("strong",[a("em",[t._v("eval-cheap-module-source-map")])])]),t._v(" "),a("p",[t._v("生产环境 "),a("strong",[t._v("源代码要不要隐藏、调试要不要更友好")])]),t._v(" "),a("blockquote",[a("p",[t._v("内联会让代码体积变大，所以在生产环境不用内联")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("nosources-source-map")]),t._v(" 全部隐藏")]),t._v(" "),a("li",[a("strong",[t._v("hidden-source-map")]),t._v(" 只隐藏构建后的代码，会提示构建后代码错误信息")])]),t._v(" "),a("p",[a("strong",[a("em",[t._v("总结")])]),t._v(" : "),a("strong",[a("em",[t._v("source-map")])]),t._v(" / "),a("strong",[a("em",[t._v("cheap-module-source-map")])])]),t._v(" "),a("h3",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("babel 缓存")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cacheDirectory"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("让第二次打包构建速度更快")])]),t._v(" "),a("li",[a("p",[t._v("文件资源缓存")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("hash")]),t._v(": 每次 webpack 构建时会生成一个唯一的 hash 值")]),t._v(" "),a("p",[a("strong",[t._v("问题 🤔️")]),t._v("：因为 js 和 css 同时使用一个 hash 值，如果重新打包，会导致所有缓存失效。（可能我们只修改一个文件）")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("chunkhash")]),t._v(" : 根据 chunk 生成的 hash 值，如果打包来源同一个 chunk， 那么 hash 值就一样")]),t._v(" "),a("p",[a("strong",[t._v("问题 🤔️")]),t._v("：js 和 css 的 hash 值还是一样的？")]),t._v(" "),a("p",[a("strong",[t._v("因为 css 是在 js 中被引入的，所以同属一个 chunk,所以 js 和 css 的 hash 值是一样的")])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("contenthash")]),t._v(" : 根据文件的内容生成 hash 值，不同文件 hash 值一定不一样")])])]),t._v(" "),a("p",[t._v("让代码上线运行缓存更好使用")])])]),t._v(" "),a("h3",{attrs:{id:"tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" "),a("strong",[t._v("tree shaking")])]),t._v(" "),a("ul",[a("li",[t._v("目的："),a("strong",[t._v("去除无用代码")])]),t._v(" "),a("li",[t._v("前提\n"),a("ul",[a("li",[t._v("必须使用 ES6 模块化")]),t._v(" "),a("li",[t._v("开启 production 环境")])])]),t._v(" "),a("li",[t._v("作用： "),a("strong",[t._v("减少代码体积")])])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("package.json")]),t._v(" 中配置")]),t._v(" "),a("p",[a("code",[t._v('"sideEffects": false')]),t._v(" ：则所有代码都没有副作用（都可以进行 tree shaking）")]),t._v(" "),a("p",[t._v("问题：可能会把 css / @babel/polyfill (副作用)文件干掉")]),t._v(" "),a("p",[a("code",[t._v('"sideEffects": ["*.css", "*.less"]')])]),t._v(" "),a("h3",{attrs:{id:"code-split-代码分割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-split-代码分割"}},[t._v("#")]),t._v(" "),a("strong",[t._v("code split")]),t._v(" 代码分割")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("单入口改成多入口")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("optimization")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("可以将 node_modules 中的代码单独打包成一个 chunk 最终输出")])]),t._v(" "),a("li",[t._v("自动分析多入口 chunk 中有没有公共的文件（10k +），如果有会打包成单独的一个 chunk")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("optimization"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  splitChunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chunks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"all"')]),t._v(";\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("通过 js 代码，让某个文件被单独打包成一个 chunk")]),t._v(" "),a("p",[t._v("import 动态导入语法：能将某个文件单独打包")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* webpackChunkName:"test" */')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文件加载失败～"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"lazy-loading-懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lazy-loading-懒加载"}},[t._v("#")]),t._v(" "),a("strong",[t._v("lazy loading 懒加载")])]),t._v(" "),a("p",[t._v("就是将代码引入放到一个异步的函数中，当函数被调用的时候才会加载对应的文件")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"btn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 懒加载～")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prefetch 预加载")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*webpackChunkName/:'test', webpackPrefetch:true*/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("懒加载 : 当文件需要使用时才会加载")]),t._v(" "),a("li",[t._v("预加载 （"),a("code",[t._v("prefetch")]),t._v("） "),a("strong",[t._v("慎用 暂时只适合在 pc 端运行，移动端有很多兼容性问题")]),t._v(" "),a("ul",[a("li",[t._v("会在使用之前，提前加载 js 文件")]),t._v(" "),a("li",[t._v("等待其他资源加载完毕，浏览器空闲了，再偷偷加载资源")])])]),t._v(" "),a("li",[t._v("正常加载\n"),a("ul",[a("li",[t._v("可以认为是并行加载（同一时间加载多个文件）")]),t._v(" "),a("li",[t._v("文件越多，加载时间越久")])])])]),t._v(" "),a("h3",{attrs:{id:"pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa"}},[t._v("#")]),t._v(" "),a("strong",[t._v("PWA")])]),t._v(" "),a("p",[t._v("渐进式网络开发应用程序（离线可访问）")]),t._v(" "),a("ul",[a("li",[t._v("workbox: "),a("strong",[t._v("workbox-webpack-plugon")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" WorkboxWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"workbox-webpack-plugon"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("export "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WorkboxWebpackPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GenerateSW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      clientsClaim"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      skipWaiting"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("clientsClaim")]),t._v(" 和 "),a("strong",[t._v("skipWaiting")]),t._v(" 作用：")]),t._v(" "),a("ul",[a("li",[t._v("帮助 "),a("code",[t._v("serviceworker")]),t._v(" 快速启动")]),t._v(" "),a("li",[t._v("删除旧的 "),a("code",[t._v("serviceworker")]),t._v(" "),a("ul",[a("li",[t._v("生成一个 "),a("code",[t._v("serviceworker")]),t._v(" 配置文件")]),t._v(" "),a("li",[t._v("入口注册 "),a("code",[t._v("serviceWorker")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理兼容性问题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serviceWorker"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceworker\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./service-worker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sw注册成功～"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sw注册失败～"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[t._v("sw 代码必须运行在服务器上\n"),a("ul",[a("li",[t._v("node.js")]),t._v(" "),a("li",[a("ul",[a("li",[t._v("npm i serve -g")]),t._v(" "),a("li",[t._v("serve -s build 启动服务器，将 build 目录下的所有资源作为静态资源暴露出去")])])])])])]),t._v(" "),a("h3",{attrs:{id:"多进程打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多进程打包"}},[t._v("#")]),t._v(" "),a("strong",[t._v("多进程打包")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("thread-loader")]),t._v(" 开启多进程打包\n"),a("ul",[a("li",[t._v("进程启动大概为 600ms，进程通信也有开销")]),t._v(" "),a("li",[t._v("只有工作消耗时间比较长，才需要多进程打包")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"loader"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"thread-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"workers"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进程两个")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"externals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#externals"}},[t._v("#")]),t._v(" "),a("strong",[t._v("externals")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"externals"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 忽略库名 --- npm 包名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拒绝Jquery被打包进去")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jquery"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jquery"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"dll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dll"}},[t._v("#")]),t._v(" "),a("strong",[t._v("dll")])]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("dll")]),t._v(" 技术，对某些库（第三方库：jquery、react、vue...）进行单独打包")]),t._v(" "),a("p",[a("strong",[t._v("webpack.dll.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resolve "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最终打包生成的【name】 =》 jquery")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ['jquery'] --\x3e 要打包的库是jquery")]),t._v("\n    jquery"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jquery"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name].js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dll"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    library"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]_[hash]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打包生成一个 manifest.json ---\x3e 提供和jquery 映射")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name_[hash]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 映射库的暴露的内容名称")]),t._v("\n      path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reslve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dll/manifest.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出文件路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当运行 "),a("code",[t._v("webpack")]),t._v(" 时，默认查找的是 "),a("code",[t._v("webpack.config.js")])]),t._v(" "),a("p",[t._v("需求：需要运行的是 "),a("code",[t._v("webpack.dll.js")])]),t._v(" "),a("blockquote",[a("p",[t._v("webpack --config webpack.dll.js")])]),t._v(" "),a("p",[a("strong",[t._v("webpack.config.js")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 告诉 webpack 哪些库不参与打包，同时使用时的名称也要变更～")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DllReferencePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      manifest"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dll/manifest.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);