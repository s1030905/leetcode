const cases = {
  case1: { s: "ABAB", k: 2 },
  case2: { s: "AABABBA", k: 1 },
  // case3: { s: "ABAB", k: 2 },
};

const characterReplacement = (s, k) => {
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;
    console.log(visited);
    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      console.log("right:" + " " + right);
      visited[s[left]]--;
      left++;
    }

    right++;
  }

  return right - left;
};
console.log(characterReplacement("AABABBA", 1));
