var wordBreak = function (s, wordDict) {
  if (wordDict == null || wordDict.length === 0) return false;
  const set = new Set(wordDict);
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      const word = s.slice(start, end);
      if (set.has(word) && dp[start] === true) {
        dp[end] = true;
      }
    }
  }
  return dp[s.length];
};
