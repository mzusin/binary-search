module 'mz-binary-search' {
    export const getMiddle: (left: number, right: number) => number;
    export const binarySearchRecursive: (nums: number[], target: number) => number;
    export const binarySearchRecursiveLeftMost: (nums: number[], target: number) => number;
    export const binarySearchRecursiveRightMost: (nums: number[], target: number) => number;
    export const binarySearchIterative: (nums: number[], target: number) => number;
    export const binarySearchIterativeLeftMost: (nums: number[], target: number) => number;
    export const binarySearchIterativeRightMost: (nums: number[], target: number) => number;
    export const findFirstNonNegativeNumberIterative: (nums: number[]) => number;
    export const countNegativeNumbersIterative: (nums: number[]) => number;
}