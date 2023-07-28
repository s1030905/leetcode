var longestCommonSubsequence = function (text1, text2) {
  // 建立網格、初始化邊界
  let dp = Array.from({ length: text1.length + 1 }, (e) =>
    Array(text2.length + 1).fill(0)
  );
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      // 對角線
      if (text1[i] === text2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        // 其他位置
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
};
console.log(longestCommonSubsequence("abca", "abcba"));
