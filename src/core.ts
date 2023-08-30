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


/*
def find_left(nums: List[int], target: int) -> int:
  lo, hi = 0, len(nums) - 1

  while lo < hi:  # Stop searching when lo meets hi.
    mid = (hi - lo) // 2 + lo  # Find the midway point.

    if target <= nums[mid]:  # Customize this condition.
      # Search the left side (including mid).
      hi = mid
    else:
      # Search the right side (not including mid).
      lo = mid + 1

  # Check if we found our target.
  if nums[lo] != target:
    return -1

  return lo  # Our target should be at lo.
 */