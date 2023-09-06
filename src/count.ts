
export const findFirstNonNegativeNumberIterative = (nums: number[]) : number => {

    if(nums.length <= 0) return -1;

    let start = 0;
    let end = nums.length - 1;

    // Initialize to -1, indicating that
    // the leftmost index is not found yet.
    let leftmostIndex = -1;

    while(start <= end) {
        const middle = start + Math.floor((end - start)/2);

        if(nums[middle] >= 0){
            // Instead of immediately returning the middle index when the target is found,
            // continue searching towards the left side of the array.

            // Update leftmostIndex to the current middle index
            leftmostIndex = middle;

            // Continue searching to the left
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }

    // Return the leftmost index of the target (or -1 if not found)
    return leftmostIndex;
};

export const countNegativeNumbersIterative = (nums: number[]) : number => {

    const indexOfFirstNonNegative = findFirstNonNegativeNumberIterative(nums);
    if(indexOfFirstNonNegative === -1) return nums.length;

    return indexOfFirstNonNegative;
};
