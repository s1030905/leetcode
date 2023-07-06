var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  let left = 0;
  let right = 0;
  let setT = {};
  let result = "";
  for (let i = 0; i < t.length; i++) {
    setT[t[i]] = setT[t[i]] ? setT[t[i]] + 1 : 1;
  }

  let windowLength = Object.keys(setT).length;
  console.log(windowLength);
  while (right < s.length) {
    if (s[right] in setT) {
      setT[s[right]]--;
    }
    if (setT[s[right]] === 0) {
      windowLength--;
    }
    while (windowLength === 0) {
      if (!result || result.length > right - left + 1) {
        result = s.slice(left, right + 1);
      }
      if (setT[s[left]] === 0) {
        windowLength++;
      }
      if (s[left] in setT) {
        setT[s[left]]++;
      }
      left++;
    }
    right++;
  }
  return result;
};
console.log(minWindow("ADOBECODEBANC", "ABC"));
