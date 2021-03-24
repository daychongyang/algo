// [#82 删除排序链表中的重复元素 II] https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;

  const dummy = new ListNode();

  dummy.next = head;

  let pre: ListNode = dummy;
  let current: ListNode | null = dummy.next;
  let hasDuplicate = false;

  while (current.next) {
    if (current.val === current?.next?.val) {
      // 前后一致
      hasDuplicate = true;
    } else {
      // 前后不一致
      if (hasDuplicate) {
        pre.next = current.next;
        hasDuplicate = false;
      } else {
        pre = current;
      }
    }

    current = current.next;
  }

  if (hasDuplicate) pre.next = current!.next;

  return dummy.next;
}
