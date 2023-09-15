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