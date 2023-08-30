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

/**
 * Find the left-most occurrence of a target.
 */
export const binarySearchIterative = (nums: number[], target: number) : number => {

    if(nums.length <= 0) return -1;

    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        const middle = start + Math.floor((end - start)/2);

        if(target <= nums[middle]) {
            end = middle;
        }
        else{
            start = middle + 1;
        }
    }

    return nums[start] === target ? start : -1;
};
