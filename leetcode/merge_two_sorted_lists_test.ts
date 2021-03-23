// [#21 合并两个有序链表] https://leetcode-cn.com/problems/merge-two-sorted-lists
import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";

import { ListNode, mergeTwoLists } from "./merge_two_sorted_lists.ts";

function array2LinkedList(numbers: number[]): ListNode {
  return numbers.reduceRight<ListNode | null>(
    (next, data) => new ListNode(data, next),
    null
  ) as ListNode;
}

Deno.test("leetcode#21 merge-two-sorted-lists", () => {
  const n1 = [1, 2, 4];
  const n2 = [1, 3, 4];
  const l1 = array2LinkedList(n1);
  const l2 = array2LinkedList(n2);

  console.log(l1);

  assertEquals(mergeTwoLists(l1, l2), array2LinkedList(n1.concat(n2).sort()));
});
