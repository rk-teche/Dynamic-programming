/**
 * Quick sort
 * ? Identify a pivot element in the array
 *  - pick first element as pivot
 *  - pick last element as pivot
 *  - pick median element as pivot
 *  - pick random element as pivot
 * 
 * * 1. divide array into two parts, left and right except pivot
 * 
 * * 2. Put everything that is smaller than pivot into left array and 
 *      that which is greater than the pivot insert into a right array.
 * 
 * * 3. Repeat the process for the individual left and right arrays 
 *      till you have an array length 1, which is sorted by definition.
 * 
 * * 4. Repeatedly concatenate the left array, pivot and right array till one sorted array remains.
 */

// https://leetcode.com/problems/sort-an-array/
// stack overflow because of recursion
// ! Complexity : O(nlogn)
function quickSort(nums = [])
{
    if(nums.length < 2)
        return nums;

    let pivot = nums[nums.length - 1], left = [], right = [];

    for(let i = 0; i < (nums.length - 1); i++)
    {
        if(nums[i] < pivot)
            left.push(nums[i])
        else
            right.push(nums[i])    
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}
