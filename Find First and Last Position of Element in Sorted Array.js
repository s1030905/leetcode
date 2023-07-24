// 自己解的混合法??
var searchRange = function (nums, target) {
  if (!nums.length) return -1;
  let [left, right] = [0, nums.length - 1];
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      [left, right] = [mid, mid];
      break;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
    console.log(left, right, mid);
  }
  if (right >= left) {
    while (nums[left] === target || nums[right] === target) {
      if (nums[left] === target) left--;
      else right++;
    }
    return [left + 1, right - 1];
  }
  return -1;
};
console.log(searchRange([], 8));

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// binary
var searchRange = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    // 確認target 在 mid 左右
    nums[mid] >= target ? (r = mid) : (l = mid + 1);
  }

  if (nums[l] !== target) return [-1, -1];

  let start = l;

  r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);

    nums[mid] <= target ? (l = mid + 1) : (r = mid);
  }

  let end = nums[l] === target ? l : l - 1;

  return [start, end];
};

// Input: (nums = [5, 7, 7, 8, 8, 10]), (target = 8);// Output: [3, 4];
// Input: (nums = [5, 7, 7, 8, 8, 10]), (target = 6);// Output: [-1, -1];
// Input: (nums = []), (target = 0);// Output: [-1, -1];
