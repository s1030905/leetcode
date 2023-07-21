// DFS(Depth-First Search) 遞迴
var countNodes = function (root) {
  if (!root) return 0;
  if (root.left !== null && !root.right) {
    return countNodes(root.left) + 1;
  } else if (root.right !== null && !root.left) {
    return countNodes(root.right) + 1;
  }
  return countNodes(root.right) + countNodes(root.left) + 1;
};

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// Binary Search
// Time O(d^2) = O((log n)^2), where d is a tree depth
// Space O(1)
function countNodes(root) {
  // if the tree is empty
  if (root == null) return 0;

  const d = getDepth(root);

  // Last level nodes are enumerated from 0 to 2^d - 1 (left -> right).
  // Perform binary search to check how many nodes exist.
  let l = 0;
  let r = 2 ** d - 1;
  while (l <= r) {
    const m = ~~((l + r) / 2);
    if (exists(m, d, root)) l = m + 1;
    else r = m - 1;
  }

  // The tree contains 2^d - 1 nodes on the first (d - 1) levels
  // and l nodes on the last level.
  return 2 ** d - 1 + l;
}

// Return tree depth in O(d) time.
function getDepth(node) {
  let d = 0;
  while (node.left != null) {
    node = node.left;
    d++;
  }
  return d;
}

// Last level nodes are enumerated from 0 to 2^d - 1 (left -> right).
// Return true if last level node idx exists.
// Binary search with O(d) complexity.
function exists(idx, d, node) {
  let l = 0;
  let r = 2 ** d - 1;
  while (l < r) {
    const m = ~~((l + r) / 2);
    if (idx > m) {
      node = node.right;
      l = m + 1;
    } else {
      node = node.left;
      r = m;
    }
  }
  return node != null;
}
