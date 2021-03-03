function lengthOfLongestSubstring(s: string): number {
  const length = s.length;
  let longestSubstringLength = 0;

  for (let i = 0; i < length; i++) {
    let e = i;
    while (e < length) {
      const substring = s.substring(i, e + 1);
      if (
        Array.from(substring).some(
          (char) => substring.lastIndexOf(char) !== substring.indexOf(char)
        )
      ) {
        break;
      } else {
        longestSubstringLength = Math.max(
          longestSubstringLength,
          substring.length
        );
        e += 1;
      }
    }
  }

  return longestSubstringLength;
}
