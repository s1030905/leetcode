var containsNearbyDuplicate = function (nums, k) {
  // 邊界條件
  if (nums.length === 1) return false;
  // 用map紀錄
  let hash = new Map();
  // 遍歷nums
  for (let i = 0; i < nums.length; i++) {
    // 重複的元素檢查是否符合 i - index <= k
    if (nums[i] in hash) {
      let index = hash[nums[i]];
      if (i - index <= k) return true;
      hash[nums[i]] = i;
    } else {
      // 將沒有重複的放入map
      hash[nums[i]] = i;
    }
  }
  return false;
};
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// Input: nums = [1,2,3,1], k = 3 Output: true
// Input: nums = [1,0,1,1], k = 1 Output: true
// Input: nums = [1,2,3,1,2,3], k = 2 Output: false
