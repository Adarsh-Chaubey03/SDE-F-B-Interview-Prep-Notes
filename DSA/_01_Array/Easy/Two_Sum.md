# Two Sum

## Question

Given an integer array `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

Each input has exactly one solution.

You may not use the same element twice.

Return the answer in any order.

## Code

```java
package _01_Array;

import java.util.Arrays;
import java.util.HashMap;

public class E_TwoSum {

    static int[] twoSum(int[] arr, int target) {

        HashMap<Integer, Integer> mp = new HashMap<>();

        for (int i = 0; i < arr.length; i++) {

            int partner = target - arr[i];

            if (mp.containsKey(partner)) {
                return new int[]{mp.get(partner), i};
            }

            mp.put(arr[i], i);
        }

        return new int[]{};
    }

    public static void main(String[] args) {

        int[] arr = {1, 4, 5, 3, 4, 3, 8};
        int target = 8;

        System.out.println(Arrays.toString(twoSum(arr, target)));
    }
}

// TC: O(N)
// SC: O(N)
```
