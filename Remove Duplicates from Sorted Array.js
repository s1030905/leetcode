const cases = {
  case1: [1, 1, 2],
  case2: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
};

// 第 1 次 => 不符合解法要求

// var removeDuplicates = function (nums) {
//   const dic = new Set(nums);
//   let ans = [];
//   for (const i of dic) {
//     ans.push(i);
//   }
//   return ans;
// };
// console.log(removeDuplicates(cases.case2));

// 第 2 次 => 要求return uniNumberCount

var removeDuplicates = function (nums) {
  let currentNum = nums[0];
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== currentNum) {
      nums[j] = nums[i];
      currentNum = nums[j];
      j += 1;
    }
  }
  const l = nums.length;
  for (let i = 0; i < l - j; i++) {
    nums.pop();
  }
  return nums;
};
console.log(removeDuplicates(cases.case2));
