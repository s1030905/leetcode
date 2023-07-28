var removeElement = function (nums, val) {
  // 令不等於 val 的元素成為 index 的值
  let index = 0;
  for (const i of nums) {
    if (i !== val) {
      nums[index] = i;
      index++;
    }
  }
  return index;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
