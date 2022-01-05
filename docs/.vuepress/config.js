/*
 * @Author: ecstAsy
 * @Date: 2022-01-04 17:50:58
 * @LastEditTime: 2022-01-05 09:53:02
 * @LastEditors: ecstAsy
 */
module.exports = {
  title: 'ecstAsy 前端记录',
  description: 'ecstAsy 前端记录',
  base:'/ecstAsy-library/',
  theme: 'reco',
  themeConfig: {
    subSidebar: 'auto',
    nav: [{
      text: '首页',
      link: '/'
    },
    {
      text: 'ecstAsy 的前端博客',
      items: [{
        text: 'Github',
        link: 'https://github.com/ecstAsy/ecstAsy-library.git'
      },
      ]
    }
    ],
    sidebar: [{
      title: '欢迎学习',
      path: '/',
      collapsable: false, // 不折叠
      children: [{
        title: '学前必读',
        path: '/'
      }]
    },
    {
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
    },
    {
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
    },
    {
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
          path:'/library/uni-app/uni-app-request'
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
        },{
          title: '隐藏ScrollView滚动条',
          path: '/library/weapp/scrollView-scrollbar'
        }, {
          title: 'WebView And CoverView',
          path: '/library/weapp/webView-coverView'
        }
      ]
    }, {
      title: 'Git',
      path: '/library/git/decimal',
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
          title: '金钱计数格式化',
          path: '/library/tools/id-card'
        }, {
          title: '金钱计数格式化',
          path: '/library/tools/localstorage'
        }, {
          title: '金钱计数格式化',
          path: '/library/tools/math-tool'
        }, {
          title: '金钱计数格式化',
          path: '/library/tools/money-lowercase-to-uppercase'
        }, {
          title: '金钱计数格式化',
          path: '/library/tools/time-swatch'
        },
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