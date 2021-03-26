// [#83 删除排序链表中的重复元素] https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode();

  const existed: Record<string, boolean> = {};

  if (!head) return null;
  dummy.next = head;
  existed[head.val] = true;

  let previous = head;

  let current = head.next;

  while (current) {
    if (existed[current.val]) {
      if (!current.next) {
        previous.next = null;
      }

      current = current.next;
    } else {
      existed[current.val] = true;
      previous.next = current;
      previous = current;
      current = current.next;
    }
  }

  return dummy.next;
}
