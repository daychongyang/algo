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
  let carry = 0; /** 进位 0|1 */
  let head: ListNode | null = null;
  let tail: ListNode | null = null;

  while (l1 || l2) {
    const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);

    carry = sum >= 10 ? 1 : 0;
    const current = new ListNode(sum % 10);

    if (head) {
      tail!.next = current;
      tail = current;
    } else {
      head = tail = current;
    }

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  if (carry) tail!.next = new ListNode(1);

  return head;
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
