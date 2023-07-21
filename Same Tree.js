// var isSameTree = function (p, q) {
//   if (p == null && q == null) return true;

//   function checker(p, q) {
//     if (p == null && q == null) return true;
//     if (p === null || q === null) return false;
//     if (p.val !== q.val) return false;
//     return checker(p.left, q.left) && checker(p.right, q.right); // 判斷左右子樹是否都符合條件
//   }
//   return checker(p, q);
// };

var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if ((!p && q) || (!q && p) || p.val !== q.val) return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};
console.log(isSameTree([1, 2, 1], [1, 2, 3]));
// [1, 2, 3], [1, 2, 3]
// [1, 2, 1], [1, 1, 2]
