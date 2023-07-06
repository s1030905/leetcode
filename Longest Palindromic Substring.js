// var check = function (s, i, j) {
//   while (i < j) {
//     if (s[i] !== s[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// };

// var longestPalindrome = function (s) {
//   const n = s.length;
//   let starting_index = 0;
//   let max_len = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       if (check(s, i, j)) {
//         if (j - i + 1 > max_len) {
//           max_len = j - i + 1;
//           starting_index = i;
//         }
//       }
//     }
//   }
//   return s.substring(starting_index, starting_index + max_len);
// };
const checker = (s, i, j) => {
  const str = s.slice(i, j + 1);
  for (let k = 0; k < str.length; k++) {
    if (str[k] !== str[str.length - 1 - k]) {
      return false;
    }
  }
  return true;
};
const longestPalindrome = (s) => {
  let maxLength = 0;
  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (checker(s, i, j)) {
        if (maxLength < j - i + 1) {
          maxLength = j - i + 1;
          startIndex = i;
        }
      }
    }
  }
  return s.slice(startIndex, startIndex + maxLength);
};
console.log(longestPalindrome(""));
// "babad"; [b,a,b,a,d][d,a,b,a,b]
// "cbbd"; dbbc
// "aacabdkacaa" [a,a,c,a,b,d,k,a,c,a,a][a,a,c,a,k,d,b,a,c,a,a]
