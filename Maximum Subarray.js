const cases = {
  case1: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
  case2: [1],
  case3: [5, 4, -1, 7, 8],
  case4: [1, -2, 0],
  case5: [-1, -2],
  case6: [-2, -1],
  case7: [-2, 0, -1],
};
const maxSubArray = function (nums) {
  let start = nums[0];
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    // 決定是否更新最大值
    if (sum > max) {
      max = sum;
    }
    // 目前單一元素值 大於 sum => 更新start
    if (nums[i] > sum) {
      start = nums[i];
      sum = nums[i];
      // 決定是否更新最大值
      if (sum > max) {
        max = nums[i];
      }
    }
  }
  return max;
};
console.log(maxSubArray(cases.case7));
