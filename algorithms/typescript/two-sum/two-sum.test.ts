import { assertEquals } from "https://deno.land/std@0.88.0/testing/asserts.ts";
import { twoSum } from "./two-sum.ts";

Deno.test("Two Sum #1", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;

  assertEquals(twoSum(nums, target).toString(), [0, 1].toString());
});

Deno.test("Two Sum #2", () => {
  const nums = [3, 2, 4];
  const target = 6;

  assertEquals(twoSum(nums, target).toString(), [1, 2].toString());
});

Deno.test("Two Sum #3", () => {
  const nums = [3, 3];
  const target = 6;

  assertEquals(twoSum(nums, target).toString(), [0, 1].toString());
});
