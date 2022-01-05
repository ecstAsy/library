/*
 * @Author: ecstAsy
 * @Date: 2021-12-10 11:04:01
 * @LastEditTime: 2021-12-10 11:06:51
 * @LastEditors: ecstAsy
 */

class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}

export {
  IncreasingCounter
}