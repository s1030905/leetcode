const cases = {
  case1: [1, 2, 3, 4],
  case2: [-1, 1, 0, -3, 3]
}

// 第 1 次嘗試

// var productExceptSelf = function (nums) {

//   const product = []
//   for (let i = 0; i < nums.length; i++) {
//     let left = 1
//     let right = 1
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === 0) {
//         right = 0
//         break
//       }
//       right *= nums[j]
//     }
//     for (let k = i - 1; k >= 0; k--) {
//       if (nums[k] === 0) {
//         left = 0
//         break
//       }
//       left *= nums[k]
//     }
//     if (left * right === -0) {
//       product.push(0)
//     } else {
//       product.push(left * right)
//     }

//   }
//   return product
// }

// console.log(productExceptSelf(cases.case2))

// 第 2 次嘗試

var productExceptSelf = function (nums) {
  const n = nums.length;
  const product = new Array(n);

  // 計算左側的產品
  let left = 1;
  for (let i = 0; i < n; i++) {
    product[i] = left;
    left *= nums[i];
  }

  // 計算右側的產品，同時將其與左側的產品相乘得到結果
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    product[i] *= right;
    right *= nums[i];
  }

  return product;
}

console.log(productExceptSelf(cases.case2))
