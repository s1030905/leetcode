var getRow = function (rowIndex) {
  // 邊界條件
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  // 遞迴 找上一個陣列
  const pre = getRow(rowIndex - 1);
  // 第一個元素為1
  const row = [1];
  // 遍歷上一個陣列將相鄰元素相加
  for (let i = 0; i < rowIndex - 1; i++) {
    row.push(pre[i] + pre[i + 1]);
  }
  row.push(1);
  return row;
};
console.log(getRow());

// Input: rowIndex = 0 Output: [1]
// Input: rowIndex = 1 Output: [1,1]
// Input: rowIndex = 2 Output: [1,2,1]
// Input: rowIndex = 3 Output: [1,3,3,1]
