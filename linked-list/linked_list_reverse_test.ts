import { assertEquals } from "https://deno.land/std@0.91.0/testing/asserts.ts";

import { array2LinkedList } from "./linked_list.ts";
import { reverse } from "./linked_list_reverse.ts";

Deno.test("Reverse linked list", () => {
  const numbers = [1, 2, 3, 4];

  assertEquals(
    reverse(array2LinkedList(numbers)),
    array2LinkedList(numbers.reverse())
  );
});
