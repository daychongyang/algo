/**
 * @see {@link https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/}
 */
export function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  let longestSubstringLength = 0;

  const isCharUnique = (s: string, start: number, end: number) => {
    const map: Record<string, number> = {};
    for (let i = start; i < end; i++) {
      if (map[s[i]] !== undefined) return false;

      map[s[i]] = i;
    }

    return true;
  };

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j <= len; j++) {
      if (isCharUnique(s, i, j)) {
        longestSubstringLength = Math.max(longestSubstringLength, j - i);
      }
    }
  }

  return longestSubstringLength;
}
