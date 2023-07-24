var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n > 0) {
    return myPow(x, n - 1) * x;
  } else if (n < 0) {
    return myPow(x, n + 1) * (1 / x);
  }
};
console.log(myPow(2, -2));
// var myPow = function (x, n) {
//   if (n === 0) return 1;

//   let pow = Math.abs(n);

//   let result =
//     pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;

//   return n < 0 ? 1 / result : result;
// };
// console.log(myPow(2, 3));
// x = 2.00000, n = 10, Output = 1024.0000
// x = 2.10000, n = 3, Output = 9.26100
// x = 2.00000, n = -2, Output = 0.25000
