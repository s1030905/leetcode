var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 1) return 0;
  // 以結尾排序，確保intervals是緩慢成長的 => 移除最少intervals
  const sortedIntervals = intervals.sort((a, b) => a[1] - b[1]);
  let [count, end] = [0, sortedIntervals[0][1]];
  // 若發稱重疊count+1
  for (let i = 1; i < sortedIntervals.length; i++) {
    if (sortedIntervals[i][0] < end) {
      count++;
    } else {
      end = sortedIntervals[i][1];
    }
  }
  return count;
};
console.log(
  eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ])
);
// [[1,2],[2,3],[3,4],[1,3]]
// [[1,2],[1,2],[1,2]]
// [[1,2],[2,3]]
// [[1,100],[11,22],[1,11],[2,12]]
