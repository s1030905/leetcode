// recursive
var invertTree = function (root) {
  if (!root) return [];
  let [left, right] = [root.left, root.right];
  [root.left, root.right] = [right, left];
  invertTree(left);
  invertTree(right);
  return root;
};
