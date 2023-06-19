const cases = {
  case1: 6,
  case2: 1,
  case3: 14,
  case4: 0,
};

// 第 1 次

var isUgly = function (n) {
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
      console.log(n);
    } else if (n % 3 === 0) {
      n /= 3;
      console.log(n);
    } else if (n % 5 === 0) {
      n /= 5;
      console.log(n);
    } else {
      console.log(n);
      return false;
    }
  }
  if (n === 1) {
    return true;
  } else {
    return false;
  }
};
console.log(isUgly(-2147483648));
