var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (checker(i, j, s)) {
        count++;
      }
    }
  }
  return count;
};
const checker = (i, j, s) => {
  while (j >= i) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
console.log(countSubstrings("aa"));
// "abc";
// "aaa";
