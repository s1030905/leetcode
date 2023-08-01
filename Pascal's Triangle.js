var generate = function (numRows) {
  // 邊界條件
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  // 遞迴 找上一個陣列
  const pre = generate(numRows - 1);
  const last = pre[pre.length - 1];
  // 第一個元素為1
  const sub = [1];
  // 遍歷上一個陣列將相鄰元素相加
  for (let i = 0; i < numRows - 2; i++) {
    sub.push(last[i] + last[i + 1]);
  }
  sub.push(1);
  pre.push(sub);
  return pre;
};
console.log(generate(5));
// Input: numRows = 5; Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
