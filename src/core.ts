export const binarySearchRecursive = (nums: number[], target: number) : number => {

    const n = nums.length;
    if(n <= 0) return -1;

    const helper = (start: number, end: number) : number => {
        if(start > end) return -1;

        const middle = start + Math.ceil((end - start)/2);
        if(nums[middle] === target) return middle;

        return nums[middle] < target ? helper(middle + 1, end) : helper(start, middle - 1);
    };

    return helper(0, n - 1);
};

export const binarySearchIterative = (nums: number[], target: number) : number => {

    if(nums.length <= 0) return -1;

    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        const middle = start + Math.floor((end - start)/2);

        if(nums[middle] === target) return middle;

        if(target < nums[middle]) {
            end = middle - 1;
        }
        else{
            start = middle + 1;
        }
    }

    // At this point, 'start' index is the index where
    // the target value would be if it were inserted in order.
    // The solution for below problem is: `return start;` instead of `return -1;`
    // https://leetcode.com/problems/search-insert-position/description/
    return -1;
};

/**
 * Handle duplicates and always return the leftmost occurrence of the target element.
 */
export const binarySearchIterativeLeftMost = (nums: number[], target: number) : number => {

    if(nums.length <= 0) return -1;

    let start = 0;
    let end = nums.length - 1;

    // Initialize to -1, indicating that
    // the leftmost index is not found yet.
    let leftmostIndex = -1;

    while(start <= end) {
        const middle = start + Math.floor((end - start)/2);

        if(nums[middle] === target){
            // Instead of immediately returning the middle index when the target is found,
            // continue searching towards the left side of the array.

            // Update leftmostIndex to the current middle index
            leftmostIndex = middle;

            // Continue searching to the left
            end = middle - 1;
        }
        else {
            if(target < nums[middle]) {
                end = middle - 1;
            }
            else{
                start = middle + 1;
            }
        }
    }

    // Return the leftmost index of the target (or -1 if not found)
    return leftmostIndex;
};

/**
 * Handle duplicates and always return the rightmost occurrence of the target element.
 */
export const binarySearchIterativeRightMost = (nums: number[], target: number) : number => {

    if(nums.length <= 0) return -1;

    let start = 0;
    let end = nums.length - 1;

    // Initialize to -1, indicating that
    // the rightmost index is not found yet.
    let rightmostIndex = -1;

    while(start <= end) {
        const middle = start + Math.floor((end - start)/2);

        if(nums[middle] === target){
            // Instead of immediately returning the middle index when the target is found,
            // continue searching towards the right side of the array.

            // Update rightmostIndex to the current middle index
            rightmostIndex = middle;

            // Continue searching to the right
            start = middle + 1;
        }
        else {
            if(target < nums[middle]) {
                end = middle - 1;
            }
            else{
                start = middle + 1;
            }
        }
    }

    // Return the rightmost index of the target (or -1 if not found)
    return rightmostIndex;
};