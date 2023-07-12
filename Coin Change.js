// var coinChange = function (coins, amount) {
//   let count = 0;

//   if (amount === 0) return count;

//   coins.sort((a, b) => a - b);

//   let index = coins.length - 1;
//   for (let j = coins.length - 1; j >= 0; j--) {
//     if (coins[j] <= amount) {
//       index = j;
//       break;
//     }
//   }

//   count += Math.floor(amount / coins[index]);
//   let remain = amount % coins[index];

//   if (remain === 0) return count;
//   console.log(remain, count);
//   if (remain < coins[0]) {
//     return -1;
//   } else if (remain === coins[0]) {
//     return count + 1;
//   } else if (remain > coins[0]) {
//     let result = coinChange(coins, remain);
//     return result === -1 ? -1 : count + result;
//   }

//   return count;
// };
// console.log(coinChange([186, 419, 83, 408], 1096));
const coinChange = function (coins, amount) {
  const arr = new Array(amount + 1).fill(Infinity);
  arr[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const j of coins) {
      if (i >= j) {
        arr[i] = Math.min(arr[i], arr[i - j] + 1);
      }
    }
  }
  return arr[amount] === Infinity ? -1 : arr[amount];
};
console.log(coinChange([186, 419, 83, 408], 1096));
