/**
 * https://leetcode.com/problems/set-mismatch/
 * Time complexity - O(nlogn)
 * Space Complexity - O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let duplicateMissingNumbers = []
    
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
                duplicateMissingNumbers = [nums[i], i+1];
                break;
            }
        }
    }

    return duplicateMissingNumbers;
};