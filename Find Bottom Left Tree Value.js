var findBottomLeftValue = function (root) {
  let depth = 0;
  let result = root.val;
  const recursive = (node, n) => {
    if (!node) return;
    let [left, right] = [node.left, node.right];
    if (left || right) n++;
    if (left && !left.left && n > depth) {
      depth = n;
      result = left.val;
    }
    if (right && !right.left && !right.right && n > depth) {
      depth = n;
      result = right.val;
    }
    recursive(left, n);
    recursive(right, n);
  };
  recursive(root, 0);
  return result;
};

// 精簡版
var findBottomLeftValue = function (root) {
  let depth = 0;
  let result = root.val;

  const recursive = (node, currDepth) => {
    if (!node) return;

    if (currDepth > depth) {
      depth = currDepth;
      result = node.val;
    }
    // 先遍歷左邊所以當運行到3時他的深度沒有大於目前深度所以result不會被更動
    recursive(node.left, currDepth + 1);
    recursive(node.right, currDepth + 1);
  };

  recursive(root, 1);
  return result;
};
