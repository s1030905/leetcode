var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;

  while (i < intervals.length - 1) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
      intervals.splice(i + 1, 1);
    } else {
      i++;
    }
  }

  return intervals;
};
console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]], Output: [[1,6],[8,10],[15,18]]
// Input: intervals = [[1,4],[4,5]], Output: [[1,5]]
// [[1,4],[5,6]], [[1,4],[5,6]]
