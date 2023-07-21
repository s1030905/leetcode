var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let total = 0;

  const sum = (node) => {
    if (!node) return 0;
    let [left, right] = [node.left, node.right];
    if (left && !left.right && !left.left) total += left.val;
    sum(left);
    sum(right);
  };
  sum(root);
  return total;
};
