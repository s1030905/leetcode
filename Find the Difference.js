var findTheDifference = function (s, t) {
  const map = new Map();
  for (const i of s) {
    map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
  }
  for (const i of t) {
    if (map.has(i) && map.get(i) > 0) {
      map.set(i, map.get(i) - 1);
    } else {
      return false;
    }
  }
  return true;
};

// var findTheDifference = function (s, t) {
//   for (let i of s) {
//     t = t.replace(i, "");
//   }
//   return t;
// };

console.log(findTheDifference("", "y"));
// Input: s = "abcd", t = "abcde" Output: "e"
// Input: s = "", t = "y" Output: "y"
// Input: s = "a", t = "aa" Output: "a"
