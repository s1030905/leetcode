var canConstruct = function (ransomNote, magazine) {
  const setM = {};
  for (const i of magazine) {
    if (setM[i]) {
      setM[i]++;
    } else {
      setM[i] = 1;
    }
  }

  for (const i of ransomNote) {
    if (i in setM) {
      setM[i]--;
      if (setM[i] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
);
// "a", "b"
// "aa", "ab"
// "aa", "baa"
// "bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
