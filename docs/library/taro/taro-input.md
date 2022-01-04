<h2 align="center">Taro 项目金钱输入框</h2>

### 代码

- jsx
```js
import React, { useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Input } from '@tarojs/components';

const MoneyInput = () => {
  const [price,setPrice] = useState(null);
  const onChange = e => {
    let _price = null;
    const Value = e.target.value;
    if (Value) {
      if (Value.split('.').length > 2) {
        _price = null;
      } else {
        _price = Value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3');
      }
    } else {
      _price = null;
    }
    setPrice(_price);
  }
  return (
    <View>
      <Input className='input font-medium' type='digit' placeholder='请输入加油金额' value={price} onBlur={e => onChange(e)} />
    </View>  
  )
}

export default MoneyInput
```