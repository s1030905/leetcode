var isIsomorphic = function (s, t) {
  // 初始檢查
  if (s.length !== t.length) {
    return false;
  }
  // 建立互相映射Map
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    // 如果該元素已存在 且 兩邊映射Map對應數量不相等
    if (
      (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) ||
      (tMap.has(t[i]) && tMap.get(t[i]) !== s[i])
    ) {
      return false;
    }

    sMap.set(s[i], t[i]);
    tMap.set(t[i], s[i]);
  }

  return true;
};

console.log(isIsomorphic("sbb", "gga"));
// Input: s = "egg", t = "add" Output: true
// Input: s = "foo", t = "bar" Output: false
// Input: s = "paper", t = "title" Output: true
