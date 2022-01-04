/*
 * @Author: ecstAsy
 * @Date: 2022-01-04 17:50:58
 * @LastEditTime: 2022-01-04 18:11:41
 * @LastEditors: ecstAsy
 */
module.exports = {
  title: 'ecstAsy 前端记录',
  description: 'ecstAsy 前端记录',
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
          title: "学前必读",
          path: "/"
        }]
    },
      {
        title: 'Taro',
        path: '/library/taro/taro-api',
        collapsable: false,
        children: [
          {
            title: "交互API封装",
            path: "/library/taro/taro-api"
          },{
            title: "Dva项目配置",
            path: "/library/taro/taro-dva-config"
          },{
            title: "金钱输入框",
            path: "/library/taro/taro-input"
          },{
            title: "配置 Mock 数据",
            path: "/library/taro/taro-mock"
          },{
            title: "请求模板",
            path: "/library/taro/taro-request"
          },{
            title: "渲染富文本",
            path: "/library/taro/taro-richtext"
          },{
            title: "Weapp H5 踩坑",
            path: "/library/taro/taro-weapp-h5"
          },
        ]
      },
      {
        title: "javascript技巧",
        path: '/library/js-skills/array',
        collapsable: false, // 不折叠
        children: [{
            title: "数组",
            path: "/library/js-skills/array"
          },
          {
            title: "布尔值",
            path: "/library/js-skills/boolean"
          },{
            title: "元素",
            path: "/library/js-skills/dom"
          },{
            title: "函数",
            path: "/library/js-skills/function"
          },{
            title: "数值",
            path: "/library/js-skills/number"
          },{
            title: "对象",
            path: "/library/js-skills/object"
          },{
            title: "字符串",
            path: "/library/js-skills/string"
          }
        ],
      }
    ]
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}