const lengthOfLIS = (nums) => {
  let dp = new Array(nums.length).fill(1);
  let longest = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1); // dp = [比對應數字序列前小的數目]
        // [10] => 本身1個; ... [7] => 依序跟2,5,3比
        longest = Math.max(longest, dp[i]);
      }
    }
  }
  return longest;
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
