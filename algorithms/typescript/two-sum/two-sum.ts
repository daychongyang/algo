/**
 * @see {@link https://leetcode.com/problems/two-sum/}
 */

export function twoSum(nums: number[], target: number): number[] {
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const matched = nums.findIndex(
      (num, j) => num === target - nums[i] && j !== i
    );

    if (matched !== -1) {
      result = [i, matched];
      break;
    }
  }

  return result;
}
