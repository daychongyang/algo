// [#86 分隔链表] https://leetcode-cn.com/problems/partition-list/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export function partition(head: ListNode | null, x: number): ListNode | null {
  const dummy = new ListNode();

  if (!head) return null;

  return dummy.next;
}
