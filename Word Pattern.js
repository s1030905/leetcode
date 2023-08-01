var wordPattern = function (pattern, s) {
  // 將s字串拆成陣列
  s = s.split(" ");
  // 將s字串拆成陣列
  if (s.length !== pattern.length) return false;
  // run 兩遍互相比對確保兩兩對應，若只有一邊
  // "abba", "dog dog dog dog" 會是true，a => dog; b =>dog;
  let mapP = new Map();
  for (let i = 0; i < pattern.length; i++) {
    // 若 pattern[i] 已存在mapP 且 pattern[i]) !== s[i] 回傳 false
    if (mapP.has(pattern[i]) && mapP.get(pattern[i]) !== s[i]) return false;
    // 若 pattern[i] 不存在 mapP 建立對應 s[i] 值
    if (!mapP.has(pattern[i])) {
      mapP.set(pattern[i], s[i]);
    }
  }
  // run 第二遍
  let mapS = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mapS.has(s[i]) && mapS.get(s[i]) !== pattern[i]) return false;
    if (!mapS.has(s[i])) {
      mapS.set(s[i], pattern[i]);
    }
  }
  return true;
};

console.log(wordPattern("jquery", "dog cat cat dog"));
// Input: pattern = "abba", s = "dog cat cat dog" Output: true
// Input: pattern = "abba", s = "dog cat cat fish" Output: false
// Input: pattern = "aaaa", s = "dog cat cat dog" Output: false
// Input: pattern = "abba", s = "dog dog dog dog" Output: false
// Input: pattern = "abc", s = "b c a" Output: true
