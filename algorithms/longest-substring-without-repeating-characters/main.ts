/**
 * @see {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/}
 */

function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  const set = new Set<string>([]);
  let longestSubstringLength = 0;
  let i = 0;
  let j = 0;

  while (i < len && j < len) {
    if (!set.has(s.charAt(j))) {
      set.add(s.charAt(j++));
      longestSubstringLength = Math.max(longestSubstringLength, j - i);
    } else {
      set.delete(s.charAt(i++)); // 字符重复
    }
  }

  return longestSubstringLength;
}
