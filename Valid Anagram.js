// Example 1
// Input: (s = "anagram"), (t = "nagaram");
// Output: true;

// Example 2
// Input: (s = "rat"), (t = "car");
// Output: false;

// 第 1 次 => hash
// var isAnagram = function (s, t) {
//   const dic1 = new Set(s);
//   const dic2 = new Set(t);
//   return dic1 === dic2;
//   // for (let i = 0; i < t.length; i++) {
//   //   if (dic.has(t[i])) {
//   //     result = true;
//   //   } else {
//   //     return (result = false);
//   //   }
//   // }
//   // return result;
// };
// console.log(isAnagram("anagram", "nagaram"));

// 第 2 次
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const counterT = {};
  const counterS = {};
  // const t_arr = t.split("");
  // const s_arr = s.split("");
  for (let i = 0; i < t.length; i++) {
    if (counterT[t.charCodeAt(i)] >= 0) {
      counterT[t.charCodeAt(i)] += 1;
    } else {
      counterT[t.charCodeAt(i)] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (counterS[s.charCodeAt(i)] >= 0) {
      counterS[s.charCodeAt(i)] += 1;
    } else {
      counterS[s.charCodeAt(i)] = 1;
    }
  }
  for (let i in counterS) {
    if (counterT[i] !== counterS[i]) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram("rat", "car"));
