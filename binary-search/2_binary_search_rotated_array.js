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
function checkRotationSortedArray(nums = [])
{
    return false
}

// Q2: rotated sorted array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
function rotationInSortedArray(nums = [], target)
{
    let start = 0, end = nums.length - 1, mid;

    while(start<=end)
    {
        mid = start + Math.floor((end-start)/2)

        // we are either on first, last index or min element index
        const checkLastIndex = nums[mid+1] !== 0 && !nums[mid+1];
        const checkFirstIndex = nums[mid-1] !== 0 && !nums[mid-1];
        if(checkFirstIndex || checkLastIndex || nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1])
        {
            const end = mid > 0 ? mid - 1 : mid
            const start = end === 0 ? end + 1 : mid
            const index1 = binarySearch(nums, 0, end, target)
            const index2 = binarySearch(nums, start, nums.length-1, target)

            return index1 > -1 ? index1 : index2
        }

        // sorted array to left
        if(nums[mid] > nums[0])        
            start = mid+1;
        else 
            end = mid - 1;
    }

    return -1
}

function binarySearch(nums = [], start, end, target)
{
    // let start = start, end = end
    let mid;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2)

        if(nums[mid] === target)
            return mid
            
        else if(nums[mid] > target)
            end = mid-1
        else 
            start = mid+1    
    }

    return -1
}


//Q3: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
// rotated sorted array II

function rotationInSortedArray(nums = [], target)
{
    let start = 0, end = nums.length - 1, mid;

    while(start<=end)
    {
        mid = start + Math.floor((end-start)/2)

        // we are either on first, last index or min element index
        const checkLastIndex = nums[mid+1] !== 0 && !nums[mid+1];
        const checkFirstIndex = nums[mid-1] !== 0 && !nums[mid-1];
        if(checkFirstIndex || checkLastIndex || nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1])
        {
            const end = mid > 0 ? mid - 1 : mid
            const start = end === 0 ? end + 1 : mid
            const index1 = binarySearch(nums, 0, end, target)
            const index2 = binarySearch(nums, start, nums.length-1, target)

            return index1 > -1 ? true : index2 > -1 ? true : false
        }

        // sorted array to left
        if(nums[mid] > nums[0])        
            start = mid+1;
        else 
            end = mid - 1;
    }

    return false
}

function binarySearch(nums = [], start, end, target)
{
    // let start = start, end = end
    let mid;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2)

        if(nums[mid] === target)
            return mid
            
        else if(nums[mid] > target)
            end = mid-1
        else 
            start = mid+1    
    }

    return -1
}