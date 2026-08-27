# Maximum Subarray

## Question

Given an integer array `nums`, find the contiguous subarray with the largest sum.

Return the maximum subarray sum.

## Example

```text
Input:  nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
```

## Code

```java
class Solution {

    public int maxSubArray(int[] nums) {

        int maxSum = nums[0];
        int currSum = 0;

        for (int i = 0; i < nums.length; i++) {

            currSum = Math.max(nums[i], currSum + nums[i]);
            maxSum = Math.max(maxSum, currSum);
        }

        return maxSum;
    }
}

// TC: O(N)
// SC: O(1)
```
