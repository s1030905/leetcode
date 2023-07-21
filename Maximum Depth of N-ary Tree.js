// 精簡版
var maxDepth = function (root) {
  if (!root) return 0;
  let depth = 0;
  for (const i of root.children) {
    depth = Math.max(maxDepth(i), depth);
  }
  return depth + 1;
};

// 輔助版
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  const recursive = (node, depth) => {
    if (depth > max) max = depth;
    for (const i of node.children) {
      recursive(i, depth + 1);
    }
  };
  recursive(root, 1);
  return max;
};
