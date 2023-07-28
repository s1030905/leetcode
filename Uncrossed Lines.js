var maxUncrossedLines = function (A, B) {
  const m = A.length;
  const n = B.length;

  const dp = new Array(m + 1);

  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp);
  return dp[m][n];
};
console.log(maxUncrossedLines([10, 5, 2, 1, 5], [2, 5, 1, 2]));
// Input: nums1 = [1,4,2], nums2 = [1,2,4] Output: 2
// Input: nums1 = [2,5,1,2,5], nums2 = [10,5,2,1,5,2] Output: 3
// Input: nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1] Output: 2
