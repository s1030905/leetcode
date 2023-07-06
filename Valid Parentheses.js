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
  for (let i = 0; i < s.length; i++) {
    if (s[i] in dic) {
      stack.push(dic[s[i]]);
    } else {
      let pop = stack.pop();
      if (pop !== s[i]) return false;
    }
  }

  return stack.length === 0;
};
console.log(isValid(cases.case2));
