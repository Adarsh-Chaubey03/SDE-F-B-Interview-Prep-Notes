# Probability --- Quick Revision Notes + Important Interview Questions

## 1. Core Concepts

### Basic Probability

P(A) = favourable outcomes / total outcomes

0 ≤ P(A) ≤ 1

### Complement

P(Aᶜ) = 1 − P(A)

For "at least one": P(at least one) = 1 − P(none)

### Union --- OR

P(A ∪ B) = P(A) + P(B) − P(A ∩ B)

If A and B are mutually exclusive: P(A ∪ B) = P(A) + P(B)

### Intersection --- AND

P(A ∩ B) = P(A)P(B\|A)

For independent events: P(A ∩ B) = P(A)P(B)

### Conditional Probability

P(A\|B) = P(A ∩ B) / P(B)

"Given that" means update the sample space.

### Independent Events

One event does not affect the other. P(A\|B) = P(A)

With replacement → usually independent. Without replacement → usually
dependent.

### Mutually Exclusive Events

They cannot happen together. P(A ∩ B) = 0

For non-zero probability events, mutually exclusive events cannot be
independent.

### Bayes' Theorem

P(A\|B) = P(B\|A)P(A) / P(B)

Use it when you observe a result and want to find its likely source.

### Expected Value

E\[X\] = Σ xᵢP(xᵢ)

It is the probability-weighted average.

### Combinations

When order does not matter: C(n,r) = n! / (r!(n-r)!)

### Permutations

When order matters: P(n,r) = n! / (n-r)!

### Intersection Bounds

max(0, P(A)+P(B)−1) ≤ P(A∩B) ≤ min(P(A),P(B))

## 2. Important Interview Notes

1.  AND → think multiplication.
2.  OR → think addition, then subtract overlap.
3.  At least one → check the complement first.
4.  Given that → think conditional probability.
5.  Without replacement → probabilities usually change.
6.  With replacement → probabilities usually stay the same.
7.  Never assume independence unless given or proved.
8.  Mutually exclusive means intersection = 0.
9.  Independent does not mean mutually exclusive.
10. In conditional probability, update the sample space.
11. In Bayes, identify the source and observed result.
12. In expected value, multiply every outcome by its probability.
13. For selections, ask whether order matters.
14. For optimization, equal distribution is not always optimal.
15. Check that the final probability lies between 0 and 1.

## 3. Important Questions and Short Solutions

### Q1 --- Maximum and Minimum Intersection

Given P(A)=0.7 and P(B)=0.4, find the maximum and minimum P(A∩B).

Maximum = min(0.7, 0.4) = **0.4**

Minimum = max(0, 0.7+0.4−1) = **0.1**

**Answer: 0.1 ≤ P(A∩B) ≤ 0.4**

### Q2 --- At Least One Head

A fair coin is tossed 3 times. Probability of at least one Head?

Complement = TTT.

P(TTT) = (1/2)³ = 1/8

**Answer = 1 − 1/8 = 7/8**

### Q3 --- Conditional Probability

A bag has 5 red and 5 blue balls. Two are drawn without replacement.
Probability second is blue given first is red?

After one red is removed: 5 blue out of 9 balls.

**Answer = 5/9**

### Q4 --- Bayes

Box A: 3R, 2B. Box B: 1R, 4B. A box is chosen randomly and a red ball is
drawn. Probability it came from A?

P(R\|A)=3/5, P(R\|B)=1/5, P(A)=P(B)=1/2.

P(R)=3/10+1/10=4/10.

P(A\|R)=(3/10)/(4/10).

**Answer = 3/4**

### Q5 --- Expected Value

A die pays ₹10, ₹20, ₹30, ₹40, ₹50, ₹60 for outcomes 1--6.

E\[X\] = (10+20+30+40+50+60)/6

**Answer = ₹35**

### Q6 --- Independent Events

A fair coin is tossed twice. A = first Head, B = second Head.

The tosses are independent.

P(A∩B) = (1/2)(1/2)

**Answer = 1/4**

### Q7 --- Mutually Exclusive vs Independent

A fair die: A = even, B = odd.

They cannot happen together, so P(A∩B)=0.

But P(A)P(B)=1/4.

**Answer: mutually exclusive = yes; independent = no; intersection = 0**

### Q8 --- Exactly 2 Red

5 red + 5 blue. Select 3. Probability of exactly 2 red and 1 blue?

Favourable = C(5,2)C(5,1) = 50

Total = C(10,3) = 120

**Answer = 50/120 = 5/12**

### Q9 --- Two Children

Two children. Given at least one is a boy. Probability both are boys?

Possible: BB, BG, GB, GG.

Remove GG.

Remaining: BB, BG, GB.

**Answer = 1/3**

### Q10 --- Girl/Boy

Two children. Given at least one is a girl. Probability both are girls?

Possible: GG, GB, BG, BB.

Remove BB.

**Answer = 1/3**

### Q11 --- Monty Hall

3 doors: 1 car, 2 goats. Choose one. Host knows the car and opens
another door showing a goat.

Original choice = 1/3 chance of car.

Switching captures the remaining 2/3 probability.

**Answer: Switch; winning probability = 2/3**

### Q12 --- Maximize Probability

4 white + 4 black balls, distributed between 2 non-empty boxes. Random
box, then random ball. Maximize probability of white.

Optimal: - Box 1: 1 white - Box 2: 3 white + 4 black

P(W) = 1/2(1) + 1/2(3/7)

**Answer = 5/7 ≈ 71.43%**

### Q13 --- Conditional Dice

A fair die is rolled. Given the number is greater than 3, probability it
is even?

Possible: 4,5,6.

Even: 4,6.

**Answer = 2/3**

### Q14 --- Expected Gain

Fair coin: Heads = +₹100, Tails = −₹60.

E\[X\] = 1/2(100) + 1/2(−60)

**Answer = +₹20**

Positive expected value means favorable on average.

### Q15 --- At Least One Red

3 red + 2 blue. Draw 2 without replacement. Probability of at least one
red?

Complement = both blue.

P(BB) = (2/5)(1/4) = 1/10.

**Answer = 1 − 1/10 = 9/10**

## 4. Interview Answer Pattern

1.  Identify the concept.
2.  Write the relevant formula.
3.  Substitute values.
4.  State the answer clearly.

Avoid long explanations when a short derivation is enough.


