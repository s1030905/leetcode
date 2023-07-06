const cases = {
  case1: "abcabcbb",
  case2: "bbbbb",
  case3: "pwwkew",
  case4: "aab",
  case5: "ab",
  case6: "dvdf",
  case7: "qrsvbspk",
  // case8: [-2, 3, -4],
};
var lengthOfLongestSubstring = function (s) {
  let max = 0,
    i = 0,
    j = 0;
  let dic = {};
  while (i < s.length) {
    while (s[i] in dic) {
      delete dic[s[j]];
      j++;
    }
    dic[s[i]] = i;
    max = Math.max(max, i - j + 1);
    i++;
  }
  return max;
};
// var lengthOfLongestSubstring = function (s) {
//   let set = new Set();
//   let left = 0;
//   let maxSize = 0;

//   if (s.length === 0) return 0;
//   if (s.length === 1) return 1;

//   for (let i = 0; i < s.length; i++) {
//     while (set.has(s[i])) {
//       set.delete(s[left]);
//       left++;
//     }
//     set.add(s[i]);
//     maxSize = Math.max(maxSize, i - left + 1);
//   }
//   return maxSize;
// };
console.log(lengthOfLongestSubstring(cases.case1));
