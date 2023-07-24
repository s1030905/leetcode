var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      flowerbed[i] = 1;
      count++;
    }
  }
  console.log(count);
  console.log(flowerbed);
  return n <= count;
};
console.log(canPlaceFlowers([0, 1, 1, 0, 0], 1));
// Input: flowerbed = [1,0,0,0,1], n = 1 Output: true
// Input: flowerbed = [1,0,0,0,1], n = 2 Output: false
