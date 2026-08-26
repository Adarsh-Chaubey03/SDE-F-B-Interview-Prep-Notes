# Valid Anagram

## Question

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Input:** `s = "anagram"`, `t = "nagaram"`

**Output:** `true`

## Code

```java
package _03_String;

public class E_ValidAnagram {

    static class Solution {

        public static boolean isAnagram(String s, String t) {

            if (s.length() != t.length()) {
                return false;
            }

            // Create a frequency array for 26 lowercase English letters
            int[] freq = new int[26];

            for (int i = 0; i < s.length(); i++) {

                // Convert character to zero-based index
                freq[s.charAt(i) - 'a']++;
                freq[t.charAt(i) - 'a']--;
            }

            // Every frequency should be zero
            for (int i = 0; i < 26; i++) {

                if (freq[i] != 0) {
                    return false;
                }
            }

            return true;
        }
    }

    public static void main(String[] args) {

        String s = "anagram";
        String t = "nagaram";

        System.out.println(Solution.isAnagram(s, t));
    }
}

// TC: O(n)
// SC: O(1)
```
