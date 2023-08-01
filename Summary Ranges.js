var summaryRanges = function (nums) {
  // 紀錄連續數列開始index
  let j = 0;
  let ans = [];
  // 多加一位元素 計算用
  nums.push("last");
  for (let i = 1; i < nums.length; i++) {
    // 若非等比級數上升
    if (nums[i] - nums[j] !== i - j) {
      // 若 i 與 j 距離大於 1，代表從 j 到 i - 1都是逐1上升
      if (i - j > 1) ans.push(nums[j] + "->" + nums[i - 1]);
      else ans.push(nums[j].toString());
      // 更新j
      j = i;
    }
  }
  return ans;
};
console.log(summaryRanges([0, 1, 2, 3]));
// Input: nums = [0,1,2,4,5,7] Output: ["0->2","4->5","7"]
// Input: nums = [0,2,3,4,6,8,9] Output: ["0","2->4","6","8->9"]
