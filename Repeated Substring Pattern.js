// // 逐一尋找
// var repeatedSubstringPattern = function (s) {
//   const l = s.length;
//   for (let i = 0; i < l; i++) {
//     const sub = s.slice(0, i + 1);
//     if (l % sub.length !== 0) continue;
//     else if (sub === s.slice(i + 1, 2 * (i + 1))) {
//       let fullString = "";
//       for (let j = 0; j < l / (i + 1); j++) {
//         fullString += sub;
//       }
//       if (fullString === s) return true;
//     }
//   }
//   return false;
// };
// console.log(repeatedSubstringPattern("ababcababc"));

// 對折
var repeatedSubstringPattern = function (s) {
  const l = s.length;
  // if (l % 2 !== 0) return false;
  let index = l;
  while (index > 1) {
    if (index % 2 !== 0) index++;
    index /= 2;
    let sub = s.slice(0, index);
    console.log(sub);
    if (sub.repeat(l / index) === s) return true;
  }

  return false;
};
console.log(repeatedSubstringPattern("babbabbabbabbab"));
// "abab";
// "aba"
// "abcabcabcabc"
// "abaaabaa"
// "abababbbbbb"
// "ababcababc"
