# Contains Duplicate

## Question

Given an integer array `nums`, return `true` if any value appears at least twice in the array.

Return `false` if every element is distinct.

## Example

```text
Input:  nums = [1,2,3,1]
Output: true
```

## Code

```java
class Solution {

    public boolean containsDuplicate(int[] nums) {

        HashSet<Integer> set = new HashSet<>();

        for (int num : nums) {

            if (set.contains(num)) {
                return true;
            }

            set.add(num);
        }

        return false;
    }
}

// TC: O(N)
// SC: O(N)
```
