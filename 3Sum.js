const cases = {
  case1: [-1, 0, 1, 2, -1, -4],
  case2: [0, 1, 1],
  case3: [0, 0, 0],
  case4: [-2, 0, 2, 3],
  // case4: [0, 2],
  // case5: [2, 0],
  // case6: [3, -1, 4, 5],
  // case7: [-3, -1, -1],
  // case8: [-2, 3, -4],
};
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1,
      sum = 0;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
      while (nums[i] === nums[i + 1]) i++;
    }
  }
  return result;
};
console.log(threeSum(cases.case1));
