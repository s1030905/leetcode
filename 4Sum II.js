// var fourSumCount = function (nums1, nums2, nums3, nums4) {
//   const nums5 = {};
//   for (const i of nums1) {
//     for (const j of nums2) {
//       if (i + j in nums5) nums5[i + j]++;
//       else nums5[i + j] = 1;
//     }
//   }
//   const nums6 = [];
//   for (const i of nums3) {
//     for (const j of nums4) {
//       nums6.push(i + j);
//     }
//   }
//   let count = 0;
//   for (const i of nums6) {
//     if (nums5[-i] > 0) {
//       count += nums5[-i];
//     }
//   }
//   return count;
// };

// --------------------------------------------------------------------
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  const dic = {};

  for (const i of nums1) {
    for (const j of nums2) {
      if (i + j in dic) dic[i + j]++;
      else dic[i + j] = 1;
    }
  }
  console.log(dic);
  for (const i of nums3) {
    for (const j of nums4) {
      console.log(i + j);
      if (-(i + j) in dic) count += dic[-(i + j)];
    }
  }

  return count;
};

console.log(fourSumCount([-1, -1], [-1, 1], [-1, 1], [1, -1]));
// Input: [1,2], [-2,-1], [-1,2], [0,2]
// Output: 2

// Input: [0], [0], [0], [0]
// Output: 1

// [-1,-1], [-1,1], [-1,1], [1,-1]
