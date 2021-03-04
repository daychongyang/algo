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
  const carry = arguments[2] || 0;
  let node: ListNode | null = null;

  if (l1 || l2) {
    const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
    node = new ListNode(sum % 10);

    node.next = addTwoNumbers(
      l1?.next ?? null,
      l2?.next ?? null,
      // deno-lint-ignore ban-ts-comment
      // @ts-ignore
      sum >= 10 ? 1 : 0
    );
  } else if (carry) {
    node = new ListNode(carry % 10);
    node.next = null;
  }

  return node;
}
