var findMinArrowShots = function (points) {
  if (points.length === 1) return 1;
  const sorted = points.sort((a, b) => a[1] - b[1]);
  console.log(sorted);
  let [end, count] = [sorted[0][1], 1];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i][0] > end) {
      end = sorted[i][1];
      count++;
    }
  }
  return count;
};
console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8],
  ])
);
// Input: points = [[10,16],[2,8],[1,6],[7,12]] Output: 2
// Input: points = [[1,2],[3,4],[5,6],[7,8]] Output: 4
// Input: points = [[1,2],[3,4],[5,6],[7,8]] Output: 4
// Input: points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]] Output: 2
