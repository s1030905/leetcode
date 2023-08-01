var intersect = function (nums1, nums2) {
  let hash = {};
  for (const i of nums1) {
    if (i in hash) {
      hash[i] += 1;
    } else {
      hash[i] = 1;
    }
  }
  const result = [];
  for (const i of nums2) {
    if (hash[i] > 0) {
      hash[i] -= 1;
      result.push(i);
    }
  }
  return result;
};
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2,2]
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] Output: [4,9]
