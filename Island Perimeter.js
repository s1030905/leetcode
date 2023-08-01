var islandPerimeter = function (grid) {
  // 計算grid 的長寬
  const row = grid.length;
  const col = grid[0].length;
  // 計算陸地的邊長
  let perimeter = 0;
  // 逐格計算
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // 逐格計算
      if (grid[i][j]) {
        // 一塊陸地有4個邊
        perimeter += 4;
        // 左邊有土地相鄰
        if (i > 0 && grid[i - 1][j]) perimeter--;
        // 右邊有土地相鄰
        if (i < row - 1 && grid[i + 1][j]) perimeter--;
        // 上面有土地相鄰
        if (j > 0 && grid[i][j - 1]) perimeter--;
        // 下面有土地相鄰
        if (j < col - 1 && grid[i][j + 1]) perimeter--;
      }
    }
  }
  return perimeter;
};
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] Output: 16
// Input: grid = [[1]] Output: 4
// Input: grid = [[1,0]] Output: 4
