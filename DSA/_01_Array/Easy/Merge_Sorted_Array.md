# Merge Sorted Array

## Question

Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array.

`nums1` has enough space to hold all elements from both arrays.

## Example

```text
Input:  nums1 = [1,2,3,0,0,0], m = 3
        nums2 = [2,5,6], n = 3

Output: [1,2,2,3,5,6]
```

## Code

```java
class Solution {

    public void merge(int[] nums1, int m, int[] nums2, int n) {

        int i = m - 1;
        int j = n - 1;
        int k = m + n - 1;

        while (i >= 0 && j >= 0) {

            if (nums1[i] > nums2[j]) {
                nums1[k] = nums1[i];
                i--;
            } else {
                nums1[k] = nums2[j];
                j--;
            }

            k--;
        }

        // Copy remaining elements of nums2
        while (j >= 0) {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
}

// TC: O(M + N)
// SC: O(1)
```
