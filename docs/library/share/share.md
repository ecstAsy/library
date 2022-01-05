---
title: 分享
author: ecstAsy
date: "2022-01-05"
---

### Vue React 语法

> Vue

```js
// vue2
<template>
    ....
</template>

<script>
export default {
  name: 'component-name',
  props: {
    ...
  },
  data () {
    ....
  },
  methods: {
    ....
  }
}
</script>

// vue3

<template>
...
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue';
export default defineComponent({
  setup(){
    const root = ref(null)

    watchEffect(() => {
      console.log(root.value) // => <div>This is a root element</div>
    },
    {
      flush: 'post'
    })

    return {
      root
    }
  }
})
</script>
// setup 语法糖
<script setup>
import { ref, watchEffect } from 'vue';
const root = ref(null)

watchEffect(() => {
  console.log(root.value) // => <div>This is a root element</div>
},
{
  flush: 'post'
})
</script>
```

> React

```jsx
// class组件
import React, { Component } from 'react';
export default class Demo extends Component {
  state = {
  };

  componentDidMount() {
    ...
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

### Vue v-bind && React Props

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

### Array.form

```js
const students = [
  { name: "张三", age: 20 },
  { name: "李四", age: 22 },
];

const ageMaps = Array.form(students, ({ age }) => age);
console.log(ageMaps); // [20, 22]
```
