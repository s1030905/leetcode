const cases = {
  case1: {
    nums: [4, 5, 6, 7, 0, 1, 2],
    target: 0,
  },
  case2: {
    nums: [4, 5, 6, 7, 0, 1, 2],
    target: 3,
  },
  case3: {
    nums: [1],
    target: 0,
  },
};
var search = function (nums, target) {
  // binary
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    // 如果mid左邊是sorted array
    if (nums[left] <= nums[mid]) {
      // 如果 target值 介於 左邊 array 範圍中
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1;
        // 如果 target值 不介於 左邊 array 範圍中
      } else {
        left = mid + 1;
      }
    }
    // 如果mid右邊是sorted array
    if (nums[right] >= nums[mid]) {
      // 如果 target值 介於 右邊 array 範圍中
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        // 如果 target值 不介於 右邊 array 範圍中
        right = mid - 1;
      }
    }
  }
  return -1;
};
console.log(search(cases.case3.nums, cases.case3.target));
