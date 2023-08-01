var findMaxConsecutiveOnes = function (nums) {
  // 紀錄 目前連續數目 與 最大值
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    // 若元素 === 1紀錄目前連續數目
    if (nums[i] === 1) {
      count++;
    } else {
      // 若元素 !== 1 刷新目前連續數目
      count = 0;
    }
    // 是否大於最大值
    max = Math.max(count, max);
  }
  return max;
};
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
// Input: nums = [1,1,0,1,1,1] Output: 3
// Input: nums = [1,0,1,1,0,1] Output: 2
