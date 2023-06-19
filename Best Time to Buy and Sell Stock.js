const cases = {
  case1: [7, 1, 5, 3, 6, 4],
  case2: [7, 6, 4, 3, 1],
  case3: [2, 9, 1, 55, 6, 7]
}

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
// var maxProfit = function (prices) {

//   let profitLeft = 0
//   let profitRight = 0
//   let asc = prices.map(e => e).sort((a, b) => a - b)
//   let min = asc[0]
//   let max = asc[prices.length - 1]
//   const maxIndex = prices.findIndex(e => e === max)
//   const minIndex = prices.findIndex(e => e === min)

//   for (let i = maxIndex - 1; i > 0; i--) {
//     if (max - prices[i] >= 0 && profitLeft < (max - prices[i])) {
//       profitLeft = max - prices[i]
//     }
//   }

//   for (let i = minIndex + 1; i < prices.length; i++) {
//     if (prices[i] - min >= 0 && profitRight < (prices[i] - min)) {
//       profitRight = prices[i] - min
//     }
//   }
//   if (profitRight > profitLeft) {
//     return profitRight
//   } else {
//     return profitLeft
//   }
// };


// 第三版

// var maxProfit = function (prices) {
//   let minPrice = prices[0]
//   let profit = 0
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i]
//     }
//     if ((prices[i] - minPrice) > profit) {
//       profit = prices[i] - minPrice
//     }
//   }
//   return profit
// };
// console.log(maxProfit(cases.case3))

// 第四版

var maxProfit = function (prices) {
  let minPrice = prices[0]
  let profit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    }
    // 加入else 可以減少計算次數，當新的 minPrice 更新時，profit不用被計算，不用進行無效計算
    else if ((prices[i] - minPrice) > profit) {
      profit = prices[i] - minPrice
    }
  }
  return profit
};
console.log(maxProfit(cases.case3))