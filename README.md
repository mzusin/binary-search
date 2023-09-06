# Binary Search

## Complexity
- Worst complexity: O(log n)
- Average complexity: O(log n)
- Best complexity: O(1)
- Space complexity: O(1)

## Functions
- binarySearchRecursive: (nums: number[], target: number) => number;
- binarySearchRecursiveLeftMost: (nums: number[], target: number) => number;
- binarySearchRecursiveRightMost: (nums: number[], target: number) => number;
- binarySearchIterative: (nums: number[], target: number) => number;
- binarySearchIterativeLeftMost: (nums: number[], target: number) => number;
- binarySearchIterativeRightMost: (nums: number[], target: number) => number;

## How to identify binary search problems
- The input data is sorted or partially sorted.
- The problem requires searching for a specific value or condition. You have to find some target (index, value, first of something, last of something).
- You're expected to solve the problem in O(log n) time.
- The goal of binary search is to reduce the search space by half at each step, hence achieving O(log n) time complexity.