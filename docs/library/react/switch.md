<h2 align="center">antd-design之Switch</h2>

#### Switch组件记录

使用 **Switch** 组件时候，如果和 _Form_ 配合使用，要设置 

> valuePropName: 'checked'

 才能更好的显示。

```js
import React from 'react';
import { Form, Switch } from 'antd';


<FormItem label='是否叠加' {...formLayout}>
  {
    getFieldDecorator('isSuperposition', {
      valuePropName: 'checked',
      initialValue: true,
    })(
      <Switch checkedChildren='是' unCheckedChildren='否' />
    )
  }
</FormItem>
```