var isHappy = function (n, hash = {}) {
  // 將數字轉換成字串，方便計算
  if (n === 1) return true;
  const str = n.toString();
  let sum = 0;
  for (const i of str) {
    sum += Number(i);
  }
  // 如果已在hash裡代表循環了 return false
  if (sum in hash) {
    return false;
  } else {
    hash[sum] = 1;
  }
  return isHappy(sum, hash);
};
console.log(isHappy(2));
