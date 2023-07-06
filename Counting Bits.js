var countBits = function (n) {
  const arr = [];
  for (let i = 0; i < n + 1; i++) {
    let binaryArr = i.toString(2).split("");
    // console.log(binaryArr);
    arr.push(toNumber(binaryArr));
  }
  return arr;
};
const toNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
};
console.log(countBits(8));
// 2;
// 5;
