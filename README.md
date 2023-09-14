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

