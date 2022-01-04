/*
 * @Author: ecstAsy
 * @Date: 2022-01-04 17:50:58
 * @LastEditTime: 2022-01-04 17:55:02
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