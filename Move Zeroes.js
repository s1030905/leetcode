const cases = {
  case1: [0, 1, 0, 3, 12],
  case2: [0],
  case3: [4, 2, 4, 0, 0, 3, 0, 5, 1, 0],
};

// 第 1 次

// var moveZeroes = function (nums) {
//   const l = nums.length;
//   const zeroIndex = [];
//   for (const i in nums) {
//     if (nums[i] === 0) {
//       zeroIndex.push(i);
//     } else {
//       nums.push(nums[i]);
//     }
//   }
//   for (let i = 0; i < l; i++) {
//     nums.shift();
//   }
//   for (let i = 0; i < zeroIndex.length; i++) {
//     nums.push(0);
//   }
//   return nums;
// };
// console.log(moveZeroes(cases.case3));

// 第 2 次

var moveZeroes = function (nums) {
  const l = nums.length;
  let nonZeroPart = 0;
  let zeroPart = 0;
  for (const i in nums) {
    if (nums[i] !== 0) {
      nums[nonZeroPart] = nums[i];
      nonZeroPart += 1;
    } else {
      zeroPart += 1;
    }
  }
  for (let i = 0; i < zeroPart; i++) {
    nums[nonZeroPart + i] = 0;
  }
  return nums;
};
console.log(moveZeroes(cases.case3));
