var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= s.length; i++) {
    const oneLeft = s[i - 1];
    if (oneLeft > 0 && oneLeft < 10) {
      dp[i] += dp[i - 1];
    }
    const twoLeft = s.slice(i - 2, i);
    if (twoLeft >= 10 && twoLeft < 27) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};
console.log(numDecodings("123"));
