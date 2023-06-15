const cases = {
  case1: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  case2: [1],
  case3: [5, 4, -1, 7, 8]
}

// 第 1 次

// var maxSubArray = function (nums) {
//   let left = new Array(nums)
//   let right = new Array(nums)
//   let leftSum = 0
//   let rightSum = 0
//   for (let i = 0; i < nums.length; i++) {
//     left[i] = nums[i] + leftSum
//     leftSum = left[i]
//   }
//   for (let i = nums.length - 1; i >= 0; i--) {
//     right[i] = nums[i] + rightSum
//     rightSum = right[i]
//   }
//   const leftMax = left.map(e => e).sort((a, b) => b - a)[0]
//   const rightMax = right.map(e => e).sort((a, b) => b - a)[0]
//   const end = left.findIndex(e => e === leftMax)
//   const start = right.findIndex(e => e === rightMax)
//   // nums.slice(start, end + 1)
//   return leftMax + rightMax - right[0]
// };
// console.log(maxSubArray(cases.case1))

// 第 2 次

var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i])
    maxSum = Math.max(currentSum, maxSum)
  }

  return maxSum;
}
console.log(maxSubArray(cases.case1))