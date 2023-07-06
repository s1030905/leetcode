// var missingNumber = function (nums) {
//   let sortedArr = nums.sort((a, b) => a - b);
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (i !== sortedArr[i]) {
//       return i;
//     }
//   }
//   return sortedArr.length + 1;
// };

// var missingNumber = function (nums) {
//   let set = new Set(nums);
//   for (let i = 0; i < nums.length + 1; i++) {
//     if (!set.has(i)) {
//       return i;
//     }
//   }
// };

var missingNumber = function (nums) {
  let n = nums.length;
  let expSum = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    expSum -= nums[i];
  }
  return expSum;
};
console.log(missingNumber([3, 0, 1]));
// [3, 0, 1];
// [0, 1];
// [9, 6, 4, 2, 3, 5, 7, 0, 1];
