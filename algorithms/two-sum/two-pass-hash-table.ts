/**
 * @see {@link https://leetcode.com/problems/two-sum/}
 * T(n) = O(n)
 * S(n) = O(n)
 */

export function twoSum(nums: number[], target: number): number[] {
  const map: Record<string, number> = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let j = 0; j < nums.length; j++) {
    const matched = target - nums[j];
    if (map[matched] !== undefined) {
      return [j, map[matched]];
    }
  }

  throw new Error("No two sum solution");
}
