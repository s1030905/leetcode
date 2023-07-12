/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  // 不包含最後一個
  let maxAtTwoBefore = nums[0];
  let maxAtOneBefore = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length - 1; i++) {
    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
    maxAtTwoBefore = maxAtOneBefore;
    maxAtOneBefore = maxAtCurrent;
  }
  let result1 = maxAtOneBefore;

  // 不包含第一個
  maxAtTwoBefore = nums[1];
  maxAtOneBefore = Math.max(nums[1], nums[2]);

  for (let i = 3; i < nums.length; i++) {
    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);
    maxAtTwoBefore = maxAtOneBefore;
    maxAtOneBefore = maxAtCurrent;
  }
  let result2 = maxAtOneBefore;

  return Math.max(result1, result2);
};
