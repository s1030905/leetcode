var getIntersectionNode = function (headA, headB) {
  let [a, b] = [headA, headB];
  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  return a;
};
