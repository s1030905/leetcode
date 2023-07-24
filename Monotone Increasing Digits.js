var monotoneIncreasingDigits = function (n) {
  let numberStr = Array.from(n.toString(), Number);
  for (let i = numberStr.length - 2; i >= 0; i--) {
    if (numberStr[i] > numberStr[i + 1]) {
      numberStr[i]--;
      for (let j = i + 1; j < numberStr.length; j++) numberStr[j] = 9;
    }
  }
  return Number(numberStr.join(""));
};
console.log(monotoneIncreasingDigits(254861735));
// Input: n = 10 Output: 9
// Input: n = 1243 Output: 1234
// Input: n = 332 Output: 299
