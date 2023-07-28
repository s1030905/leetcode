var majorityElement = function (nums) {
  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    // 如果有在字典內就+1並確認是否為主要元素
    if (nums[i] in dic) {
      dic[nums[i]] += 1;
    } else {
      dic[nums[i]] = 1;
    }
    if (dic[nums[i]] > nums.length / 2) {
      return nums[i];
    }
  }
  return dic;
};
console.log(majorityElement([3, 2, 3], 3));
// Input: nums = [3, 2, 3]; Output: 3;
// Input: nums = [2,2,1,1,1,2,2] Output: 2
