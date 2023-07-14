var sortedSquares = function (nums) {
  let arr = new Array(nums.length);
  let [left, right] = [0, nums.length - 1];
  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      arr[i] = nums[right] ** 2;
      right--;
    } else {
      arr[i] = nums[left] ** 2;
      left++;
    }
  }
  return arr;
};
console.log(sortedSquares([-7, -3, 2, 3, 11]));
// [-4, -1, 0, 3, 10];
// [-7, -3, 2, 3, 11];
