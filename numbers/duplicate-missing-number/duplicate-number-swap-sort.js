/**
 * https://leetcode.com/problems/find-the-duplicate-number/
 * Time complexity - O(nlogn)
 * Space Complexity - O(1)
 * @param {number[]} nums
 * @return {number}
 */

// Swap Sort: won't work if array is read-only
function swapSort(nums)
{
    for(let i = 0; i < nums.length; i++)
    {
        while(nums[i] !== i+1 )
        {
            const swapIndex = nums[i] - 1;
            const temp = nums[swapIndex];
            nums[swapIndex] = nums[i];
            nums[i] = temp;

            if(nums[i] == nums[swapIndex])
            {
                return nums[i];
            }
        }
    }

}