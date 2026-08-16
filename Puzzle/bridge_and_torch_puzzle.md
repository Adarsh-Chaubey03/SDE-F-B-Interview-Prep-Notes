# Bridge and Torch Puzzle

## Question

Four people need to cross a bridge at night.

  Person     Crossing Time
  -------- ---------------
  A               1 minute
  B              2 minutes
  C              7 minutes
  D             10 minutes

### Rules

-   At most 2 people can cross at once.
-   The torch must always be carried.
-   Two people cross at the slower person's speed.
-   The torch must be brought back when needed.

**Find the minimum total time for everyone to cross.**

## Hint

Use the two fastest people to carry the torch back and forth.

## Solution

Let the times be:

`1, 2, 7, 10`

### Step 1

1 and 2 cross:

`2 minutes`

### Step 2

1 returns:

`1 minute`

### Step 3

7 and 10 cross together:

`10 minutes`

### Step 4

2 returns:

`2 minutes`

### Step 5

1 and 2 cross:

`2 minutes`

### Total

\[ 2+1+10+2+2=oxed{17 ext{ minutes}} \]

## Final Answer

**Minimum time = 17 minutes**

### Key Insight

Send the two slowest people together, while the two fastest people
handle the torch returns.

Always track the **torch position** after every crossing.
