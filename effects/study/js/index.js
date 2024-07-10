// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   setTimeout(() => {
//     console.log(i);
//   },1000)
// }

// var a;
// function todo() {
//   console.log(a);
//   a = 10;
//   console.log(a);
//   var a = 20;
//   console.log(a);
// }
// todo()

// var cagh = {};
// var id = '';
// var dkl = (cagh[id] = {
//   exports:{}
// })

// console.log(dkl);


// Promise.resolve().then(() => {
//   console.log(0);
//   return Promise.resolve(4);
// }).then((res) => {
//   console.log(res)
// })

// Promise.resolve().then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(5);
// }).then(() => {
//   console.log(6);
// })


// setTimeout(function () {
//   console.log(1)
// }, 0)
// new Promise(function (resolve) {
//   console.log(2)
//   console.log(3)
// }).then(function () {
//   console.log(4)
// })
// console.log(5)

Promise.myAll = function (params) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  })
  let i = 0;
  const result = [];
  for (const param of params) {
    const index = i;
    i++;
    Promise.resolve(param)
      .then((data) => {
        result[index] = data;
        i--;
        if (i === 0) {
          res(result);
        }
      }, rej)

  }

  if (i === 0) {
    res([]);
  }
  return p;
}

Promise.myAll([1, 2, 3, 4]).then(datas => {
  console.log(datas);
}).catch(err => {
  console.log(err);
})