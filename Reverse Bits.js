var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result += (n & 1) * 2 ** (31 - i);
    n = n >> 1;
  }
  return result;
};
console.log(reverseBits());
// 00000010100101000001111010011100;
// 11111111111111111111111111111101;
// 00111001011110000010100101000000;
