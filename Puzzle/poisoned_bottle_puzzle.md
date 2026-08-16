# Poisoned Bottle Puzzle

## Question

You have:

- 1000 bottles
- Exactly 1 poisoned bottle
- 10 mice
- Poison kills a mouse after 24 hours
- Only 1 testing round

**How can you identify the poisoned bottle?**

## Hint

Each mouse has 2 possible states:

- Alive = `0`
- Dead = `1`

Therefore, 10 mice can create:

`2^10 = 1024`

different patterns.

## Full Solution

### 1. Number the bottles

Number the bottles:

`1, 2, 3, ..., 1000`

Write every bottle number as a **10-bit binary number**.

### 2. Assign mice to binary bits

Number the mice from `1` to `10`.

For each bottle:

- If its binary representation has `1` at Mouse `i`'s position, give Mouse `i` a sample from that bottle.
- If it has `0`, do not give that mouse a sample.

### Example: Bottle 5

`5 = 0000000101`

The `1`s are at the positions for Mouse 1 and Mouse 3.

Therefore:

- Mouse 1 receives a sample.
- Mouse 3 receives a sample.
- All other mice do not receive a sample from Bottle 5.

### 3. Wait 24 hours

If Bottle 5 is poisoned:

- Mouse 1 dies.
- Mouse 3 dies.
- All other mice survive.

The resulting 10-bit pattern is:

`0000000101`

This binary number equals:

`5`

Therefore, **Bottle 5 is the poisoned bottle**.

## Final Answer

`2^10 = 1024`

Since:

`1024 > 1000`

10 mice provide enough unique alive/dead patterns to identify any one of the 1000 bottles.

**Answer: 10 mice are sufficient.**

## Key Insight

This is a **binary encoding problem**.

`Alive = 0`

`Dead = 1`

With 10 mice:

`2^10 = 1024`

unique patterns are possible, which is enough to represent 1000 bottles.
