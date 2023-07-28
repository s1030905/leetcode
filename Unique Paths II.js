var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  // 如果起點或終點有障礙物 return false
  if (obstacleGrid[0][0] || obstacleGrid[m - 1][n - 1]) return false;

  // 紀錄路徑
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        obstacleGrid[i][j] = 1;
        continue;
      }
      // 障礙物
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
        continue;
      }
      // 邊界直線
      if (i === 0) {
        obstacleGrid[i][j] = obstacleGrid[i][j - 1];
        continue;
      }
      // 邊界直線
      if (j === 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j];
        continue;
      }
      // 其餘情況的路徑數目為上左兩側路徑數目相加
      obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
    }
  }
  console.log(obstacleGrid);
  return obstacleGrid[m - 1][n - 1];
};
console.log(
  uniquePathsWithObstacles([
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
);
// [
//   [1, 1, 1, 1],
//   [1, 0, 1, 2],
//   [1, 1, 2, 4],
//   [1, 2, 4, 8],
// ];
