/**
 * @see {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/}
 */

export function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  const map: Record<string, number> = {};
  let longestSubstringLength = 0;

  for (let i = 0, j = 0; j < len; j++) {
    if (map[s.charAt(j)] !== undefined) {
      longestSubstringLength = Math.max(longestSubstringLength, j - i + 1);
    }

    map[s.charAt(j)] = j + 1;
  }

  return longestSubstringLength;
}
