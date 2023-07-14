// var intersection = function (nums1, nums2) {
//   let dic;
//   const result = new Set();
//   if (nums1.length > nums2.length) {
//     dic = new Set(nums1);
//     nums2.forEach((element) => {
//       if (dic.has(element)) {
//         result.add(element);
//       }
//     });
//   } else {
//     dic = new Set(nums2);
//     nums1.forEach((element) => {
//       if (dic.has(element)) {
//         result.add(element);
//       }
//     });
//   }
//   return [...result];
// };
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// //  [1, 2, 2, 1], [2, 2];
// // [4,9,5], [9,4,9,8,4]

var intersection = function (nums1, nums2) {
  let dic = {};
  const result = [];
  nums1.forEach((element) => {
    dic[element] = 1;
  });
  nums2.forEach((e) => {
    if (dic[e] === 1) {
      result.push(e);
      dic[e] = 0;
    }
  });

  return result;
};
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
//  [1, 2, 2, 1], [2, 2];
// [4,9,5], [9,4,9,8,4]
