// Recursive

const getValue = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n % 2) {
    const newNumber = (n - 1) / 2;
    return getValue(newNumber) + getValue(newNumber + 1);
  } else if (n % 2 === 0) {
    return getValue(n / 2);
  }
  console.log(arr);
};
var getMaximumGenerated = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(getValue(i));
  }

  return Math.max(...arr);
};
console.log(getMaximumGenerated(7));
// Input: n = 7 Output: 3
// Input: n = 2 Output: 1
// Input: n = 3 Output: 2
// Input: n = 4 Output: 2
// Input: n = 5 Output: 3

// DP

// var getMaximumGenerated = function (n) {
//   const arr = [0, 1];
//   if (n < 2) return arr[n];

//   for (let i = 2; i <= n; i++) {
//     if (i % 2 === 0) {
//       arr[i] = arr[i / 2];
//     } else {
//       arr[i] = arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1];
//     }
//   }
//   return Math.max(...arr);
// };

// console.log(getMaximumGenerated(5));
// Input: n = 7 Output: 3
// Input: n = 2 Output: 1
// Input: n = 3 Output: 2
// Input: n = 4 Output: 2
// Input: n = 5 Output: 3
