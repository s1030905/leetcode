// var nextGreaterElement = function (nums1, nums2) {
//   return nums1.map((n) => {
//     let index = nums2.indexOf(n);

//     if (index !== -1) {
//       index++; // 手動遞增 index
//       while (index < nums2.length && nums2[index] <= n) {
//         index++; // 手動遞增 index，直到找到下一個更大的元素或超出陣列範圍
//       }
//       if (index >= nums2.length) {
//         index = -1;
//       } else {
//         index = nums2[index];
//       }
//     }

//     return index;
//   });
// };

var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    let index = -1;
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] > nums2[i]) {
        index = nums2[j];
        break;
      }
    }
    map.set(nums2[i], index);
  }
  return nums1.map((e) => map.get(e));
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2] Output: [-1,3,-1]
// Input: nums1 = [2,4], nums2 = [1,2,3,4] Output: [3,-1]
// Input: nums1 = [1,3,5,2,4], nums2 = [6,5,4,3,2,1,7] Output: [7,7,7,7,7]
