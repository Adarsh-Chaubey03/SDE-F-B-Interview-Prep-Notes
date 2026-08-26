# Valid Palindrome

## Question

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

A palindrome is a string that reads the same forward and backward after converting all uppercase letters to lowercase and removing all non-alphanumeric characters.

## Code

```java
class Solution {

    public boolean isPalindrome(String s) {

        StringBuilder normalized = new StringBuilder();

        for (char c : s.toCharArray()) {

            if (Character.isLetterOrDigit(c)) {
                normalized.append(Character.toLowerCase(c));
            }
        }

        String original = normalized.toString();
        String reversed = normalized.reverse().toString();

        return original.equals(reversed);
    }
}
// TC: O(N)
// SC: O(N)
```
