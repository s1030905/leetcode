var mergeTrees = function (t1, t2) {
  if (t1 && t2) {
    const newNode = new TreeNode(t1.val + t2.val);
    newNode.left = mergeTrees(t1.left, t2.left);
    newNode.right = mergeTrees(t1.right, t2.right);
    return newNode;
  }
  return t1 || t2;
};
