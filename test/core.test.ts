import { binarySearchRecursive } from '../src/core';

describe('Core', () => {

    describe('binarySearchRecursive()', () => {
        it('should return the index of the target element in a sorted array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchRecursive(nums, 3)).toEqual(2);
            expect(binarySearchRecursive(nums, 6)).toEqual(5);
        });

        it('should return -1 when the target element is not found in the array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchRecursive(nums, 8)).toEqual(-1);
            expect(binarySearchRecursive(nums, 0)).toEqual(-1);
        });

        it('should handle an empty array and return -1', () => {
            const nums: number[] = [];
            expect(binarySearchRecursive(nums, 3)).toEqual(-1);
        });

        it('should handle a single-element array', () => {
            const nums = [1];
            expect(binarySearchRecursive(nums, 1)).toEqual(0);
            expect(binarySearchRecursive(nums, 2)).toEqual(-1);
        });

        /*it('should handle an array with duplicate elements', () => {
            const nums = [1, 2, 3, 3, 4, 5, 6];
            expect(binarySearchRecursive(nums, 3)).toEqual(2);
            expect(binarySearchRecursive(nums, 6)).toEqual(6);
        });*/
    });
});