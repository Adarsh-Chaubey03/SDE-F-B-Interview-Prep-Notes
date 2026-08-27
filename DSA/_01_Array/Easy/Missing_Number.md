# Missing Number

## Question

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

## Example

```text
Input:  nums = [3,0,1]
Output: 2
```

## Code

```java
class Solution {

    public int missingNumber(int[] nums) {

        int n = nums.length;

        int totalSum = (n * (n + 1)) / 2;
        int trueSum = 0;

        for (int ele : nums) {
            trueSum += ele;
        }

        return totalSum - trueSum;
    }
}

// TC: O(N)
// SC: O(1)
```
