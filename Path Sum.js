var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (root.left == null && root.right == null && root.val === targetSum) {
    return true;
  }
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
// [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
