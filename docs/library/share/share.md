---
title: 分享
author: ecstAsy
date: "2022-01-06"
---

### 常用数据处理方法

- Array.form
- Object.Keys Object.Values Object.entries
- includes find filter reduce indexOf

```js
const students = [
  { name: "张三", age: 20 },
  { name: "李四", age: 22 },
];

const ageMaps = Array.form(students, ({ age }) => age);
console.log(ageMaps); // [20, 22]
```

### Git 常用命令

- 创建分支

  > git branch <branch_name>

- 把本地分支推送到远程分支，并跟踪该分支

  > git push --set-upstream origin <branch_name>

- 删除本地分支

  > git branch -D <branch_name>

- 查看本地分支

  > git branch

- 查看远程分支（包含线上存在的分支和本地缓存的远程分支）

  > git branch -a

- 查看分支关联关系

  > git remote show origin

- 删除本地远端分支缓存

  > git remote prune origin

- 查看本地关联远程仓库

  > git remote

- 修改本地关联仓库名字

  > git remote rename origin<old_name> gitee<new_name>

- 关联名字的提交方式

  > git push <origin_name> <branch_name>

- 撤销了你的 commit 操作，仍然保留您写的代码

  > git reset --soft HEAD^

- 如果 commit 注释写错了

  > git commit --amend

### 组件是如何分类的

- 业务组件
- 通用组件（非业务组件）
  - UI 组件

![Weapp Table](../../assets/share/share-1.png)

无论是 业务组件 或者 通用组件都具备组件本质所包含的三个性质扩展、通用、健壮

- **扩展性**：在原有组件基础上可 二次封装 扩展成新的组件符合设计的开闭原则

- **通用性**：根据组件接受的参数和组件中与业务的解耦比来衡量组件的通用性,并不是通用性占比 100%的组件就是最好的组件，需要根据 不同的场景 分析

- **健壮性**：避免组件中参数处理和函数执行过程可能出现的奔溃和错误导致程序的直接挂断，单测以对组件内部 做好边界处理，异常错误的捕获来衡量这一标准

### Antd 和 Element 组件封装设计的对比

- **Ant Design**

  - 直接脱离 UI
  - 接受参数，处理钩子
  - 而 Ant Design 则是对 API 和 UI 的二次封装

- **ElementUI**

  - 零业务代码
  - 优秀的 UI 和 API 设计
  - 易学和易用

### Vue React 语法对比

- 页面（组件）
  - React 组件名必须大驼峰格式

```js
// vue2
<template>
    ....
</template>

<script>
export default {
  name: 'name',
  props: {
    ...
  },
  data () {
    ....
  },
  mounted(){
    // beforeCreate created
    // beforeMount  mounted
    // beforeUpdate updated
    // activated deactivated
    // beforeDestroy destroyed
  },
  methods: {
    ....
  }
}
</script>
// Vue JSX
new Vue({
  el: '#demo',
  render: function (h) {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
      </AnchoredHeading>
    )
  }
})
// React 16.8 之前
// class组件
import React, { Component } from 'react';
export default class Demo extends Component {
  constructor(props){
    this.state = {
      ...
    };
  }

  componentDidMount() {
    // 1. 挂载卸载过程
    //   1.1.constructor()
    //   1.2.componentWillMount()
    //   1.3.componentDidMount()
    //   1.4.componentWillUnmount ()
    // 2. 更新过程
    //   2.1. componentWillReceiveProps (nextProps)
    //   2.2.shouldComponentUpdate(nextProps,nextState)
    //   2.3.componentWillUpdate (nextProps,nextState)
    //   2.4.componentDidUpdate(prevProps,prevState)
    //   2.5.render()
  }

  render() {
    const { .... } = this.props;
    return (
      <div>
        ....
      </div>
    );
  }
}

// 函数式组件
import React from 'react';

const copt = ({ ...props }) => {

  return <div> .... </div>
}

export default copt

// vue3
<template>
...
</template>

<script>
import { defineComponent, ref, watchEffect, onMounted } from 'vue';
export default defineComponent({
  setup(){
    const root = ref(null)

    watchEffect(() => {
      console.log(root.value) // => <div>This is a root element</div>
    },
    {
      flush: 'post'
    })

    onMounted(()=>{
      ...
    })
    return {
      root
    }
  }
})
</script>
// setup 语法糖
<script setup>
import { ref, watchEffect, onMounted } from 'vue';
const root = ref(null)

watchEffect(() => {
  console.log(root.value) // => <div>This is a root element</div>
},
{
  flush: 'post'
})

onMounted(()=>{
  ...
})

const func = () => {
  ...
}
</script>

// React 16.8 Hooks
import React, { useState, useEffect } from 'react';

const copt = ({ ...props }) => {

  const [state, setState] = useState(null)

  useEffect(()=>{
    // to do

    return ()=>{
     // 消除副作用
    }
  },[])

  return <div> .... </div>
}

export default copt
```

- class className

