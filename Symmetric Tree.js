// var isSymmetric = function (root) {
//   let length = root.length;
//   let layer = 0;
//   while (length > 0) {
//     length -= 2 ** layer;
//     layer++;
//   }
//   if (length < 0) return false;
//   let [left, right] = [0, 0];
//   let i = 0;
//   while (right <= root.length - 1) {
//     right += 2 ** i - 1;
//     while (left < right) {
//       if (root[left] !== root[right]) return false;
//       else {
//         left++;
//         right--;
//       }
//     }
//     i++;
//     left = 2 ** i - 1;
//     right = left;
//   }
//   return true;
// };

// ---------------------------------------------------------

var isSymmetric = function (root) {
  if (root == null) return true;
  return checker(root.left, root.right);
};

function checker(left, right) {
  if (left == null && right == null) return true;
  if (left == null || right == null) return false;
  if (left.val !== right.val) return false;

  return checker(left.left, right.right) && checker(left.right, right.left); // 判斷左右子樹是否都符合條件
}
console.log(isSymmetric([1, 2, 2, null, 3, null, 3]));
// [1, 2, 2, 3, 4, 4, 3]
// [1,2,2,null,3,null,3]
