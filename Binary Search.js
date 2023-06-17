nums = [
  1, 2, 3, 8, 9, 11, 15, 16, 18, 22, 24, 25, 26, 29, 30, 31, 32, 37, 44, 47, 55,
  61, 62, 69, 70, 71, 76, 84, 87, 88, 92, 97, 98, 99, 100, 101, 102, 112, 118,
  119, 120, 123, 125, 139, 140, 155, 161, 162, 163, 164,
];
// 1,2,3,5,9,10
function BinarySearch(nums, n) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (mid < n) {
      left = mid + 1;
    } else if (mid > n) {
      right = mid;
    } else {
      return mid;
    }
  }
}
console.log(BinarySearch([1, 2, 3, 5, 9, 10], 5));
