var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    // 避免溢位，如果 end 和 start 的值都很大，可能會超過 JavaScript 數字型態的最大值
    let mid = start + Math.floor((end - start) / 2);
    if (target === nums[mid]) {
      return true;
    } else if (nums[start] < nums[mid]) {
      if (nums[start] <= target && nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else if (nums[mid] < nums[start]) {
      if (nums[end] >= target && nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      start += 1;
    }
  }

  return false;
};
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
// Input: nums = [2,5,6,0,0,1,2], target = 0, Output: true
// Input: nums = [2,5,6,0,0,1,2], target = 3, Output: false
// [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
