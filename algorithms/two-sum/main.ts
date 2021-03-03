/**
 * @see {@link https://leetcode.com/problems/two-sum/}
 */

export function twoSum(nums: number[], target: number): number[] {
  const hashMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const matched = target - current;
    const index = hashMap[matched];
    if (index !== undefined) return [index, i];

    hashMap[current] = i;
  }

  throw new Error("No two sum solution");
}
