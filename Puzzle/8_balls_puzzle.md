# 8 Balls Puzzle

## Question

You have **8 identical-looking balls**. Exactly **one ball is heavier**
than the other 7.

You have a **balance scale** and can use it only **twice**.

**How can you always identify the heavier ball?**

## Hint

A balance scale has **3 possible outcomes**:

-   Left side is heavier
-   Right side is heavier
-   Both sides are equal

So divide the possibilities into **3 groups**.

## Full Solution

### First Weighing

Divide the 8 balls into:

-   Group A = 3 balls
-   Group B = 3 balls
-   Group C = 2 balls

Weigh:

**A (3) vs B (3)**

There are 3 cases:

1.  **A = B** → the heavier ball is in Group C (2 balls).
2.  **A \> B** → the heavier ball is in Group A (3 balls).
3.  **B \> A** → the heavier ball is in Group B (3 balls).

### Second Weighing

**Case 1: A = B**

Weigh the 2 balls in Group C against each other.

The heavier one is the answer.

**Case 2: A \> B**

Take the 3 balls in Group A. Weigh:

**1 ball vs 1 ball**

-   If one is heavier → that is the heavy ball.
-   If they are equal → the third ball is the heavy one.

**Case 3: B \> A**

Do the same with the 3 balls in Group B.

### Final Answer

Split the balls **3--3--2**, then use the balance outcomes to reduce the
possibilities to at most 3 balls.

**Maximum number of weighings = 2.**

### Key Insight

One balance weighing has **3 possible outcomes**, so two weighings can
distinguish up to:

`3² = 9`

possibilities.

Since there are only **8 possible heavy balls**, two weighings are
sufficient.
