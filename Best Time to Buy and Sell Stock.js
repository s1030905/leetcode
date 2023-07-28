const cases = {
  case1: [7, 1, 5, 3, 6, 4],
  case2: [7, 6, 4, 3, 1],
  case3: [2, 9, 1, 55, 6, 7],
};

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // 加入else 可以減少計算次數，當新的 minPrice 更新時，profit不用被計算，不用進行無效計算
    else if (prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    }
  }
  return profit;
};
console.log(maxProfit(cases.case3));
