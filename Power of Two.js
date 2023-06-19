const cases = {
  case1: 1,
  case2: 16,
  case3: 3,
  case4: 0,
};

// 第 1 次

// var isPowerOfTwo = function (n) {
//   if (n === 0) {
//     return false;
//   } else if (n === 1) {
//     return true;
//   } else if (n % 2 === 0) {
//     return isPowerOfTwo(n / 2);
//   } else {
//     return false;
//   }
// };
// console.log(isPowerOfTwo(200));

// 第 2 次
var isPowerOfTwo = function (n) {
  return Math.log2(n) % 1 === 0;
};
console.log(isPowerOfTwo(200));
