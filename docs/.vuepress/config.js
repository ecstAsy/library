/*
 * @Author: ecstAsy
 * @Date: 2022-01-04 17:50:58
 * @LastEditTime: 2022-01-25 13:43:21
 * @LastEditors: ecstAsy
 */
module.exports = {
  title: 'ecstAsy 前端记录',
  description: 'ecstAsy 前端记录',
  dest: 'public',
  base: '/library/',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
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
      },
      ]
    }
    ],
    sidebar: [{
      title: '前言',
      path: '/',
      collapsable: false, // 不折叠
    }, {
      title: 'JavaScript',
      path: '/library/javascript/js-regular-function',
      collapsable: true,
      children: [
        {
          title: '常用函数',
          path: '/library/javascript/js-regular-function',
        }, {
          title: 'this指向',
          path: '/library/javascript/js-this',
        }, {
          title: 'hasOwnProperty',
          path: '/library/javascript/js-hasOwnProperty',
        }, {
          title: '闭包',
          path: '/library/javascript/js-closure',
        }, {
          title: '立即执行函数',
          path: '/library/javascript/js-IIFE',
        }, {
          title: 'HTTP TCP',
          path: '/library/javascript/js-HTTP-TCP',
        }, {
          title: '对象方法',
          path: '/library/javascript/js-object',
        }, {
          title: '常用正则',
          path: '/library/javascript/js-RegExp',
        }, {
          title: '节流和防抖',
          path: '/library/javascript/js-throttle-debounce',
        }, {
          title: '数组转对象',
          path: '/library/javascript/js-ArrayToObject',
        }, {
          title: 'a++ ++a 区别',
          path: '/library/javascript/js-a++-++a',
        }, {
          title: '继承',
          path: '/library/javascript/js-inheritance',
        }, {
          title: '时间处理',
          path: '/library/javascript/js-moment',
        }, {
          title: '输入框',
          path: '/library/javascript/js-Input',
        }, {
          title: '获取url参数',
          path: '/library/javascript/js-url',
        }, {
          title: '获取系统信息',
          path: '/library/javascript/js-systemInfo',
        }, {
          title: 'ThrowError',
          path: '/library/javascript/js-throw-error',
        }, {
          title: '冷知识',
          path: '/library/javascript/js-study',
        }
      ]
    }, {
      title: 'javascript技巧',
      path: '/library/js-skills/array',
      collapsable: true, // 不折叠
      children: [{
        title: '数组',
        path: '/library/js-skills/array'
      },
      {
        title: '布尔值',
        path: '/library/js-skills/boolean'
      }, {
        title: '元素',
        path: '/library/js-skills/dom'
      }, {
        title: '函数',
        path: '/library/js-skills/function'
      }, {
        title: '数值',
        path: '/library/js-skills/number'
      }, {
        title: '对象',
        path: '/library/js-skills/object'
      }, {
        title: '字符串',
        path: '/library/js-skills/string'
      }
      ],
    }, {
      title: 'Css',
      path: '/library/css/flex-ellipsis-more',
      collapsable: true,
      children: [
        {
          title: 'Flex-Ellipsis 查看更多',
          path: '/library/css/flex-ellipsis-more'
        }, {
          title: 'Flex 左2右1',
          path: '/library/css/flex-left2-right1'
        }, {
          title: '自定义单选框',
          path: '/library/css/radio-auto-css'
        }, {
          title: 'table 边框',
          path: '/library/css/table-border'
        }
      ]
    }, {
      title: 'ES6',
      path: '/library/es6/let-const',
      collapsable: true,
      children: [
        {
          title: 'let const',
          path: '/library/es6/let-const',
        }
      ]
    }, {
      title: 'React',
      path: '/library/react/context',
      collapsable: true,
      children: [
        {
          title: 'context',
          path: '/library/react/context',
        }, {
          title: 'input 框焦点',
          path: '/library/react/input-ref-focus',
        }, {
          title: 'Switch',
          path: '/library/react/switch',
        }, {
          title: '拖拽上传',
          path:'/library/react/drop-upload'
        }
      ]
    }, {
      title: 'Vue',
      path: '/library/vue/antd-vue-pro',
      collapsable: true,
      children: [
        {
          title: 'Antd-Vue-Pro',
          path: '/library/vue/antd-vue-pro',
        }, {
          title: 'Dom Scroll',
          path: '/library/vue/dom-scroll',
        }, {
          title: '全局注册组件',
          path: '/library/vue/global-registry-component',
        },
      ]
    }, {
      title: 'Plugin',
      path: 'library/plugin/web-excel',
      collapsable: true,
      children: [
        {
          title: 'Web 处理 Excel',
          path: 'library/plugin/web-excel',
        }
      ]
    }, {
      title: 'Taro',
      path: '/library/taro/taro-api',
      collapsable: true,
      children: [
        {
          title: '交互API封装',
          path: '/library/taro/taro-api'
        }, {
          title: 'Dva项目配置',
          path: '/library/taro/taro-dva-config'
        }, {
          title: '金钱输入框',
          path: '/library/taro/taro-input'
        }, {
          title: '配置 Mock 数据',
          path: '/library/taro/taro-mock'
        }, {
          title: '请求模板',
          path: '/library/taro/taro-request'
        }, {
          title: '渲染富文本',
          path: '/library/taro/taro-richtext'
        }, {
          title: 'Weapp H5 踩坑',
          path: '/library/taro/taro-weapp-h5'
        },
      ]
    }, {
      title: 'Uni-App',
      path: '/library/uni-app/uni-app-request',
      collapsable: true,
      children: [
        {
          title: '请求模板',
          path: '/library/uni-app/uni-app-request'
        }
      ]
    }, {
      title: 'Weapp',
      path: '/library/weapp/formId-collect',
      collapsable: true,
      children: [
        {
          title: '收集FormId(已过期)',
          path: '/library/weapp/formId-collect'
        }, {
          title: '左滑删除',
          path: '/library/weapp/scroll-touch'
        }, {
          title: '隐藏ScrollView滚动条',
          path: '/library/weapp/scrollView-scrollbar'
        }, {
          title: 'WebView And CoverView',
          path: '/library/weapp/webView-coverView'
        }
      ]
    }, {
      title: 'H5',
      path: '/library/h5/webkit-line-clamp',
      collapsable: true,
      children: [
        {
          title: 'webkit-line-clamp',
          path: '/library/h5/webkit-line-clamp'
        }
      ]
    }, {
      title: 'Git',
      path: '/library/git/git-command',
      collapsable: true,
      children: [
        {
          title: '常用命令行',
          path: '/library/git/git-command'
        }, {
          title: '常见报错',
          path: '/library/git/git-error'
        }
      ]
    }, {
      title: 'Tools',
      path: '/library/tools/decimal',
      collapsable: true,
      children: [
        {
          title: '金钱计数格式化',
          path: '/library/tools/decimal'
        }, {
          title: '身份证号码信息解析',
          path: '/library/tools/id-card'
        }, {
          title: 'localStorage',
          path: '/library/tools/localstorage'
        }, {
          title: 'JS + - × ÷ 浮点计算',
          path: '/library/tools/math-tool'
        }, {
          title: '金钱小写转大写',
          path: '/library/tools/money-lowercase-to-uppercase'
        }, {
          title: '对象中时间格式转换',
          path: '/library/tools/time-swatch'
        },
      ]
    }, {
      title: 'Node',
      path: '/library/node/fast-file',
      collapsable: true,
      children: [
        {
          title: '快速创建文件',
          path: '/library/node/fast-file',
        }, {
          title: 'node+express+mock',
          path: '/library/node/node-express-mock',
        }
      ]
      }, {
      title: 'Algorithm',
      path: '/library/algorithm/array',
      collapsable: true,
      children: [
        {
          title: 'Array',
          path:'/library/algorithm/array'
       }
     ]
    }
    ]
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}