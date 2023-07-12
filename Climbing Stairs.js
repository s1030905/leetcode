// Time Limit Exceeded
// var climbStairs = function (n) {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   else {
//     return climbStairs(n - 1) + climbStairs(n - 2);
//   }
// };
// console.log("---------------result----------------------");
// console.log(climbStairs(45));

var climbStairs = function (n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    let sum = arr[i - 1] + arr[i - 2];
    arr.push(sum);
  }
  return arr[n];
};
console.log(climbStairs(45));
