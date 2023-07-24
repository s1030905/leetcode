var strStr = function (haystack, needle) {
  // 從0開始逐一檢查
  for (let i = 0; i < haystack.length - (needle.length - 1); i++) {
    const sub = haystack.slice(i, i + needle.length);
    if (sub === needle) return i;
  }
  return -1;
};
console.log(strStr("a", "a"));
// haystack = "sadbutsad", needle = "sad"
// haystack = "leetcode", needle = "leeto"
// haystack = "a", needle = "a"
