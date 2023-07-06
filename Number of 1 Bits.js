// var hammingWeight = function (n) {
//   return n.toString(2).split("0").join("").length;
// };
var hammingWeight = function (n) {
  let count = 0;
  for (let i = 0; i < 32; i++) {
    count += n & 1;
    n = n >> 1;
  }
  return count;
};
// 00000000000000000000000000001011;
// 00000000000000000000000010000000;
// 11111111111111111111111111111101;
