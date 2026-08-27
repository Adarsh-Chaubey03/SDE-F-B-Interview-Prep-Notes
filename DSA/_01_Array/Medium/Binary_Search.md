# Binary Search

## Example

**Input:** `nums = [-1,0,3,5,9,12], target = 9`

**Output:** `4`

**Explanation:** The target `9` is found at index `4`.

## Code

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            } 
            else if (nums[mid] < target) {
                left = mid + 1;
            } 
            else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
```

## Complexity

**TC:** `O(log n)`

**SC:** `O(1)`
