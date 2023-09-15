# Dynamic Programming (DP)

- DP problems have a **recursive pattern** that repeats itself over and over again. The main goal is to **optimize it** so that it is called only once for **each set of parameters**.
- The classic DP problem is Fibonacci.
- There are two ways to implement a DP algorithm - **Bottom-up** (tabulation) and **Top-down** (memoization).

-------------

## Functions
- fibonacciNumberRecursive: (n: number) => number;
- fibonacciNumberIterative: (n: number) => number;

-------------

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

### What is state in DP problems?
- **State** = set of variables that can sufficiently describe a scenario. These variables are called **state variables**.
- A typical state variable is the array index i, which defines the step of something.
- If the problem had an added constraint such as "**you are only allowed to rob up to k houses**", then **k** would be another necessary state variable. This is because being at, say house 4 with 3 robberies left is different than being at house 4 with 5 robberies left.
- The **dimensions** of a DP algorithm refer to the number of state variables used to define each state. **One-dimensional** = 1 state variable.
- These can be boolean states variables, for example **visited**.
- Usually, the role of state variables is played by immutable data structures - numbers, strings etc., but not arrays, because they are mutable.
- It is necessary to have as few state variables as possible - the fewer there are, the better the algorithm.
- **State Reduction** is a reduction in the number of state variables when we express one of them in terms of others.
- Sometimes for some state variables, they do not need to be stored in an array at all, but you can use **one or more variables to store them!**
- Whenever you notice that values calculated by a DP algorithm are only reused a few times and then never used again, try to see if you can save on space by replacing an array with some variables. A good first step for this is to look at the recurrence relation to see what previous states are used. For example, in Fibonacci, we only refer to the previous two states, so all results before n - 2 can be discarded.

### A recurrence relation
- This is an equation that describes **transition between states**.
- Typically, finding the recurrence relation is the most difficult part of solving a DP problem.
- In problems like **up to k steps at a time** - recurrence relation is not one static formula. And you need to make a loop inside to find the best option every time.

### How to find base cases?
- Finding the base cases is often the easiest part of solving a DP problem.
- When coming up with the base case(s) ask yourself: What state(s) can I find the answer to without using dynamic programming?

### How to find Time and Space Complexity?
- The time complexity of a DP algorithm is directly tied to the number of possible states
- Time complexity = O(number_of_states * time_of_state)
- Since we store states, the space complexity is equal to the number of states
- That means that in problems where calculating a state is O(1), the time and space complexity are the same.

### How to solve DP problems?
1. You need a **function** that will calculate a solution to the problem for each state, or a **data structure** that will store this solution for each state.
2. State variables should be passed as **arguments** to that function.
3. To check all possible **variants** that we have.
4. We take the simplest data as an example - 0, 1, 2, 3, 4, 5 or something similar.
5. Let's see how the first item transforms into the second item - everything that we don't know, we define as future recursion.



