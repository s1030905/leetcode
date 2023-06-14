const cases = {
  case1: [1, 2, 3, 1],
  case2: [1, 2, 3, 4],
  case3: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
}

// 第 1 次嘗試

// var containsDuplicate = function (nums) {
//   const dic = {}
//   for (let i = 0; i < nums.length; i++) {
//     const index = nums[i]
//     if (dic[index] >= 0) {
//       return true
//     } else {
//       dic[index] = i
//     }
//   }
//   return false
// };

// console.log(containsDuplicate(cases.case3))

// 第 2 次嘗試

var containsDuplicate = function (nums) {
  const dic = new Set(nums)
  return dic.size !== nums.length
}

console.log(containsDuplicate(cases.case2))
