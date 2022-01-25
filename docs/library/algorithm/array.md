---
title: 数组相关算法
author: ecstAsy
date: "2022-01-25"
---

### 冒泡排序

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

### 插入排序

- 从第二个开始，默认第一个元素就是有序数组
- 和有序数组元素进行比较，如果小于元素就插入

##### 代码实现

```js
function insertionSort(arry) {
  const len = arry.length;
  // 升序
  for (let i = 1; i < len; i++) {
    // 和有序数组进行对比
    if (arry[i] < arry[i - 1]) {
      let sub = arry[i];
      let j = i - 1;
      arry[i] = arry[j];
      while (j >= 0 && sub < arry[j]) {
        arry[j + 1] = arry[j];
        j--;
      }
      arry[j + 1] = sub;
    }
  }
}
```
