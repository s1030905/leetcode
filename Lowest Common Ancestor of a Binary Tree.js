var lowestCommonAncestor = function (root, p, q) {
  // 三種停止條件: 找到p, q 與 節點不存在
  if (!root || root === p || root === q) return root;
  // 分別往左右子樹找
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  // 如果在左右子樹分別找到 p, q 就回傳root，否則回傳最低公共子樹
  return left && right ? root : left || right;
};
