import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";

import { array2LinkedList } from "./linked_list.ts";
import {
  reverseArray,
  reversedByIteration,
  reversedByPreOrder,
  reversedByPostOrder,
} from "./linked_list_reverse.ts";

Deno.test("reverse array", () => {
  const numbers = [1, 2, 1, 3, 8, 9, 5, 2, 7];
  assertEquals(reverseArray(numbers), numbers.reverse());
});

Deno.test("reverse linked list by iteration", () => {
  const numbers = [1, 2, 1, 3, 8, 9, 5, 2, 7];
  const origin = array2LinkedList(numbers);
  const expected = array2LinkedList(numbers.reverse());

  assertEquals(reversedByIteration(origin), expected);
});

Deno.test("reverse linked list by preOrderTraverse", () => {
  const numbers = [1, 2, 1, 3, 8, 9, 5, 2, 7];
  const origin = array2LinkedList(numbers);
  const expected = array2LinkedList(numbers.reverse());

  assertEquals(reversedByPreOrder(origin), expected);
});

Deno.test("reverse linked list by postOrderTraverse", () => {
  const numbers = [1, 2, 1, 3, 8, 9, 5, 2, 7];
  const origin = array2LinkedList(numbers);
  const expected = array2LinkedList(numbers.reverse());

  assertEquals(reversedByPostOrder(origin), expected);
});
