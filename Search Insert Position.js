const cases = {
  case1: {
    nums: [1, 3, 5, 6],
    target: 5,
  },
  case2: {
    nums: [1, 3, 5, 6],
    target: 2,
  },
  case3: {
    nums: [1, 3, 5, 6],
    target: 7,
  },
};

// 第 1 次
// var searchInsert = function (nums, target) {
//   let insertIndex = 0;
//   if (target < nums[0]) {
//     return insertIndex;
//   }
//   for (let i in nums) {
//     if (nums[i] === target) {
//       return i;
//     }
//     if (nums[i] < target) {
//       insertIndex = Number(i);
//       console.log("--------------------");
//       console.log(i);
//     }
//   }
//   return insertIndex + 1;
// };
// console.log(searchInsert([1, 3, 5, 6], 0));

// 第 2 次 => binary
// var searchInsert = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (target > nums[mid]) {
//       left = mid + 1;
//     } else if (target < nums[mid]) {
//       right = mid - 1;
//     } else {
//       return mid;
//     }
//   }
//   if (nums[mid] < target) return mid + 1;
//   if (nums[mid] > target) return mid;
// };
// console.log(searchInsert([1, 3, 5, 6], 0));

// 第 3 次 => binary
var searchInsert = function (nums, target) {
  // 邊界條件
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  let [left, right] = [0, nums.length - 1];

  // binary
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else if (target === nums[mid]) {
      return mid;
    }
  }
  // 插入index
  return left;
};
console.log(searchInsert([1, 3, 5, 6], 8));
