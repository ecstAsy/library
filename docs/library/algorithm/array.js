/*
 * @Author: ecstAsy
 * @Date: 2022-01-24 17:14:09
 * @LastEditTime: 2022-01-25 13:52:00
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
function insertionSort(arry) {
  const len = arry.length;
  for (let i = 1; i < len; i++) {
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

// 二分查找 Binary
function sort(arry, dest, start, end) {
  let ed = end || arry.length - 1,
    st = start || 0,
    ct = Math.floor((st + ed) / 2);
  if (arry[ct] == dest) {
    return ct
  }
  if (arry[ct] < dest) {
    return sort(arry, dest, 0, ct - 1)
  } else {
    return sort(arry, dest, ct + 1, arry.length)
  }
}
const arr = [2, 6, 13, 56, 45, 23, 45, 42, 1, 24, 45];

sort(arr, 4);

console.log(arr);