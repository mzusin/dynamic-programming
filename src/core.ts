/**
 * https://leetcode.com/problems/fibonacci-number/description/
 */
export const fibonacciNumberRecursive = (n: number) => {
    const map = new Map();

    const helper = (num: number) : number => {
        if(num <= 1) return num;
        if(map.has(num)) return map.get(num);

        const res = helper(num - 1) + helper(num - 2);
        map.set(num, res);

        return res;
    };

    return helper(n);
};

/**
 * https://leetcode.com/problems/fibonacci-number/description/
 */
export const fibonacciNumberIterative = (n: number) => {

    const arr = [0, 1];

    if(n <= 1) return n;

    for (let i=2; i<=n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr[arr.length-1];
};

/**
 * https://leetcode.com/problems/n-th-tribonacci-number/description/
 */
export const tribonacciIterative = (n: number) => {
    const cache = [0, 1, 1];

    for(let i=3; i<=n; i++) {
        cache[i] = cache[i-1] + cache[i-2] + cache[i-3];
    }

    return cache[n];
};

/**
 * https://leetcode.com/problems/counting-bits/description/
 */
export const countBits = (n: number) => {

    const res: number[] = [];

    for(let i=0; i<=n; i++) {
        const iDividedBy2 = i >> 1; // Math.floor(i/2);
        const lsb = i & 1;
        res[i] = (res[iDividedBy2] ?? 0) + lsb;
    }

    return res;
};

/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 */
export const minCostClimbingStairsRecursive = (cost: number[]) => {

    const cache: number[] = [];

    const helper = (index: number) : number => {

        if(index >= cost.length) return 0;

        if(cache[index] !== undefined) return cache[index];

        const one = helper(index + 1);
        const two = helper(index + 2);
        const min = cost[index] + Math.min(one, two);

        cache[index] = min;
        return min;
    };

    const one = helper(0);
    const two = helper(1);

    return Math.min(one, two);
};

/**
 * https://leetcode.com/problems/min-cost-climbing-stairs/description/
 */
export const minCostClimbingStairsIterative = (cost: number[]) => {

    const cache = [0, 0];

    for(let i=2; i<=cost.length; i++) {
        cache[i] = Math.min(cost[i-1] + cache[i-1], cost[i-2] + cache[i-2]);
    }

    return cache[cost.length];
};