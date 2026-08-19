# Two-Egg Problem

## Problem

You have **2 eggs** and a **100-floor building**.

There is an unknown floor `F` such that:

- Below `F` → the egg does not break.
- At or above `F` → the egg breaks.
- Find the minimum number of drops needed in the **worst case**.

## Why Not Binary Search?

If we drop an egg from floor 50 and it breaks, only **one egg remains**. We would then need to check the lower floors one by one.

So we need a strategy that works even if the first egg breaks early.

## Key Idea

If we have `x` drops, use **decreasing intervals**:

```text
x, x-1, x-2, x-3, ...
```

For `x = 14`, the floors are:

```text
14 → 27 → 39 → 50 → 60 → 69 → 77 → 84 → 90 → 95 → 99 → 100
```

The jumps are:

```text
+14, +13, +12, +11, +10, +9, +8, ...
```

We decrease the jump because if the first egg breaks, the remaining drops must be enough to check the previous interval using the second egg.

## Calculate `x`

We need:

```text
x + (x - 1) + (x - 2) + ... + 1 ≥ 100
```

Using the sum formula:

```text
x(x + 1) / 2 ≥ 100
```

For `x = 13`:

```text
13 × 14 / 2 = 91  ❌
```

For `x = 14`:

```text
14 × 15 / 2 = 105  ✅
```

Therefore:

## Answer

**Minimum number of drops = 14**

## Interview Explanation

> With two eggs, I use decreasing intervals so that if the first egg breaks, the remaining drops are sufficient to linearly search the previous interval with the second egg. The minimum `x` satisfying `x(x + 1) / 2 ≥ 100` is **14**.
