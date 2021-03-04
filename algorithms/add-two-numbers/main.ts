/**
 * @see {@link https://leetcode.com/problems/add-two-numbers/}
 *
 * @example 链表
 * numbers.reduce((next,value) => new ListNode(value, next), null);
 *
 * T(m,n) = O(max(m,n)) 链表长度
 * S(m,n) = O(max(m,n))
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0;
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  while (l1 || l2) {
    const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);

    carry = sum >= 10 ? 1 : 0;
    const current = new ListNode(sum % 10);

    if (head) {
      tail!.next = current;
    } else {
      head = current;
    }

    tail = current;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  if (carry && tail) tail.next = new ListNode(1);

  return head;
}
