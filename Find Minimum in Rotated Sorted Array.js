const cases = {
  case1: [3, 4, 5, 1, 2],
  case2: [4, 5, 6, 7, 0, 1, 2],
  case3: [11, 13, 15, 17],
  case4: [1],
  case5: [2, 3, 1],
};

var findMin = function (nums) {
  const l = nums.length - 1;
  if (nums[0] < nums[l] || nums.length === 1) {
    return nums[0];
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid, l + 1);
  console.log(left, right);
  if (left[0] <= left[left.length - 1] && right[0] <= right[right.length - 1]) {
    return left[0] > right[0] ? right[0] : left[0];
  }
  if (left[0] <= left[left.length - 1] && left[0] < right[0]) {
    return findMin(right);
  }
  if (right[0] <= right[right.length - 1] && right[0] < left[0]) {
    return findMin(left);
  }
};
console.log(findMin([1]));

// var findMin = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = left + Math.floor((right - left) / 2);

//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }

//   return nums[left];
// };
