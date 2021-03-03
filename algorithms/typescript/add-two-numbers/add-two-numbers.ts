/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 *
 * @see {@link https://leetcode.com/problems/add-two-numbers/}
 *
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const list = (numbers: number[]) => {
  return numbers.reduceRight<ListNode | null>((next, number) => {
    return new ListNode(number, next);
  }, null);
};

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0;
  let result: ListNode | null = null;
  let preNode: ListNode | null = null;

  while (l1 || l2) {
    const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);

    const current = new ListNode(sum % 10);

    if (!result) result = current;

    if (preNode) preNode!.next = current;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;

    carry = sum >= 10 ? 1 : 0;

    preNode = current;
  }

  if (carry) preNode!.next = new ListNode(carry % 10);

  return result;
}

addTwoNumbers(
  list([
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
  ]),
  list([5, 6, 4])
);
