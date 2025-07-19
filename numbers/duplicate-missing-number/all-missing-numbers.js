/**
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    const missingNums = [];
    for(let i = 0; i < nums.length; i++)
    {
        while(nums[i] !== i+1 )
        {
            const swapIndex = nums[i] - 1;
            [nums[i, swapIndex]] = [nums[swapIndex, i]] // es6 ways to swap variable

            if(nums[i] == nums[swapIndex])
            {
                break;
            }
        }
    }

    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] !== i+1)
        {
            missingNums.push(i+1)
        }
    }

    return missingNums;
};
