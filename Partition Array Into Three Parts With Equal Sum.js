var canThreePartsEqualSum = function (arr) {
  let [sum, sumPartial] = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    sumPartial += arr[i];
    if (sumPartial === sum / 3) {
      sumPartial = 0;
      count++;
    }
  }
  return count >= 3;
};
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1] Output: true
// Input: arr = [0,2,1,-6,6,7,9,-1,2,0,1] Output: false
// Input: arr = [3,3,6,5,-2,2,5,1,-9,4] Output: true
