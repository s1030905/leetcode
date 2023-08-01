// var plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     // 從最後一位數開始檢查是否為9
//     if (digits[i] === 9) {
//       digits[i] = 0;
//     } else {
//       // 直接 + 1後回傳
//       digits[i] += 1;
//       return digits;
//     }
//   }
//   // 需要進位
//   digits.unshift(1);
//   return digits;
// };

// recursive
var plusOne = function (digits) {
  if (digits.length === 0) return [1];
  var last = digits.length - 1;
  if (digits[last] === 9) {
    return plusOne(digits.slice(0, last)).concat([0]);
  }
  return digits.slice(0, last).concat([digits[last] + 1]);
};
console.log(plusOne([9, 9]));
// Input: digits = [1,2,3] Output: [1,2,4]
// Input: digits = [4,3,2,1] Output: [4,3,2,2]
// Input: digits = [9] Output: [1,0]
