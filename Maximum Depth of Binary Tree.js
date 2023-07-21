var maxDepth = function (root) {
  if (!root) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
};
console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
// [3,9,20,null,null,15,7]
// [1,null,2]
