var removeNthFromEnd = function (head, n) {
  let [fast, slow] = [head, head];
  for (let i = 0; i < n; i++) fast = fast.next;
  // 確認 fast 是否為鍊表中最後一個，是的話代表從後數 n 是鍊表第一個
  if (!fast) return head.next;
  while (fast.next) {
    (fast = fast.next), (slow = slow.next);
  }
  slow.next = slow.next.next;
  return head;
};
