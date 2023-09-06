import {
    findFirstNonNegativeNumberIterative,
    countNegativeNumbersIterative
} from '../src/count';

describe('Count', () => {

    describe('findFirstNonNegativeNumberIterative', () => {

        it(`positive number doesn't exists`, () => {
            const result = findFirstNonNegativeNumberIterative([-5, -3, -2, -1, -1]);
            expect(result).toStrictEqual(-1);
        });

        it(`empty array`, () => {
            const result = findFirstNonNegativeNumberIterative([]);
            expect(result).toStrictEqual(-1);
        });

        it(`negative & positive numbers`, () => {
            const result = findFirstNonNegativeNumberIterative([-5, -3, -2, 1, 2, 3]);
            expect(result).toStrictEqual(3);
        });

        it(`only positive numbers`, () => {
            const result = findFirstNonNegativeNumberIterative([1, 2, 3, 12, 24, 100]);
            expect(result).toStrictEqual(0);
        });

        // Test case 1: Array with the first positive number at the beginning
        it('should find the first positive number at the beginning of the array', () => {
            const nums = [1, 2, 3, 4, 5];
            const result = findFirstNonNegativeNumberIterative(nums);
            expect(result).toBe(0); // The first positive number is 1
        });

        // Test case 2: Array with the first positive number in the middle
        it('should find the first positive number in the middle of the array', () => {
            const nums = [-3, -2, 0, 1, 2, 3, 4];
            const result = findFirstNonNegativeNumberIterative(nums);
            expect(result).toBe(2); // The first positive number is 1
        });

        // Test case 3: Array with the first positive number at the end
        it('should find the first positive number at the end of the array', () => {
            const nums = [-5, -4, -3, -2, -1, 0, 1];
            const result = findFirstNonNegativeNumberIterative(nums);
            expect(result).toBe(5); // The first positive number is 1
        });

        // Test case 4: Array with no positive numbers
        it('should return -1 for an array with no positive numbers', () => {
            const nums = [-5, -4, -3, -2, -1];
            const result = findFirstNonNegativeNumberIterative(nums);
            expect(result).toBe(-1); // No positive numbers in the array
        });

        // Test case 5: Array with all positive numbers
        it('should find the first positive number in an array with all positive numbers', () => {
            const nums = [1, 2, 3, 4, 5];
            const result = findFirstNonNegativeNumberIterative(nums);
            expect(result).toBe(0); // The first positive number is 1
        });

    });

    describe('countNegativeNumbersIterative', () => {
        // Test case 1: Array with all negative numbers
        it('should count all negative numbers in an array with all negative numbers', () => {
            const nums = [-5, -3, -2, -1, -1];
            const result = countNegativeNumbersIterative(nums);
            expect(result).toBe(nums.length); // All numbers are negative
        });

        // Test case 2: Array with no negative numbers
        it('should count zero negative numbers in an array with no negative numbers', () => {
            const nums = [0, 1, 2, 3, 4];
            const result = countNegativeNumbersIterative(nums);
            expect(result).toBe(0); // No negative numbers in the array
        });

        // Test case 3: Array with mixed positive and negative numbers
        it('should count negative numbers in an array with mixed positive and negative numbers', () => {
            const nums = [-5, -3, -2, -1, 0, 1, 2, 3, 4];
            const result = countNegativeNumbersIterative(nums);
            expect(result).toBe(4); // There are 5 negative numbers in the array
        });

        // Test case 4: Array with one negative number
        it('should count one negative number in an array with one negative number', () => {
            const nums = [-5];
            const result = countNegativeNumbersIterative(nums);
            expect(result).toBe(1); // There is one negative number in the array
        });

        // Test case 5: Array with one positive number
        it('should count zero negative numbers in an array with one positive number', () => {
            const nums = [5];
            const result = countNegativeNumbersIterative(nums);
            expect(result).toBe(0); // There are no negative numbers in the array
        });

        // Test case 6: Empty array
        it('should count zero negative numbers in an empty array', () => {
            const nums: number[] = [];
            const result = countNegativeNumbersIterative(nums);
            expect(result).toBe(0); // Empty array, so no negative numbers
        });
    });

});