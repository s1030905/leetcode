const cases = {
  case1: [2, 3, -2, 4],
  case2: [-1, 0, -2],
  case3: [5, 4, -1, 0, -7, 0],
  case4: [0, 2],
  case5: [2, 0],
  case6: [3, -1, 4, 5],
  case7: [-3, -1, -1],
  case8: [-2, 3, -4],
};
var maxProduct = function (nums) {
  let max = nums[0];
  let positive = nums[0];
  let negative = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let curMax = Math.max(positive * nums[i], negative * nums[i], nums[i]);
    let curMin = Math.min(positive * nums[i], negative * nums[i], nums[i]);
    positive = curMax;
    negative = curMin;
    max = Math.max(curMax, max);
    console.log(`positive: ${positive}, negative: ${negative}, max: ${max}`);
  }

  return max;
};
console.log(maxProduct(cases.case1));
