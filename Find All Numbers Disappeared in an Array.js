var findDisappearedNumbers = function (nums) {
  const l = nums.length;
  const index = new Array(l + 1);
  for (let i = 0; i < l; i++) {
    index[nums[i]] = [nums[i]];
  }
  const result = [];
  for (let i = 1; i < index.length; i++) {
    if (!index[i]) result.push(i);
  }
  return result;
};

// by map
var findDisappearedNumbers = function (nums) {
  const map = new Map();
  // new map
  nums.forEach((num, i) => map.set(num, i));
  const result = [];
  // 從數字 1 逐一檢查 到 nums.length
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) result.push(i);
  }
  return result;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
// Input: nums = [4,3,2,7,8,2,3,1] Output: [5,6]
// Input: nums = [1,1] Output: [2]
