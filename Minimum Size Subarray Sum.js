var minSubArrayLen = function (target, nums) {
  let min = Infinity;
  let j = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      sum -= nums[j];
      let distance = i - j + 1;
      if (distance < min) min = distance;
      j++;
    }
  }
  return min < Infinity ? min : 0;
};

// TIME LIMIT EXCEED

// var minSubArrayLen = function (target, nums) {
//   let min = Infinity;
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     count = 0;
//     let sum = 0;
//     let j = i;
//     while (sum < target) {
//       sum += nums[j];
//       count++;
//       j++;
//     }
//     if (sum >= target) {
//       count < min ? (min = count) : min;
//     }
//   }
//   return min < Infinity ? min : 0;
// };
console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));
