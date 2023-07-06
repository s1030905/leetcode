const cases = {
  case1: [1, 2, 3, 4, 5],
  case2: [1, 2],
  case3: [],
  // case4: [0, 2],
  // case5: [2, 0],
  // case6: [3, -1, 4, 5],
  // case7: [-3, -1, -1],
  // case8: [-2, 3, -4],
};
var reverseList = function (head) {
  let curr = head;
  let next = null;
  let pre = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  return pre;
};
