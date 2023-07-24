var mySqrt = function (x) {
  let n = x;
  let m = n;
  while (n ** 2 >= x) {
    if (n === 1) return 1;
    if (Math.floor(n / 2) ** 2 === x) return Math.floor(n / 2);
    else if (Math.floor(n / 2) ** 2 > x) {
      n = Math.floor(n / 2) + 1;
      m = n;
    } else if (Math.floor(m) ** 2 > x) {
      n--;
      m = n;
    }
  }
  return n;
};
console.log(mySqrt(9));
// Input: x = 4, Output: 2
// Input: x = 8, Output: 2
