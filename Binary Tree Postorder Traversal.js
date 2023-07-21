// 左=>右=>根
// recursive
var postorderTraversal = function (root) {
  const result = [];
  const recursive = (node) => {
    if (!node) return;

    if (node.left) recursive(node.left);
    if (node.right) recursive(node.right);
    result.push(node.val);
  };

  recursive(root);
  return result;
};

// Iterator
var postorderTraversal = function (root) {
  if (!root) return [];
  let stack = [],
    res = [];
  stack.push(root);
  while (stack.length) {
    let node = stack[stack.length - 1];
    if (node.left) {
      stack.push(node.left);
      node.left = null;
    } else if (node.right) {
      stack.push(node.right);
      node.right = null;
    } else res.push(stack.pop().val);
  }
  return res;
};
