function reverseWords(s) {
  s = s.trim();
  let [left, right] = [s.length - 1, s.length - 1];
  let result = [];
  while (left >= 0) {
    while (s[right] === " ") {
      right--;
      left--;
    }
    while (s[left] !== " " && left >= 0) {
      left--;
    }
    let sub = s.slice(left + 1, right + 1);
    result.push(sub);
    right = left;
  }
  return result.join(" ");
}
console.log(reverseWords("a good   example"));
("the sky is blue");
("  hello world  ");
("a good   example");
