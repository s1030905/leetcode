var getSum = function (a, b) {
  // let carry;
  while ((a & b) !== 0) {
    let carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};

console.log(getSum(1, 2));
