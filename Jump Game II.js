var jump = function (nums) {
  let size = nums.length;
  let [curJump, nextJump, n] = [0, 0, 0];
  if (size === 1) return 0;
  for (let i = 0; i < size; i++) {
    curJump = Math.max(curJump, i + nums[i]);
    if (i === nextJump) {
      nextJump = curJump;
      n += 1;
      if (curJump >= size - 1) {
        return n;
      }
    }
  }
};
console.log(jump([2, 3, 1, 1, 4]));
// Input: nums = [2, 3, 1, 1, 4]; Output: 2;
// Input: nums = [2, 3, 0, 1, 4]; Output: 2;
