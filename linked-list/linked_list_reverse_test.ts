import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";

import { array2SinglyLinkedList } from "./linked_list.ts";
import {
  reverseArray,
  reversedByIteration,
  reversedByPreOrder,
  reversedByPostOrder,
} from "./linked_list_reverse.ts";

const numbers = [1, 2, 1, 3, 8, 9, 5, 2, 7];
const reversedNumbers = numbers.slice().reverse();

Deno.test("reverse array", () => {
  assertEquals(reverseArray(numbers.slice()), reversedNumbers);
});

const expected = array2SinglyLinkedList(reversedNumbers);

Deno.test("reverse linked list by iteration", () => {
  const origin = array2SinglyLinkedList(numbers);

  assertEquals(reversedByIteration(origin), expected);
});

Deno.test("reverse linked list by preOrderTraverse", () => {
  const origin = array2SinglyLinkedList(numbers);

  assertEquals(reversedByPreOrder(origin), expected);
});

Deno.test("reverse linked list by postOrderTraverse", () => {
  const origin = array2SinglyLinkedList(numbers);

  assertEquals(reversedByPostOrder(origin), expected);
});
