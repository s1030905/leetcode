var isPalindrome = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) ||
      (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) ||
      (s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57)
    ) {
      arr.push(s[i].toLowerCase());
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
  }
  // for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
  //   if (s.charAt(i) !== s.charAt(j)) return false;
  // }
  return true;
};

console.log(isPalindrome("0P"));
// "A man, a plan, a canal: Panama";
// "race a car";
// " "
