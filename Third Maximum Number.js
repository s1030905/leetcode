var thirdMax = function (nums) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let max3 = -Infinity;
  for (const i of nums) {
    // 若陣列中與max1, max2, max3 其中一個相同跳下一個迴圈
    if (max1 === i || max2 === i || max3 === i) continue;
    // 若 i 比 max1 大，依序改變 max1, max2, max3 數字
    if (i > max1) {
      [max1, max2, max3] = [i, max1, max2];
      // 若 i 比 max2 大，依序改變 max2, max3 數字
    } else if (i > max2) {
      [max2, max3] = [i, max2];
      // 若 i 比 max3 大，改變 max3 數字
    } else if (i > max3) {
      max3 = i;
    }
  }
  // 若 max3 比 -Infinity 大 回傳 max3 否則 max1
  return max3 > -Infinity ? max3 : max1;
};
console.log(thirdMax([5, 2, 4, 1, 3, 6, 0]));
// Input: nums = [3,2,1] Output: 1
// Input: nums = [1,2] Output: 2
// Input: nums = [2,2,3,1] Output: 1
