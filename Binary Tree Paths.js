var binaryTreePaths = function (root) {
  let result = [];
  let path = "";
  if (!root) return result;
  const recursive = (node, path) => {
    if (!node) return;
    if (!node.left && !node.right) {
      path += `${node.val.toString()}`;
      result.push(path);
      return;
    }
    path += `${node.val.toString()}->`;
    recursive(node.left, path);
    recursive(node.right, path);
  };
  recursive(root, path);
  return result;
};
