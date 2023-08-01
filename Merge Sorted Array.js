// merge sort
var merge = function (nums1, m, nums2, n) {
  // map num1
  const nums3 = nums1.map((e) => e);
  let i = 0,
    j = 0,
    k = 0; // 多一個變數計算nums1
  while (i < m && j < n) {
    if (nums3[i] <= nums2[j]) {
      nums1[k] = nums3[i];
      i++;
    } else {
      nums1[k] = nums2[j];
      j++;
    }
    k++;
  }
  while (j < n) {
    nums1[k] = nums2[j];
    j++;
    k++;
  }
  while (i < m) {
    nums1[k] = nums3[i];
    i++;
    k++;
  }
  return nums1;
};

console.log(merge([0], 0, [1], 1));
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 Output: [1,2,2,3,5,6]
// Input: nums1 = [1], m = 1, nums2 = [], n = 0 Output: [1]
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1 Output: [1]
