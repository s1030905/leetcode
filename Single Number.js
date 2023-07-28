const cases = {
  case1: [2, 2, 1],
  case2: [4, 1, 2, 1, 2],
  case3: [1],
};
// 利用位元比較及XOR特性
var singleNumber = function (nums) {
  // 0000 避免汙染、初始化
  let uniqNum = 0;
  // 逐一比較
  for (let idx = 0; idx < nums.length; idx++) {
    // 當兩個數重複時會完全變成0000，若不一樣則會根據XOR合併成新數，只會留下不同的
    uniqNum = nums[idx] ^ uniqNum;
  }
  return uniqNum;
};
console.log(singleNumber([2, 2, 1]));
