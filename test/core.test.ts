import { fibonacciNumberIterative, fibonacciNumberRecursive } from '../src/core';

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
});