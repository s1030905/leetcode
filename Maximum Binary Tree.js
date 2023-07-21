var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null;
  const sorted = [...nums].sort((a, b) => b - a); // [6,5,3,2,1,0]
  const index = nums.indexOf(sorted[0]);
  const root = new TreeNode(sorted[0]);
  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index + 1, nums.length));
  return root;
};
// [3,2,1,6,0,5] => [6,3,5,null,2,0,null,null,1]
