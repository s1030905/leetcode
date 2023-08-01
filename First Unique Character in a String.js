var firstUniqChar = function (s) {
  // 建立map
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  // 如果該元素個數只有一個直接回傳
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) return i;
  }
  // 如果每個元素個數都不止有一個回傳 - 1
  return -1;
};
console.log(firstUniqChar("loveleetcode"));
// Input: s = "leetcode" Output: 0
// Input: s = "loveleetcode" Output: 2
// Input: s = "aabb" Output: -1
