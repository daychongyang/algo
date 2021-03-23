// [#21 合并两个有序链表] https://leetcode-cn.com/problems/merge-two-sorted-lists

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1?.next ?? null;
    } else {
      current.next = l2;
      l2 = l2?.next ?? null;
    }

    current = current.next;
  }

  current.next = l1 ?? l2;

  return dummy.next;
}
