# Remove Duplicates from Sorted Array

## Question

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place so each unique element appears only once.

Return the number of unique elements.

## Example

```text
Input:  nums = [1,1,2]
Output: 2
```

## Code

```java
class Solution {

    public int removeDuplicates(int[] nums) {

        if (nums.length == 0)
            return 0;

        int i = 0;

        for (int j = 1; j < nums.length; j++) {

            if (nums[i] != nums[j]) {
                i++;
                nums[i] = nums[j];
            }
        }

        return i + 1;
    }
}

// TC: O(N)
// SC: O(1)
```
