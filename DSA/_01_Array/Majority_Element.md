# Majority Element

## Question

Given an integer array `nums`, return the majority element.

The majority element is the element that appears more than `n / 2` times.

You may assume that the majority element always exists in the array.

## Code

```java
class Solution {

    public int majorityElement(int[] nums) {

        int candidate = 0;
        int count = 0;

        for (int num : nums) {

            if (count == 0) {
                candidate = num;
            }

            if (num == candidate) {
                count++;
            } else {
                count--;
            }
        }

        return candidate;
    }
}

// TC: O(N)
// SC: O(1)
```