```js
// vue
<template>
  <div class="demo">...</div>
</template>
// React
<div className="demo">...</div>
```

- 事件

```js
// Vue
<template>
  <div @click="onClick">...</div>
</template>
// React
<div onClick={this.onClick}>...</div>
<div onClick={(event) => onClick(event)}>...</div>
```

- v-model && setState

```js
// Vue
<template>
  <input v-model="value" />
</template>;
// React
import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState(null);
  const onChange = (e) => setValue(e.target.value);
  return <input value={value} onChange={onChange} />;
};

import React, { Component } from "react";

class Input extends Component {
  state = {
    value: null,
  };
  onChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return <input value={value} onChange={this.onChange} />;
  }
}
```

- 子组件调用父组件方法 **Props**

```js
// Vue
...
methods: {
  onClick(){
    this.$emit('click', payload)
  }
}

// React
render(){
  const { onDrop } = this.props;
  return (
    <div
      onClick={event => this.props.onClick(event)}
      onDrop={event => onDrop(event)}
    >
      ...
    </div>
  )
}
```

- 父组件子调用组件方法 **ref**

```js
// Vue
methods: {
  onClick(copname){
    this.$refs[copname].onClick()
  }
}

// React
 handleChild = ()=> {
    this.$Child.childConsole();    // this上有了子组件方法
  }
  render() {
    return (
      <div>
        <Child onRef={(ref)=> {this.$Child=ref}} />
        <button onClick={this.handleChild}>调用子组件方法</button>
      </div>
    )
  }
```

- v-for && map (forEach)

```js
// Vue
<template>
  <ul>
    <li v-for="item in Items" :key="item">
      ...
    </li>
  </ul>
</template>

// React
render(){
  return (
    <ul>
      {
        Items.map(item=>
          <li key={item}>
            ...
          </li>
        )
      }
    </ul>
  )
}
```

- v-if、v-show && if else

```js
// Vue
<template>
  <div v-if="isShow"></div>
  <div v-show="isShow"></div>
</template>

// React
render(){
  return (
    <div>
     {
       isShow ?
       <div>1</div>
       :
       <div>2</div>
     }
     {
       isShow && <div>3</div>
     }
    </div>
  )
}
```

- v-bind && props

```js
const params = {
  id: 1,
  name: "vue",
  age: 20,
  ...
};

// vue
<componentA :id="params.id" :name="params.name" :age="params.age" />


<componentA v-bind="params" />

// react
<componentA {...params} />
```

### $attrs $listeners

```js
<template>
  <div>
    <el-input v-model="input"></el-input>
    <div>{{errorTip}}</div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    errorTip: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
    }
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

// 使用
<myInput v-model="input" :errorTip="errorTip" />

// 添加 disabled

<template>
  <div>
    <el-input v-model="input" :disabled="disabled"></el-input>
    <div>{{errorTip}}</div>
  </div>
</template>
<script>
export default {
  props: {
    //...
    disabled: {
      type: Boolean,
      default: false
    }
  },
  //...
}
</script>


// el-input 有 20+属性
// inheritAttrs
<template>
  <div>
    <el-input v-model="input" v-bind="$attrs"  v-on="$listeners"></el-input>
    <div>{{errorTip}}</div>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
    },
    errorTip: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
    }
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

// 使用
<myInput
  v-model="input"
  disabled
  :errorTip="errorTip"
  @blur="handleBlur">
</myInput>
```

### vue3

- > setup 选项是一个接收 props 和 context 的函数

```js
export default {
  name: "test",
  setup(props, context) {
    return {}; // 这里返回的任何内容都可以用于组件的其余部分
  },
  // 组件的“其余部分”
};
```

- > script setup 可以和 script 同时存在
- > script setup 给我们提供了大多数与 options api 等效的能力就是说 options api 能办到的事 script setup 大部分都能办到
- > 由于在执行 setup 函数的时候，还没有执行 Created 生命周期方法，所以在 setup 函数中，无法使用 data 和 methods 的变量和方法
- > 由于我们不能在 setup 函数中使用 data 和 methods，所以 Vue 为了避免我们错误的使用，直接将 setup 函数中的 this 修改成了 undefined

```js
<script>
  export default {
    name: 'CustomName',
    inheritAttrs: false,
    customOptions: {}
  }
</script>

<script setup>
  // script setup logic
</script>

// defineProps
 const props = defineProps({
    foo: String
  })
// defineEmits
const emit = defineEmits(['update', 'delete'])

// ref
const isShow = ref<boolen>(false)
// reactive
const params = reactive<{
  name:string
  age:number
}>({
  name:'张三',
  age:20
})
// Refs
const form = ref<Ref | null>(null)
// 功能函数提取出来放在单独的.js文件中
import { fun,login } from './test.js'
const test1 = fun()
const { test } = login()

// toRefs
setup(){
  const obj = reactive({
    name:'inline',
    gender:'男',
    age:'18',
  })

  return{
    ...toRefs(obj),
  }
}
```
