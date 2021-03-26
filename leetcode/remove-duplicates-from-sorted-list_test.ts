// [#83 删除排序链表中的重复元素] https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";

import {
  ListNode,
  deleteDuplicates,
} from "./remove-duplicates-from-sorted-list.ts";

function array2SinglyLinkedList(numbers: number[]): ListNode {
  return numbers.reduceRight<ListNode | null>(
    (next, data) => new ListNode(data, next),
    null
  ) as ListNode;
}

Deno.test("leetcode#83 remove-duplicates-from-sorted-list", () => {
  const n1 = [1, 1, 2];
  const n2 = [1, 1, 2, 3, 3];
  const l1 = array2SinglyLinkedList(n1);
  const l2 = array2SinglyLinkedList(n2);

  assertEquals(deleteDuplicates(l1), array2SinglyLinkedList([1, 2]));
  assertEquals(deleteDuplicates(l2), array2SinglyLinkedList([1, 2, 3]));
});
