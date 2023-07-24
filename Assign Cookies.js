var findContentChildren = function (g, s) {
  if (s.length === 0) return 0;
  const children = g.sort((a, b) => a - b);
  const cookies = s.sort((a, b) => a - b);
  let count = 0;
  let i = 0,
    j = 0;
  while (cookies[i]) {
    if (cookies[i] >= children[j]) {
      count++;
      j++;
    }
    i++;
    if (!children[j]) return count;
  }
  return count;
};
console.log(findContentChildren([1, 2], [1, 2, 3]));
// Input: g = [1,2,3], s = [1,1] Output: 1
// Input: g = [1,2], s = [1,2,3] Output: 2
