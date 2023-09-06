import {
    binarySearchRecursive,
    binarySearchRecursiveLeftMost,
    binarySearchIterative,
    binarySearchIterativeLeftMost,
    binarySearchIterativeRightMost,
    binarySearchRecursiveRightMost,
} from '../src/core';

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
    });

    describe('binarySearchRecursiveLeftMost()', () => {
        it('should return the index of the target element in a sorted array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchRecursiveLeftMost(nums, 3)).toEqual(2);
            expect(binarySearchRecursiveLeftMost(nums, 6)).toEqual(5);
        });

        it('should return -1 when the target element is not found in the array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchRecursiveLeftMost(nums, 8)).toEqual(-1);
            expect(binarySearchRecursiveLeftMost(nums, 0)).toEqual(-1);
        });

        it('should handle an empty array and return -1', () => {
            const nums: number[] = [];
            expect(binarySearchRecursiveLeftMost(nums, 3)).toEqual(-1);
        });

        it('should handle a single-element array', () => {
            const nums = [1];
            expect(binarySearchRecursiveLeftMost(nums, 1)).toEqual(0);
            expect(binarySearchRecursiveLeftMost(nums, 2)).toEqual(-1);
        });

        it('should handle an array with duplicate elements', () => {
            const nums = [1, 2, 3, 3, 4, 5, 6];
            expect(binarySearchRecursiveLeftMost(nums, 3)).toEqual(2);
            expect(binarySearchRecursiveLeftMost(nums, 6)).toEqual(6);
        });

        // Test case 1: Duplicates present, target found on the leftmost side
        it('should return the leftmost index when duplicates are present and target found on the left', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 2;
            const result = binarySearchRecursiveLeftMost(nums, target);
            expect(result).toBe(1); // The leftmost index of 2 in the array is 1
        });

        // Test case 2: Duplicates present, target found on the right side
        it('should return the leftmost index when duplicates are present and target found on the right', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 3;
            const result = binarySearchRecursiveLeftMost(nums, target);
            expect(result).toBe(4); // The leftmost index of 3 in the array is 4
        });

        // Test case 3: Duplicates present, target not found
        it('should return -1 when duplicates are present and target is not found', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 6;
            const result = binarySearchRecursiveLeftMost(nums, target);
            expect(result).toBe(-1); // Target 6 is not present in the array
        });
    });

    describe('binarySearchRecursiveRightMost()', () => {
        it('should return the index of the target element in a sorted array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchRecursiveRightMost(nums, 3)).toEqual(2);
            expect(binarySearchRecursiveRightMost(nums, 6)).toEqual(5);
        });

        it('should return -1 when the target element is not found in the array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchRecursiveRightMost(nums, 8)).toEqual(-1);
            expect(binarySearchRecursiveRightMost(nums, 0)).toEqual(-1);
        });

        it('should handle an empty array and return -1', () => {
            const nums: number[] = [];
            expect(binarySearchRecursiveRightMost(nums, 3)).toEqual(-1);
        });

        it('should handle a single-element array', () => {
            const nums = [1];
            expect(binarySearchRecursiveRightMost(nums, 1)).toEqual(0);
            expect(binarySearchRecursiveRightMost(nums, 2)).toEqual(-1);
        });

        it('should handle an array with duplicate elements', () => {
            const nums = [1, 2, 3, 3, 4, 5, 6, 6];
            expect(binarySearchRecursiveRightMost(nums, 3)).toEqual(3);
            expect(binarySearchRecursiveRightMost(nums, 6)).toEqual(7);
        });

        // Test case 1: Duplicates present, target found on the leftmost side
        it('should return the leftmost index when duplicates are present and target found on the left', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 2;
            const result = binarySearchRecursiveRightMost(nums, target);
            expect(result).toBe(3);
        });

        // Test case 2: Duplicates present, target found on the right side
        it('should return the leftmost index when duplicates are present and target found on the right', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 3;
            const result = binarySearchRecursiveRightMost(nums, target);
            expect(result).toBe(4); // The leftmost index of 3 in the array is 4
        });

        // Test case 3: Duplicates present, target not found
        it('should return -1 when duplicates are present and target is not found', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 6;
            const result = binarySearchRecursiveRightMost(nums, target);
            expect(result).toBe(-1); // Target 6 is not present in the array
        });

        // Test case 4: Empty array
        it('should return -1 when the input array is empty', () => {
            const nums: number[] = [];
            const target = 2;
            const result = binarySearchRecursiveRightMost(nums, target);
            expect(result).toBe(-1); // Empty array, so the target is not present
        });

        // Test case 5: Array with a single element (target)
        it('should return 0 when the input array has a single element matching the target', () => {
            const nums = [5];
            const target = 5;
            const result = binarySearchRecursiveRightMost(nums, target);
            expect(result).toBe(0); // The only element in the array is the target
        });
    });

    describe('binarySearchIterative()', () => {
        it('should return the index of the target element in a sorted array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchIterative(nums, 3)).toEqual(2);
            expect(binarySearchIterative(nums, 6)).toEqual(5);
        });

        it('should return -1 when the target element is not found in the array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchIterative(nums, 8)).toEqual(-1);
            expect(binarySearchIterative(nums, 0)).toEqual(-1);
        });

        it('should handle an empty array and return -1', () => {
            const nums: number[] = [];
            expect(binarySearchIterative(nums, 3)).toEqual(-1);
        });

        it('should handle a single-element array', () => {
            const nums = [1];
            expect(binarySearchIterative(nums, 1)).toEqual(0);
            expect(binarySearchIterative(nums, 2)).toEqual(-1);
        });
    });

    describe('binarySearchIterativeLeftMost()', () => {
        it('should return the index of the target element in a sorted array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchIterativeLeftMost(nums, 3)).toEqual(2);
            expect(binarySearchIterativeLeftMost(nums, 6)).toEqual(5);
        });

        it('should return -1 when the target element is not found in the array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchIterativeLeftMost(nums, 8)).toEqual(-1);
            expect(binarySearchIterativeLeftMost(nums, 0)).toEqual(-1);
        });

        it('should handle an empty array and return -1', () => {
            const nums: number[] = [];
            expect(binarySearchIterativeLeftMost(nums, 3)).toEqual(-1);
        });

        it('should handle a single-element array', () => {
            const nums = [1];
            expect(binarySearchIterativeLeftMost(nums, 1)).toEqual(0);
            expect(binarySearchIterativeLeftMost(nums, 2)).toEqual(-1);
        });

        it('should handle an array with duplicate elements', () => {
            const nums = [1, 2, 3, 3, 4, 5, 6];
            expect(binarySearchIterativeLeftMost(nums, 3)).toEqual(2);
            expect(binarySearchIterativeLeftMost(nums, 6)).toEqual(6);
        });

        // Test case 1: Duplicates present, target found on the leftmost side
        it('should return the leftmost index when duplicates are present and target found on the left', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 2;
            const result = binarySearchIterativeLeftMost(nums, target);
            expect(result).toBe(1); // The leftmost index of 2 in the array is 1
        });

        // Test case 2: Duplicates present, target found on the right side
        it('should return the leftmost index when duplicates are present and target found on the right', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 3;
            const result = binarySearchIterativeLeftMost(nums, target);
            expect(result).toBe(4); // The leftmost index of 3 in the array is 4
        });

        // Test case 3: Duplicates present, target not found
        it('should return -1 when duplicates are present and target is not found', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 6;
            const result = binarySearchIterativeLeftMost(nums, target);
            expect(result).toBe(-1); // Target 6 is not present in the array
        });

        // Test case 4: Empty array
        it('should return -1 when the input array is empty', () => {
            const nums: number[] = [];
            const target = 2;
            const result = binarySearchIterativeLeftMost(nums, target);
            expect(result).toBe(-1); // Empty array, so the target is not present
        });

        // Test case 5: Array with a single element (target)
        it('should return 0 when the input array has a single element matching the target', () => {
            const nums = [5];
            const target = 5;
            const result = binarySearchIterativeLeftMost(nums, target);
            expect(result).toBe(0); // The only element in the array is the target
        });
    });

    describe('binarySearchIterativeRightMost()', () => {
        it('should return the index of the target element in a sorted array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchIterativeRightMost(nums, 3)).toEqual(2);
            expect(binarySearchIterativeRightMost(nums, 6)).toEqual(5);
        });

        it('should return -1 when the target element is not found in the array', () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            expect(binarySearchIterativeRightMost(nums, 8)).toEqual(-1);
            expect(binarySearchIterativeRightMost(nums, 0)).toEqual(-1);
        });

        it('should handle an empty array and return -1', () => {
            const nums: number[] = [];
            expect(binarySearchIterativeRightMost(nums, 3)).toEqual(-1);
        });

        it('should handle a single-element array', () => {
            const nums = [1];
            expect(binarySearchIterativeRightMost(nums, 1)).toEqual(0);
            expect(binarySearchIterativeRightMost(nums, 2)).toEqual(-1);
        });

        it('should handle an array with duplicate elements', () => {
            const nums = [1, 2, 3, 3, 4, 5, 6, 6];
            expect(binarySearchIterativeRightMost(nums, 3)).toEqual(3);
            expect(binarySearchIterativeRightMost(nums, 6)).toEqual(7);
        });

        // Test case 1: Duplicates present, target found on the leftmost side
        it('should return the leftmost index when duplicates are present and target found on the left', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 2;
            const result = binarySearchIterativeRightMost(nums, target);
            expect(result).toBe(3);
        });

        // Test case 2: Duplicates present, target found on the right side
        it('should return the leftmost index when duplicates are present and target found on the right', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 3;
            const result = binarySearchIterativeRightMost(nums, target);
            expect(result).toBe(4); // The leftmost index of 3 in the array is 4
        });

        // Test case 3: Duplicates present, target not found
        it('should return -1 when duplicates are present and target is not found', () => {
            const nums = [1, 2, 2, 2, 3, 4, 5];
            const target = 6;
            const result = binarySearchIterativeRightMost(nums, target);
            expect(result).toBe(-1); // Target 6 is not present in the array
        });

        // Test case 4: Empty array
        it('should return -1 when the input array is empty', () => {
            const nums: number[] = [];
            const target = 2;
            const result = binarySearchIterativeRightMost(nums, target);
            expect(result).toBe(-1); // Empty array, so the target is not present
        });

        // Test case 5: Array with a single element (target)
        it('should return 0 when the input array has a single element matching the target', () => {
            const nums = [5];
            const target = 5;
            const result = binarySearchIterativeRightMost(nums, target);
            expect(result).toBe(0); // The only element in the array is the target
        });
    });
});