var isHappy = function (n) {
  let total = sum(n);
  let dic = new Set();
  while (total !== 1) {
    if (dic.has(total)) {
      return false;
    } else {
      dic.add(total);
      total = sum(total);
    }
  }
  if (total === 1) return true;
  function sum(n) {
    let total = 0;
    n = n.toString();
    for (const i of n) {
      total += Number(i) ** 2;
    }
    return total;
  }
};
console.log(isHappy(2));
