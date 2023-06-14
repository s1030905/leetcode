const cases = {
  case1: [[2, 7, 11, 15], [9]],
  case2: [[3, 2, 4], 6],
  case3: [[3, 3], 6]
}

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum(cases.case1[0], cases.case1[1]))