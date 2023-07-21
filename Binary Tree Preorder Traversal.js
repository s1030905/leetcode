// post order 根=>左=>右
// recursive
var preorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const preorder = (node) => {
    if (!node) return;
    result.push(node.val);
    let [left, right] = [node.left, node.right];
    if (left) preorder(left);
    if (right) preorder(right);
  };
  preorder(root);
  return result;
};
// Iterator
var preorderTraversal = function (root) {
  if (!root) return [];
  // 初始值root
  const preorder = [root];
  const result = [];
  while (preorder.length) {
    const node = preorder.shift();
    result.push(node.val);
    // 右邊
    if (node.right) preorder.unshift(node.right);
    // 左邊
    if (node.left) preorder.unshift(node.left);
  }
  return result;
};
// 因為要先處理左邊所以右邊的要先unshift放入result，才會晚點被shift出來處理
