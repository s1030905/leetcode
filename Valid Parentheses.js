const cases = {
  case1: "()",
  case2: "()[]{}",
  case3: "(]",
  case4: "",
};
var isValid = function (s) {
  const stack = [];
  const dic = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // 遍歷"s"
  for (let i = 0; i < s.length; i++) {
    // 如果是 右側括弧 將 左側括弧 放入stack中
    if (s[i] in dic) {
      stack.push(dic[s[i]]);
    } else {
      // 將左側括弧pop並比對是否符合
      let pop = stack.pop();
      if (pop !== s[i]) return false;
    }
  }
  // 若stack有剩則false
  return stack.length === 0;
};
console.log(isValid(cases.case2));
