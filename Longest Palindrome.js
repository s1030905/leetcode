// var longestPalindrome = function (s) {
//   // 建立map
//   const map = new Map();
//   // 各元素與對應的數量
//   for (const i of s) {
//     map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
//   }
//   // 統計 偶數的元素 與 奇數的元素 - 1
//   let sum = 0;
//   let oddMax = 0;
//   map.forEach((e) => {
//     if (e % 2 === 0) {
//       sum += e;
//     } else {
//       sum += e - 1;
//       oddMax = Math.max(e, oddMax);
//     }
//   });
//   // 若有奇數元素再加一(回文字串中 中間的那個)
//   return sum + (oddMax > 0 ? 1 : 0);
// };

var longestPalindrome = function (s) {
  // 建立Set與紀錄長度
  const charSet = new Set();
  let longestLength = 0;
  // 出現第一次加入set，第二次 longestLength + 2，並將其從set中刪除
  // 最後 set 會剩下 1個 s字串中個數為奇數的元素 ex: "aaabbc" => "ac"
  for (const char of s) {
    if (charSet.has(char)) {
      charSet.delete(char);
      longestLength += 2;
    } else {
      charSet.add(char);
    }
  }
  // 若set有剩再加一(回文字串中 中間的那個)
  return longestLength + (charSet.size > 0 ? 1 : 0);
};

console.log(longestPalindrome(s));
// Input: s = "abccccdd" Output: 7
// Input: s = "a" Output: 1
