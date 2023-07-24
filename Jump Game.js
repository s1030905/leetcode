// 貪心
var canJump = function (nums) {
  if (nums.length <= 1) return true;
  // 最大可以跳到哪
  let maximum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    // 如果跳到該處後，該處的可以跳躍點數 = 0 => GameOver
    if (maximum <= i && nums[i] == 0) return false;
    if (i + nums[i] > maximum) {
      maximum = i + nums[i];
    }
    if (maximum >= nums.length - 1) return true;
  }
  return false;
};
console.log(canJump([2, 5, 0, 0]));
// 157
// [3, 2, 1, 0, 4];
// [2, 3, 1, 1, 4];
// [1, 0, 1, 0];
// [1, 2, 1, 0, 2, 1, 2, 1, 0];
