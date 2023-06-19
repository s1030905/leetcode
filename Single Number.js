const cases = {
  case1: [2, 2, 1],
  case2: [4, 1, 2, 1, 2],
  case3: [1],
};

// 第 1 次
var singleNumber = function (nums) {
  const dic = {};
  for (const i of nums) {
    if (i in dic) {
      dic[i] += 1;
    } else {
      dic[i] = 1;
    }
  }
  console.log(dic);
  // const key = Object.keys(dic).find((k) => dic[k] === 1);
  for (const i in dic) {
    if (dic[i] === 1) {
      return i;
    }
  }
};
console.log(singleNumber(cases.case3));
