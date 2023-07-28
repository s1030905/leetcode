var minDistance = function (word1, word2) {
  // 建立網格
  let dp = Array(word1.length + 1)
    .fill()
    .map(() => Array(word2.length + 1));

  for (let r = 0; r <= word1.length; r++) {
    for (let c = 0; c <= word2.length; c++) {
      // 初始化邊界
      if (r == 0) dp[0][c] = c;
      else if (c == 0) dp[r][0] = r;
      // 對角線
      else if (word1[r - 1] == word2[c - 1]) dp[r][c] = dp[r - 1][c - 1];
      // 其他位置
      else
        dp[r][c] = Math.min(dp[r][c - 1], dp[r - 1][c - 1], dp[r - 1][c]) + 1;
    }
  }
  console.log(dp);
  return dp[word1.length][word2.length];
};
console.log(minDistance("horse", "ros"));
