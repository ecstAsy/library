/*
 * @Author: ecstAsy
 * @Date: 2022-01-24 17:14:09
 * @LastEditTime: 2022-01-24 18:00:47
 * @LastEditors: ecstAsy
 */

// 冒泡排序
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


// 选择排序
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

// 插入排序 Insertion
function sort(arry) {
  const len = arry.length;
  for (let i = 1; i < len - 1; i++) {
    if (arry[i] < arry[i - 1]) {
      let 
    }
  }
}
const arr = [2, 6, 13, 56,45, 23, 45, 42, 1, 24,45];

sort(arr);

console.log(arr);