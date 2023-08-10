/**
 * Number of times sorted array is rotated
 * 
 * [ Number of rotation = index of the minimum element in an Array ]
 * Minimum element is always smaller to both of its neighbours
 */

function rotationInSortedArray(nums = [])
{
    let start = 0, end = nums.length - 1, mid;

    while(start<=end)
    {
        mid = start + Math.floor((end-start)/2)

        // we are either on first, last index or min element index
        if(!nums[mid+1] || !nums[mid-1] || nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1])
        {
            return mid 
        }

        // sorted array to left
        if(nums[mid] > nums[0])        
            start = mid+1;
        else 
            end = mid - 1;
    }

    return -1
}

// TODO:
// Q1: Check if Array Is Sorted and Rotated
// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

function rotationInSortedArray(nums = [])
{
    let start = 0, end = nums.length - 1, mid;

    while(start<=end)
    {
        mid = start + Math.floor((end-start)/2)

        // we are either on first, last index or min element index
        if(!nums[mid+1] || !nums[mid-1] || nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1])
        {
            return true 
        }

        // sorted array to left
        if(nums[mid] > nums[0])        
            start = mid+1;
        else 
            end = mid - 1;
    }

    return false
}

// Q1: https://leetcode.com/problems/search-in-rotated-sorted-array/
// rotated sorted array


//Q2: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
// rotated sorted array II


