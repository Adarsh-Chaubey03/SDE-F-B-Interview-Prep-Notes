# 1000 Bulbs Puzzle

## Question

There are 1000 bulbs, all initially OFF, and 1000 people.

-   Person 1 toggles every bulb.
-   Person 2 toggles every 2nd bulb.
-   Person 3 toggles every 3rd bulb.
-   ...
-   Person 1000 toggles bulb 1000.

**Which bulbs are ON at the end?**

## Hint

For bulb `n`, ask: **How many times is it toggled?**

It is toggled once for every **divisor of n**.

## Full Solution

A bulb is ON only if it is toggled an **odd number of times**.

Divisors normally come in pairs:

`1 × n`, `2 × n/2`, ...

So most numbers have an even number of divisors.

A **perfect square** has one divisor that pairs with itself.

Example:

`9 → (1,9), (3,3)`

So 9 has 3 divisors and is toggled an odd number of times.

Therefore, the bulbs that remain ON are exactly the **perfect-square
numbered bulbs**:

`1, 4, 9, 16, 25, ..., 961`

Since:

`31² = 961`

and

`32² = 1024 > 1000`

there are **31 bulbs ON**.

### Final Answer

**Bulbs numbered 1, 4, 9, 16, ..., 961 remain ON.**

**Total = 31 bulbs.**
