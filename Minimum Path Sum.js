function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;
  // 建立網格
  const dp = Array.from({ length: m }, (e) => Array(n).fill(0));
  // 初始化第一格
  dp[0][0] = grid[0][0];
  // 上邊界
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  // 左邊界
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  // 其餘格子
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // 從 上/左格子值 較小的過來
      dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}
console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
//Input: grid = [[1,3,1],[1,5,1],[4,2,1]] Output: 7
// Input: grid = [[1,2,3],[4,5,6]] Output: 12
