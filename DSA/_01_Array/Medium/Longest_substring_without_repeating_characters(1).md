# Longest Substring Without Repeating Characters

## Example

**Input:** `s = "abcabcbb"`

**Output:** `3`

**Explanation:** The longest substring without repeating characters is `"abc"`, which has length `3`.

## Code

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int left = 0;
        int ans = 0;

        for (int r = 0; r < s.length(); r++) {
            while (set.contains(s.charAt(r))) {
                set.remove(s.charAt(left));
                left++;
            }

            set.add(s.charAt(r));
            ans = Math.max(ans, r - left + 1);
        }

        return ans;
    }
}
```

## Complexity

**TC:** `O(n)`

**SC:** `O(min(n, charset))`
