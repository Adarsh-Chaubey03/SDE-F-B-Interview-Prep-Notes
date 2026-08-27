# Minimum Size Subarray Sum

## Example

**Input:** `target = 7, nums = [2,3,1,2,4,3]`

**Output:** `2`

**Explanation:** The smallest subarray with sum ≥ 7 is `[4,3]`.

## Code

```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0;
        int sum = 0;
        int minLen = Integer.MAX_VALUE;

        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];

            while (sum >= target) {
                minLen = Math.min(minLen, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }

        return minLen == Integer.MAX_VALUE ? 0 : minLen;
    }
}
```

## Complexity

**TC:** `O(n)`

**SC:** `O(1)`
