const cases = {
  case1: [[2, 7, 11, 15], 9],
  case2: [[3, 2, 4], 6],
  case3: [[3, 3], 6]
}

var twoSum = function (nums, target) {
  const dic = {}
  for (let i = 0; i < nums.length; i++) {
    index = target - nums[i]

    // 當dic[index] = 0時不會觸發因為是falsy
    if (dic[index] >= 0) {

      return [i, dic[index]]
    } else {
      dic[nums[i]] = i
    }
  }
};

console.log(twoSum(cases.case2[0], cases.case2[1]))