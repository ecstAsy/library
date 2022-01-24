---
title: 数组相关算法
author: ecstAsy
date: "2022-01-24"
---

### 冒泡排序算法

- 比较相邻的两个元素，如果前一个比后一个大，则交换位置。
- 第一轮的时候最后一个应该是最大的一个。
- 因为最后一个已经是最大的一个了，所以后面就不用比较了，以此类推第二个，第三个...

##### 代码实现

```js
function bubbleSort(arry) {
  const len = arry.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arry[j] > arry[j + 1]) {
        const sub = arry[j];
        arry[j] = arry[j + 1];
        arry[j + 1] = sub;
      }
    }
  }
}
```

### 选择排序

- 在未排序序列中找到最小（大）元素，放到初始位置；
- 再从剩余的的未排序序列中继续找到最小（大）元素，放到已排序序列末尾；
- 以此类推...

##### 代码实现

```js
function selectionSort(arry) {
  const len = arry.length;
  let minIx, minNm;
  for (let i = 0; i < len - 1; i++) {
    minIx = i;
    for (let j = i + 1; j < len; j++) {
      if (arry[minIx] < arry[j]) {
        minIx = j;
      }
    }
    minNm = arry[minIx];
    arry[minIx] = arry[i];
    arry[i] = minNm;
  }
}
```
