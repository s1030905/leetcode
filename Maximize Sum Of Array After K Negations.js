// var largestSumAfterKNegations = function (nums, k) {
//   const sorted = nums.sort((a, b) => a - b);
//   let index = sorted.findIndex((e) => e >= 0);
//   if (index === -1) index = sorted.length;
//   let sum = 0;
//   let min = Infinity;
//   if (k >= index) {
//     for (const i of sorted) {
//       min = Math.min(min, Math.abs(i));
//       sum += Math.abs(i);
//     }
//     if ((k - index) % 2 === 1) {
//       return sum - 2 * min;
//     } else {
//       return sum;
//     }
//   } else {
//     for (const i of sorted) {
//       if (k > 0) {
//         sum += Math.abs(i);
//         k--;
//       } else {
//         sum += i;
//       }
//     }
//   }
//   return sum;
// };
var largestSumAfterKNegations = function (nums, k) {
  while (k > 0) {
    let i = nums.indexOf(Math.min(...nums)); //find the index of minimum item in array using inbuilt function
    nums[i] *= -1; //Toggle the minimum value to get the maximum sum
    k--;
  }
  return nums.reduce((acc, curr) => acc + curr); //return the sum using reduce function
};
console.log(largestSumAfterKNegations([-4, -2], 3));
// Input: nums = [4,2,3], k = 1 Output: 5
// Input: nums = [3,-1,0,2], k = 3 Output: 6
// Input: nums = [2,-3,-1,5,-4], k = 2 Output: 13
// Input: nums = [-4, -2], k = 5 Output: 13
