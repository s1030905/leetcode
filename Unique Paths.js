var uniquePaths = function (m, n) {
  let row = new Array(n).fill(1);
  let area = Array.from(Array(m).fill(row));

  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      area[y][x] = area[y][x - 1] + area[y - 1][x];
      console.log(area[y][x]);
    }
  }

  return area[m - 1][n - 1];
};
console.log(uniquePaths(2, 2));
