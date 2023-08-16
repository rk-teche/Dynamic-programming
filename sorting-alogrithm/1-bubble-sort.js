/**
 * Bubble sort complexity is very high we usually don't use it in real world problem
 * It is mainly to understand other sorting algorithm
 * Complexity = O(n^2)
 * @param {*} nums 
 * @returns 
 */

// https://leetcode.com/problems/sort-colors
function bubbleSort(nums = [])
{
    let swapped;
    do
    {
        swapped = false;
        for(let i = 0; i < (nums.length-1); i++)
        {
            const currentNum = nums[i];
            if(currentNum > nums[i+1])
            {
                // swap numbers
                nums[i] = nums[i+1];
                nums[i+1] = currentNum;
                swapped = true
            }
    
        }
    } while(swapped)

    return nums
}

// https://leetcode.com/problems/move-zeroes/
// https://leetcode.com/problems/sort-an-array/
// https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/
// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/