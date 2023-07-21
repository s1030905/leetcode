// in-order 左=>根=>右
// recursive
var inorderTraversal = function (root) {
  const result = [];

  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return result;
};
// Iterator
var inorderTraversal = function (root) {
  let node = root;
  const inorder = [];
  const result = [];
  while (node || inorder.length) {
    // 如果node有左邊，放入inorder
    if (node) {
      inorder.push(node);
      node = node.left;
    } else {
      // 把最底層的左邊拋出，放入result，檢查上一個根有沒有右節點
      node = inorder.pop();
      result.push(node.val);
      node = node.right;
    }
  }
  return result;
};
