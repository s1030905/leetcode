var detectCycle = function (head) {
  let [fast, slow] = [head, head];
  while (fast && fast.next && fast.next.next) {
    // 讓速度 fast : slow = 2 : 1，兩者交會點剛好會在原點(我跑兩圈你跑一圈)
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
