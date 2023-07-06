const cases = {
  case1: [1, 8, 6, 2, 5, 4, 8, 3, 7],
  case2: [1, 1],
  // case3: [5, 4, -1, 0, -7, 0],
  // case4: [0, 2],
  // case5: [2, 0],
  // case6: [3, -1, 4, 5],
  // case7: [-3, -1, -1],
  // case8: [-2, 3, -4],
};
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    max = 0;
  for (let i = 0; i < height.length; i++) {
    while (left < right) {
      let smallestSide = Math.min(height[left], height[right]);
      let area = smallestSide * (right - left);
      if (area > max) max = area;
      if (height[left] < height[right]) left++;
      else right--;
    }
  }
  return max;
};
console.log(maxArea(cases.case1));
