var isPalindrome = function (s) {
  // 轉換成小寫
  s = s.toLowerCase();
  let format = "";
  // 將非小寫英文字母移除
  for (const i of s) {
    if (
      i.charCodeAt() <= "z".charCodeAt() &&
      i.charCodeAt() >= "a".charCodeAt()
    ) {
      format += i;
    }
  }
  // 對稱比較
  for (let i = 0, j = format.length - 1; i < j; i++, j--) {
    if (format[i] !== format[j]) return false;
    console.log(i, j);
  }
  return true;
};

console.log(isPalindrome(" "));
("A man, a plan, a canal: Panama");
("race a car");
(" ");
