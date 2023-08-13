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
            end = mid-1
        else 
            start = mid+1    
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


function searchSingleElement(nums = [])
{

    for(let i = 0; i < nums.length; i = i+2)
    {
        if(nums[i] !== nums[i+1])
            return nums[i]
    }
    return -1
}

// Searching in a Nearly Sorted Array
function searchNearlySorted(nums = [], target)
{
    let start = 0, end = nums.length-1
    let mid;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2)

        if(nums[mid] === target)
            return mid
            
        if(mid > start && nums[mid-1] === target)
            return mid-1

        if(mid+1 < end && nums[mid+1] === target)    
            return mid-1
            
        if(nums[mid] > target)
            end = mid-2
        else 
            start = mid+2    
    }

    return -1
}


// find floor in sorted array
// Floor of Number = Greated Element Smaller than Number

// Ceil of an element in a Sorted Array
// Ceil === Smallest element greater than Target Element
// https://leetcode.com/problems/search-insert-position/description/

var searchInsert = function(nums, target) {
    let start = 0, end = nums.length-1, mid, candidate = 0;
    
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2);

        if(nums[mid] === target)
        {
            return mid;
        }
        else if(nums[mid] > target)
            end = mid-1;
        else 
        {
            candidate = mid >= candidate ? mid+1 : candidate;
            start = mid+1;
        }
              
    }

    return candidate;
};

// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
var nextGreatestLetter = function(letters, target) {
    let start = 0, end = letters.length-1, mid, candidate = 0;
    
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2);

        if(letters[mid] === target)
        {
            candidate = mid+1;
            start = mid+1;
            if(letters[candidate] !== target)
                break;
                
        }
        else if(letters[mid] > target)
            end = mid-1;
        else 
        {
            candidate = mid >= candidate ? mid+1 : candidate;
            start = mid+1;
        }
              
    }
    
    return letters[candidate === letters.length ? 0 : candidate];
};


// Find Element Position in infinite sorted array
var searchInfiniteArray = function(nums, target) {
    let start = 0, end = 1;

    while(nums[end] <= target)
    {
        start = end;
        end = end*2;
    }
    
    return binarySearch(nums, target, start, end);
};

function binarySearch(nums = [], target, start, end)
{
    let mid;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2);

        if(nums[mid] === target)
            return mid;
            
        else if(nums[mid] > target)
            end = mid-1;
        else 
            start = mid+1;
    }

    return -1;
}


// Index of First 1 in a Binary Sorted Infinite Array
var searchInfiniteBinaryArray = function(nums) {
    let start = 0, end = 1;

    while(nums[end] < target)
    {
        start = end;
        end = end*2;
    }
    
    return binarySearch(nums, start, end);
};

function binarySearch(nums = [], start, end)
{
    let mid, candidate = -1;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2);

        if(nums[mid] >= target)
        {
            candidate = nums[mid] < candidate ? nums[mid] : candidate;
            end = mid-1;
        }
        else 
            start = mid+1;
    }

    return candidate;
}

// Minimum Difference Element in a Sorted Array
[4,6,10], 7
function minimumDifferece(nums = [], target)
{
    let start = 0, end = nums.length-1
    let mid, candidate, difference;
    while(start <= end)
    {
        mid = Math.floor(start + (end-start)/2)

        const diff = Math.abs(nums[mid] - target)
        if((!difference && difference !== 0) ||  diff < difference) 
        {
            difference = diff
            candidate = mid
        }
            
        if(nums[mid] > target)
            end = mid-1
        else 
            start = mid+1
    }

    return nums[candidate]
}

/**
 * 
 * // Q: Peak Element - 
 * // A Peak Element must be greater than both of its neighbour and
 * // peak element is on the first or last index, then we have to compare only right or left neighour of that element
 * // E.g. [10,20, 30, 40, 50] -> 50 is on last index and it's greater than its left neighbour, so 50 is peak element
 * // There can be more than one peak element in an Array
 * // E.g. [10, 20, 15, 2, 23, 90, 67]
 * // Peak Elements -> 20, 90 (both are greater than its neighbour)
 * // So our can answer can be 1/5 index, either of them is correct
 * // https://leetcode.com/problems/find-peak-element/
 * // https://leetcode.com/problems/peak-index-in-a-mountain-array/
 */
function peakElement(nums = [])
{
    let start = 0, end = nums.length - 1, mid, peakIndex = -1;

    while(start <= end)
    {
        mid = start + Math.floor((end-start)/2)

        const firstIndex = !nums[mid-1] && nums[mid-1] !== 0 && nums[mid] > nums[mid+1]
        const lastIndex = !nums[mid+1] && nums[mid+1] !== 0 && nums[mid] > nums[mid-1]
        const singleArray = nums.length === 1
        if(singleArray || firstIndex || lastIndex || nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1])
        {
            peakIndex = mid;
            break;
        }

        if(nums[mid+1] > nums[mid])
            start = mid+1
        else
            end = mid - 1
    }

    return peakIndex
}