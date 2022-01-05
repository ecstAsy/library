---
title: Vscode 代码片段配置记录
author: ecstAsy
date: "2022-01-04"
---

### 配置流程

**_汉化版本：（zh-cn）_**

- => 文件
- => 首选项
- => 用户代码片段
- => javascript.json

**_English：（en-us）_**

- => File
- => Preferences
- => User Snippets
- => javascript.json

```json
{
  // Place your snippets for javascript here. Each snippet is defined under a snippet name and has a prefix, body and
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
  // same ids are connected.
  "import": {
    "prefix": "import 导入资源",
    "body": "import Name from '';"
  },
  "react-class-comp": {
    "prefix": "React Class Component",
    "body": [
      "import React, { Component } from 'react';",
      "$2",
      "/**",
      "|--------------------------------------------------",
      "| @${1:CompName}",
      "| #Component",
      "| 描述",
      "|--------------------------------------------------",
      "*/",
      "$2",
      "class ${1:CompName} extends Component {",
      "$2",
      "\trender() {",
      "\t\treturn (",
      "\t\t\t<div>page${1:CompName}</div>",
      "\t\t)",
      "\t}",
      "}",
      "$2",
      "export default ${1:Compname}"
    ],
    "description": "React Class 类组件"
  },
  "react-function-comp": {
    "prefix": "React Function Component",
    "body": [
      "import React from 'react';",
      "$2",
      "/**",
      "|--------------------------------------------------",
      "| @${1:CompName}",
      "| #Component",
      "| 描述",
      "|--------------------------------------------------",
      "*/",
      "$2",
      "const ${1:CompName} = ({ ...props }) => {",
      "$2",
      "\treturn (",
      "\t\t<div>${1:CompName}</div>",
      "\t)",
      "}",
      "$2",
      "export default ${1:CompName}"
    ],
    "description": "React 函数式组件"
  },
  "react-html-func-comp": {
    "prefix": "React Html Function Component",
    "body": [
      "// Todo",
      "const ${1:CompName} = (props) =>",
      "\t<div>${1:CompName}</div>"
    ],
    "description": "React 函数式组件"
  },
  "dva-connect-store": {
    "prefix": "Dva Connect Store",
    "body": [
      "@connect(({ ${1:StoreName}, loading }) => ({",
      "\t...${1:StoreName},",
      "\tloading: loading.models.${1:StoreName},",
      "}))",
      "$2"
    ],
    "description": "dva 关联 store"
  },
  "dva-dispatch-store": {
    "prefix": "Dva Dispatch Store",
    "body": [
      "dispatch({",
      "\ttype: '${1:StorName}',",
      "\tpayload: {",
      "$2",
      "\t},",
      "})"
    ],
    "description": "dva 调用 store"
  },
  "dva-model-js": {
    "prefix": "Dva Model Js",
    "body": [
      "// import { Api } from './service';",
      "$2",
      "export default {",
      "\tnamespace: '${1:modelName}',",
      "\tstate: {",
      "$2",
      "\t},",
      "\tsubscriptions: {",
      "\t\tsetup({ dispatch, history }) {",
      "\t\t\thistory.listen(async location => {",
      "\t\t\t\tconst { pathname } = location;",
      "\t\t\t\tif (pathname === '/${1:modelName}') {",
      "\t\t\t\t\tconsole.log(pathname);",
      "\t\t\t\t}",
      "\t\t\t})",
      "\t\t}",
      "\t},",
      "\teffects: {",
      "\t\t// Todo",
      "\t\t* list({ payload ={} }, { call }) {",
      "\t\t\tconst { data } = yield call(list, payload);",
      "\t\t\tconsole.log(data)",
      "\t\t},",
      "\t},",
      "\treducers: {",
      "\t\tsave(state, { payload }) {",
      "\t\t\treturn { ...state, ...payload }",
      "\t\t}",
      "\t},",
      "}"
    ],
    "description": "dva 新建 model.js"
  },
  "dva-effects-action": {
    "prefix": "Dva Effects Action",
    "body": [
      "* ${1:action_name}({ payload ={} }, { call }) {",
      "\tconst { data } = yield call(Api.${2:actionName}, payload);",
      "\tconsole.log(data);",
      "\treturn data;",
      "},"
    ],
    "description": "dva 新建 action"
  },
  "form-props": {
    "prefix": "Form Props",
    "body": "form: { getFieldDecorator, validateFields, resetFields },",
    "description": "Antd Form 表单配置"
  },
  "form-html": {
    "prefix": "Form Html",
    "body": [
      "<FormItem label='${1:Name}' {...formLayout}>",
      "\t{",
      "\t\tgetFieldDecorator('${2:key}', {",
      "\t\t\tinitialValue: '初始值'",
      "\t\t})(",
      "\t\t\t<Input placeholder='请输入' style={{ width: 240 }} />",
      "\t\t)",
      "\t}",
      "</FormItem>"
    ],
    "description": "Antd Form 表单组件"
  },
  "form-rules": {
    "prefix": "Form Rules",
    "body": "rules: [{ required: true, message: '${1:Name}不能为空！' }],",
    "description": "Antd Form 表单校验"
  },
  "function-common": {
    "prefix": "Function Common Style",
    "body": ["function ${1:name} () {", "$2", "}"],
    "description": "普通函数"
  },
  "function-arrow": {
    "prefix": "Function Arrow Style",
    "body": ["const ${1:FuncName} = () => {", "$2", "};"],
    "description": "箭头函数"
  },
  "async-function-common": {
    "prefix": "Async Function Common  Style",
    "body": ["async function ${1:name} () {", "$2", "}"],
    "description": "普通Async函数"
  },
  "async-function-arrow": {
    "prefix": "Async Function Arrow Style",
    "body": ["const ${1:FuncName} = async () => {", "$2", "};"],
    "description": "箭头Async函数"
  },
  "array-from": {
    "prefix": "Array From Object Array",
    "body": "const values = Array.from(${2:array}, ({ ${1:key} }) => ${1:key});",
    "description": "从二维数组中获取一维数组"
  },
  "array-map": {
    "prefix": "Array Map Function",
    "body": "${1:array}.map((item, index) => {$2})",
    "description": "数组的map方法"
  },
  "array-forEach": {
    "prefix": "Array ForEach Function",
    "body": "${1:array}.forEach(item => {\n\tconst _item = item;\n})",
    "description": "数组的forEach方法"
  },
  "request-get": {
    "prefix": "Request GET Method",
    "body": [
      "// Todo",
      "export async function ${1:funcName}() {",
      "\treturn request(`${${2:Api}}`);",
      "}"
    ],
    "description": "Get 方法请求"
  },
  "request-post": {
    "prefix": "Request POST Method",
    "body": [
      "// Todo",
      "export async function ${1:funcName}(params) {",
      "\treturn request(`${${2:Api}}`, {",
      "\t\tmethod: 'POST',",
      "\t\tbody: {",
      "\t\t\t...params",
      "\t\t}",
      "\t})",
      "}"
    ],
    "description": "Post 方法请求"
  },
  "modal-props": {
    "prefix": "Modal Props",
    "body": [
      "// Todo",
      "const ${1:action}ModalProps = {",
      "\ttitle: '弹窗名称',",
      "\tvisible: ${1:action}ModalVisible,",
      "\tclosable: false,\n\tkeyboard: false,\n\tmaskClosable: false,",
      "\t// 确认",
      "\tonConfirm: async payload => {\n\t\tconsole.log(payload)\n\t},",
      "\t// 取消",
      "\tonCancel() {",
      "\t\tdispatch({",
      "\t\t\ttype: '${2:StoreName}',",
      "\t\t\tpayload: {\n\t\t\t\t${1:action}ModalVisible: false\n\t\t\t}",
      "\t\t})",
      "\t}",
      "};"
    ],
    "description": "Modal的Props配置"
  },
  "table-props": {
    "prefix": "Table Props",
    "body": [
      "// Todo",
      "const ${1:action}TableProps = {",
      "\tloading,",
      "\tdata: dataArray,",
      "\t// 分页",
      "\tonChange({ current, pageSize }) {\n\t\tconsole.log(current, pageSize)\n\t},",
      "\t// 操作",
      "\tonAction: async record => {\n\t\tconsole.log(record)\n\t},",
      "};"
    ],
    "description": "Table的Props配置"
  },
  "useState": {
    "prefix": "useState React Hooks",
    "body": "const [${1:state}, set${1:state}] = useState(value);",
    "description": "React Hooks useState"
  },
  "preventDefault": {
    "prefix": "PreventDefault",
    "body": "e.preventDefault();",
    "description": "阻止事件冒泡"
  },
  "taro-page": {
    "prefix": "Taro Page",
    "body": [
      "import Taro from '@tarojs/taro';",
      "import { useState, useEffect } from 'react';",
      "import { connect } from 'react-redux';",
      "import { View, Text, Image } from '@tarojs/components';",
      "import './index.scss';",
      "$2",
      "/**",
      "|--------------------------------------------------",
      "| @${1:PageName}",
      "| #Component",
      "| 描述",
      "|--------------------------------------------------",
      "*/",
      "$2",
      "const ${1:PageName} = ({ dispatch }) => {",
      "$2",
      "\treturn (",
      "\t\t<View>${1:PageName}</View>",
      "\t)",
      "};",
      "$2",
      "export default connect(({ common }) => ({ common })) (${1:PageName});"
    ],
    "description": "Taro Page 模板"
  },
  "taro-compt": {
    "prefix": "Taro Components",
    "body": [
      "import Taro from '@tarojs/taro';",
      "import { useState, useEffect } from 'react';",
      "import { View, Text, Image } from '@tarojs/components';",
      "import './index.scss';",
      "$2",
      "/**",
      "|--------------------------------------------------",
      "| @${1:CompName}",
      "| #Component",
      "| 描述",
      "|--------------------------------------------------",
      "*/",
      "$2",
      "const ${1:CompName} = ({ ...props }) => {",
      "$2",
      "\treturn (",
      "\t\t<View>${1:CompName}</View>",
      "\t)",
      "};",
      "$2",
      "export default ${1:CompName};"
    ],
    "description": "Taro Component 模板"
  }
}
```
