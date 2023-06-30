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