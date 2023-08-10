//Q1: https://leetcode.com/problems/binary-search/
// Sorted Array
function binarySearch(nums = [], target)
{
    let start = 0, end = nums.length-1
    let mid;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2)

        if(nums[mid] === target)
            return mid
        else if(nums[mid] > target)
            end = mid+1
        else 
            start = mid-1    
    }

    return -1
}

// Q2: reverse Sorted Array
function binarySearch(nums = [], target)
{
    let start = 0, end = nums.length-1
    let mid;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2)

        if(nums[mid] === target)
            return mid
        else if(nums[mid] > target)
            start = mid+1
        else 
            end = mid-1    
    }

    return -1
}


// Order agnostic binary search


// Q3: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// first and last occurrence of an element 

// Count of an Element in a Sorted Array -> (lastIndex - firstIndex + 1)

function binarySearch(nums = [], target)
{
    const defaultIndexes = [-1, -1]
    if(!nums.length)
        return defaultIndexes;

    let start = 0, end = nums.length-1
    let mid;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2)

        if(nums[mid] === target)
        {
            let firstIdx = mid, lastIdx = mid;
            while(nums[lastIdx+1] === target || nums[firstIdx-1] === target)
            {
                if(nums[lastIdx+1] === target)
                {
                    lastIdx++
                }

                if(nums[firstIdx-1] === target)
                {
                    firstIdx++
                }
            }
            
            return [firstIdx, lastIdx]
        }
        
        if(nums[mid] > target)
        {
            while(nums[mid] === nums[mid-1])
            {
                mid--
            }
            end = mid-1
        }
        else
        {
            while(nums[mid] === nums[mid+1])
            {
                mid++
            }
            start = mid+1
        }
    }

    return defaultIndexes
}

// Q: https://leetcode.com/problems/single-element-in-a-sorted-array/
// single element in sorted array