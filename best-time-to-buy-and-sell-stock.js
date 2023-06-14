const case1 = [7, 1, 5, 3, 6, 4]
const case2 = [7, 6, 4, 3, 1]

// 第一版

// var maxProfit = function (prices) {
//   let profit = 0
//   for (let i = 0; i < prices.length; i++) {
//     const buy = prices[i]
//     for (let j = i; j < prices.length; j++) {
//       const sell = prices[j]
//       if ((sell - buy) > profit) {
//         profit = (sell - buy)
//       }
//     }
//   }
//   return profit
// };

// 第二版

var maxProfit = function (prices) {
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    const buy = prices[i]
    for (let j = i; j < prices.length; j++) {
      const sell = prices[j]
      if ((sell - buy) > profit) {
        profit = (sell - buy)
      }
    }
  }
  return profit
};

console.log(maxProfit(case2))