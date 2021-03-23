import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";

import { array2LinkedList } from "./linked_list.ts";
import { reverseArray, reverse } from "./linked_list_reverse.ts";

Deno.test("reverse array", () => {
  const numbers = [1, 2, 1, 3, 8, 9, 5, 2, 7];
  assertEquals(reverseArray(numbers), numbers.reverse());
});

Deno.test("reverse linked list", () => {
  const numbers = [1, 2, 1, 3, 8, 9, 5, 2, 7];

  assertEquals(
    reverse(array2LinkedList(numbers)),
    array2LinkedList(numbers.reverse())
  );
});
