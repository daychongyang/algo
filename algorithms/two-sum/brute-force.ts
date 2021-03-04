/**
 * @see {@link https://leetcode.com/problems/two-sum/}
 * T(n) = O(n^2)
 * S(n) = O(1)
 */

export function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === target - nums[i]) return [i, j];
    }
  }

  throw new Error("No two sum solution");
}
