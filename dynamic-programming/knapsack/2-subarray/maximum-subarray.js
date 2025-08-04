/**
https://leetcode.com/problems/maximum-subarray/
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums, i = 0) {
    
    if(i >= nums.length)
    {
        return 0;
    }

    return Math.max(maxSubArray(nums, i+1) + nums[i], maxSubArray(nums, i+1))    
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums, i = 0, currentSum = 0, maxSum = -Infinity) {
    if (i === nums.length) return maxSum;

    currentSum = Math.max(nums[i], currentSum + nums[i]); // include or start fresh
    maxSum = Math.max(maxSum, currentSum);

    return maxSubArray(nums, i + 1, currentSum, maxSum);
};