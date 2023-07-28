var uniquePaths = function (m, n) {
  // 建立對應地圖空表格
  let row = new Array(n).fill(1);
  let area = Array.from(Array(m).fill(row));

  // 每格紀錄不同路徑總數
  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      // 每格路徑總數都是上、左欄位相加
      area[y][x] = area[y][x - 1] + area[y - 1][x];
      console.log(area[y][x]);
    }
  }

  return area[m - 1][n - 1];
};
console.log(uniquePaths(1, 1));
