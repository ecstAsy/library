const AS = [{
    name: 'a',
    age: 18
  },
  {
    name: 'b',
    age: 19
  },
  {
    name: 'c',
    age: 14
  },
];

const _toString = Object.prototype.toString;

console.log(_toString);

function toRawType(value) {
  return _toString.call(value)
}

console.log(toRawType(AS));

const _str = '3456789';
console.log(_str.slice(2, -1));


const API = {
  getName: {
    url: 'api/user/name',
    method: 'post'
  },
  getPhone: {
    url: 'api/user/phone',
    method: 'get'
  }
}


// var removeDuplicates = function (nums) {
//   var res = nums.filter(function (item, index, array) {
//     return array.indexOf(item) === index
//   })
//   return res
// };

var removeDuplicates = function (nums) {
  const arr = [...new Set(nums)];
  nums.splice(0, nums.length, ...arr)
  return arr.length
};

const arry = [1, 1, 2];

console.log(removeDuplicates(arry));

const arry1 = [1, [2, [3, [4, [5, [6]]]]]];
// const flatten = (arry) => {
//   let res = [];
//   arry.forEach(item => {
//     if (Array.isArray(item)) {
//       res = [...res, ...flatten(item)]
//     } else {
//       res = [...res, item]
//     }
//   });
//   return res
// }

function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    console.log(arr);
    arr = [].concat(...arr);
  }
  return arr;
}

console.log(flatten(arry1));
console.log(arry1.flat(6));

const fg = {
  name: 'lily'
}
console.log(Array.isArray([]))