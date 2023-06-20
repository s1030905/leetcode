const arr = [1, 2, 100, 4, 5, 6, 7, 8, 9, 10, 51, 2, 2, 0];
function maxSum(arr, size) {
  const l = arr.length;
  let maxSum = -Infinity;
  if (arr.length < size) {
    return false;
  }
  for (let i = 0; i <= l - size; i++) {
    let temp_sum = 0;
    for (let j = i; j < i + size; j++) {
      temp_sum += arr[j];
    }
    if (temp_sum > maxSum) maxSum = temp_sum;
  }
  return maxSum;
}
console.log(maxSum(arr, 3));

// function minSum(arr, size) {
//   const l = arr.length;
//   let minSum = Infinity;
//   if (arr.length < size) {
//     return false;
//   }
//   for (let i = 0; i <= l - size; i++) {
//     let temp_sum = 0;
//     for (let j = i; j < i + size; j++) {
//       temp_sum += arr[j];
//     }
//     if (temp_sum < minSum) minSum = temp_sum;
//   }
//   return minSum;
// }
// console.log(minSum(arr, 3));

// [1, 2, 100, 4, 5, 6, 7, 8, 9, 10, 51, 2, 2, 0];
function maxSumPlus(arr, size) {
  if (arr.length < size) return null;
  let maxSum = 0;

  // 初始值
  for (let i = 0; i < size; i++) {
    maxSum += arr[i];
  }
  let tmpValue = maxSum;
  for (let i = 1; i <= arr.length - size; i++) {
    tmpValue = tmpValue - arr[i - 1] + arr[i + size - 1];
    if (tmpValue > maxSum) maxSum = tmpValue;
  }
  return maxSum;
}
console.log(maxSumPlus(arr, 3));
