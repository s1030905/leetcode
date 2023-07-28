// dp
var climbStairs = function (n) {
  // 邊界條件
  const dp = [0, 1, 2];
  // dp[n] = dp[i-1] 再踏2階 + dp[i-2] 再踏1階
  for (let i = 3; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[n];
};
console.log(climbStairs(45));
