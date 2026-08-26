# Best Time to Buy and Sell Stock

## Question

Given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day, choose a single day to buy one stock and choose a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.

If you cannot achieve any profit, return `0`.

**Example:**

```text
Input:  prices = [7, 1, 5, 3, 6, 4]
Output: 5
```

## Logic

Maintain:

```text
minimumPrice → lowest price seen so far
maxProfit    → maximum profit found so far
```

For every price:

```text
profit = currentPrice - minimumPrice
```

Then update:

```text
maxProfit = maximum(maxProfit, profit)
minimumPrice = minimum(minimumPrice, currentPrice)
```

### Dry Run

```text
prices = [7, 1, 5, 3, 6, 4]
```

| Price | Minimum Price | Profit | Max Profit |
|---:|---:|---:|---:|
| 7 | 7 | 0 | 0 |
| 1 | 1 | 0 | 0 |
| 5 | 1 | 4 | 4 |
| 3 | 1 | 2 | 4 |
| 6 | 1 | 5 | 5 |
| 4 | 1 | 3 | 5 |

Answer:

```text
5
```

## Code

```java
class Solution {

    public int maxProfit(int[] prices) {

        int minimumPrice = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < prices.length; i++) {

            int profit = prices[i] - minimumPrice;

            maxProfit = Math.max(maxProfit, profit);

            minimumPrice = Math.min(minimumPrice, prices[i]);
        }

        return maxProfit;
    }
}

// TC: O(N)
// SC: O(1)
```
