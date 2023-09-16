import {
    fibonacciNumberIterative,
    fibonacciNumberRecursive,
    tribonacciIterative,
    countBits,
    minCostClimbingStairsRecursive,
    minCostClimbingStairsIterative,
} from '../src/core';

describe('Core', () => {

    describe('fibonacciNumberIterative()', () => {
        it('should return 0 for n = 0', () => {
            expect(fibonacciNumberIterative(0)).toBe(0);
        });

        it('should return 1 for n = 1', () => {
            expect(fibonacciNumberIterative(1)).toBe(1);
        });

        it('should return the correct Fibonacci number for n = 2', () => {
            expect(fibonacciNumberIterative(2)).toBe(1);
        });

        it('should return the correct Fibonacci number for n = 5', () => {
            expect(fibonacciNumberIterative(5)).toBe(5);
        });

        it('should return the correct Fibonacci number for n = 10', () => {
            expect(fibonacciNumberIterative(10)).toBe(55);
        });

        it('should return the correct Fibonacci number for n = 15', () => {
            expect(fibonacciNumberIterative(15)).toBe(610);
        });
    });

    describe('fibonacciNumberRecursive()', () => {
        it('should return 0 for n = 0', () => {
            expect(fibonacciNumberRecursive(0)).toBe(0);
        });

        it('should return 1 for n = 1', () => {
            expect(fibonacciNumberRecursive(1)).toBe(1);
        });

        it('should return the correct Fibonacci number for n = 2', () => {
            expect(fibonacciNumberRecursive(2)).toBe(1);
        });

        it('should return the correct Fibonacci number for n = 5', () => {
            expect(fibonacciNumberRecursive(5)).toBe(5);
        });

        it('should return the correct Fibonacci number for n = 10', () => {
            expect(fibonacciNumberRecursive(10)).toBe(55);
        });

        it('should return the correct Fibonacci number for n = 15', () => {
            expect(fibonacciNumberRecursive(15)).toBe(610);
        });
    });

    describe('tribonacciIterative()', () => {
        it('should return 0 for n = 0', () => {
            expect(tribonacciIterative(0)).toBe(0);
        });

        it('should return 1 for n = 1', () => {
            expect(tribonacciIterative(1)).toBe(1);
        });

        it('should return 1 for n = 2', () => {
            expect(tribonacciIterative(2)).toBe(1);
        });

        it('should return 2 for n = 3', () => {
            expect(tribonacciIterative(3)).toBe(2);
        });

        it('should return 4 for n = 4', () => {
            expect(tribonacciIterative(4)).toBe(4);
        });

        it('should return 7 for n = 5', () => {
            expect(tribonacciIterative(5)).toBe(7);
        });
    });

    describe('countBits()', () => {
        it('should return [0] for n = 0', () => {
            expect(countBits(0)).toEqual([0]);
        });

        it('should return [0, 1] for n = 1', () => {
            expect(countBits(1)).toEqual([0, 1]);
        });

        it('should return [0, 1, 1] for n = 2', () => {
            expect(countBits(2)).toEqual([0, 1, 1]);
        });

        it('should return [0, 1, 1, 2, 1, 2] for n = 5', () => {
            expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
        });

        it('should return [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2] for n = 10', () => {
            expect(countBits(10)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2]);
        });
    });

    describe('minCostClimbingStairsRecursive()' ,() => {

        it('should return the correct minimum cost for a cost array of length 2', () => {
            expect(minCostClimbingStairsRecursive([10, 15])).toBe(10);
        });

        it('should return the correct minimum cost for a cost array of length 3', () => {
            expect(minCostClimbingStairsRecursive([10, 15, 20])).toBe(15);
        });

        it('should return the correct minimum cost for a larger cost array', () => {
            expect(minCostClimbingStairsRecursive([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
        });
    });

    describe('minCostClimbingStairsIterative()' ,() => {

        it('should return the correct minimum cost for a cost array of length 2', () => {
            expect(minCostClimbingStairsIterative([10, 15])).toBe(10);
        });

        it('should return the correct minimum cost for a cost array of length 3', () => {
            expect(minCostClimbingStairsIterative([10, 15, 20])).toBe(15);
        });

        it('should return the correct minimum cost for a larger cost array', () => {
            expect(minCostClimbingStairsIterative([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6);
        });
    });
});