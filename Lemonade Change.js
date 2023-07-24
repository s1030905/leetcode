var lemonadeChange = function (bills) {
  const change = { 5: 0, 10: 0, 20: 0 };
  for (const i of bills) {
    switch (i) {
      case 5:
        change[5] += 1;
        break;
      case 10:
        if (change[5] > 0) {
          change[5] -= 1;
          change[10] += 1;
        } else {
          return false;
        }
        break;
      case 20:
        if (change[10] > 0 && change[5] > 0) {
          change[5] -= 1;
          change[10] -= 1;
          change[20] += 1;
        } else if (change[5] >= 3) {
          change[5] -= 3;
          change[20] += 1;
        } else {
          return false;
        }
        break;
    }
  }

  return true;
};
console.log(lemonadeChange([5, 5, 5, 20]));
// Input: bills = [5, 5, 5, 10, 20]; Output: true;
// Input: bills = [5,5,10,10,20] Output: false
