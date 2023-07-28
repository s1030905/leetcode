const cases = {
  case1: [1, 1, 2],
  case2: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
};

var removeDuplicates = function (nums) {
  // 當 nums 長度只有 1 直接回傳 1 (nums長度)
  if (nums.length === 1) return 1;
  // 從 nums[1] 開始比較數字是否相等
  let compare = nums[0];
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    // 如果不相等就令 nums[i] 為 nums 第 index
    if (nums[i] !== compare) {
      [nums[index], compare] = [nums[i], nums[i]];
      index++;
    }
  }
  const l = nums.length;
  // index 後的數字都 pop 出
  while (index < l) {
    nums.pop();
    index++;
  }
  return index;
};
console.log(removeDuplicates(cases.case2));
// Input: nums = [1,1,2] Output: 2, nums = [1,2,_]
// Input: nums = [0,0,1,1,1,2,2,3,3,4] Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
