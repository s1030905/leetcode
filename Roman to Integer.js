var romanToInt = function (s) {
  // 建立字典
  const dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    // 如果前項小於後項變成相號，反之相加 ex: IV = 4
    dic[s[i]] < dic[s[i + 1]] ? (sum -= dic[s[i]]) : (sum += dic[s[i]]);
  }
  return sum;
};
// Input: s = "III", Output: 3
// Input: s = "LVIII" Output: 58
// Input: s = "MCMXCIV" Output: 1994
