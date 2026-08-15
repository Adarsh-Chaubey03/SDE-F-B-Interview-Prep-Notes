# Fastest 3 Horses Puzzle

## Question

You have **25 horses**.

-   Only 5 horses can race at a time.
-   There is no stopwatch.
-   You only know the finishing order in each race.
-   Each horse has a consistent speed.

**What is the minimum number of races needed to find the 3 fastest
horses?**

## Hint

After the first 5 races, you know the ranking **within each group**, not
the overall ranking.

After racing the 5 group winners, eliminate horses that cannot possibly
be in the top 3.

## Full Solution

### 1. Race the 5 groups

Divide the 25 horses into 5 groups of 5.

Race each group:

``` text
A1 > A2 > A3 > A4 > A5
B1 > B2 > B3 > B4 > B5
C1 > C2 > C3 > C4 > C5
D1 > D2 > D3 > D4 > D5
E1 > E2 > E3 > E4 > E5
```

This takes **5 races**.

### 2. Race the 5 group winners

Race:

``` text
A1, B1, C1, D1, E1
```

Suppose:

``` text
A1 > B1 > C1 > D1 > E1
```

Now **A1 is definitely the fastest horse overall**.

But the top 3 are not yet known because, for example, **A2 could be
faster than B1**.

### 3. Eliminate impossible candidates

From the above result:

-   Groups D and E cannot contain a top-3 horse.
-   C2--C5 cannot be top 3.
-   B3--B5 cannot be top 3.
-   A4--A5 cannot be top 3.

The only possible candidates are:

``` text
A1, A2, A3, B1, B2, C1
```

A1 is already definitely the fastest.

### 4. Final race

Race the remaining five candidates:

``` text
A2, A3, B1, B2, C1
```

The **two fastest** in this race, together with **A1**, are the overall
3 fastest horses.

## Final Answer

**Minimum number of races = 7**

``` text
5 group races + 1 winner race + 1 final race = 7
```

### Key Insight

Winning a group does **not** mean a horse is one of the overall fastest
3.

You must compare the group winners and then eliminate horses that can no
longer reach the top 3.
