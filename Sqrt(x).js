var mySqrt = function (x) {
  // 邊界條件
  if (x < 2) return x;
  let ans = x;
  while (ans ** 2 >= x) {
    // 用 / 2的方式快速逼近答案
    if (Math.floor(ans / 2) ** 2 === x) return Math.floor(ans / 2);
    // 若ans次方小於x則改為遞減逼近答案
    ans = Math.floor(ans / 2) ** 2 > x ? Math.floor(ans / 2) : ans - 1;
  }
  return ans;
};
console.log(mySqrt(8456411));
