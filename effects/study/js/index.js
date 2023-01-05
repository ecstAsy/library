for (var i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(() => {
    console.log(i);
  },1000)
}

var a;
function todo() {
  console.log(a);
  a = 10;
  console.log(a);
  var a = 20;
  console.log(a);
}
todo()