# Subarray Sum Equals K

## Example

**Input:** `nums = [1,1,1], k = 2`

**Output:** `2`

**Explanation:** The subarrays `[1,1]` at indices `0-1` and `1-2` have sum equal to `2`.

## Code

```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();

        map.put(0, 1);

        int sum = 0;
        int count = 0;

        for (int num : nums) {
            sum += num;

            if (map.containsKey(sum - k)) {
                count += map.get(sum - k);
            }

            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }

        return count;
    }
}
```

## Complexity

**TC:** `O(n)`

**SC:** `O(n)`
