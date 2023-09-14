# Dynamic Programming (DP)

- DP problems have a **recursive pattern** that repeats itself over and over again. The main goal is to **optimize it** so that it is called only once for **each set of parameters**.
- The classic DP problem is Fibonacci.
- There are two ways to implement a DP algorithm - **Bottom-up** (tabulation) and **Top-down** (memoization).

### Bottom-up (Tabulation)
- Implemented with iteration.
- Made efficient with array or other storage.
- Starts at the base cases.
- A bottom-up implementation's runtime is usually **faster**, as iteration does not have the overhead that recursion does.
- Typically, bottom-up is implemented with nested for loops and an array.

### Top-down (Memoization)
- Implemented with recursion.
- Made efficient with memoization.
- **Memoization** means caching results from function calls and then referring to those results in the future instead of recalculating them.
- A top-down implementation is usually **much easier to write** than bottom-up (tabulation) approach.
- Typically, top-down is implemented with a **recursive function and hash map**.

### How to identify a DP problem?
- Often DP problems ask you to find **the minimum or maximum** of something.
- The **number of distinct ways to do something**... (term used to describe this class of problems is **Counting DP**)
- Also, problems like: which is the longest, which is the shortest, is it possible to reach a given point, etc.
- **How many distinct ways**...?
- Sometimes such problems can be solved **in other ways**, for example, using greedy algorithms.
- Another important property: the **future** "decisions" depend on **earlier** decisions. _This characteristic is what makes a greedy algorithm invalid for a DP problem - we need to factor in results from previous decisions._
- When you're solving a problem on your own and trying to decide if the second characteristic is applicable, **assume it isn't,** then try to think of a counterexample that proves a greedy algorithm won't work. If you can think of an example where earlier decisions affect future decisions, then DP is applicable.
- **With matrices**: Typically, DP will be applicable when the allowed movement is constrained in a way that prevents moving "backwards", for example if we are only allowed to move down and right. If we are allowed to move in all 4 directions, then it might be a **graph/BFS** problem instead.



