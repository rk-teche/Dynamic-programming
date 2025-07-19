/**
 * https://leetcode.com/problems/missing-number/
 * Time complexity - O(n)
 * Space Complexity - O(1)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arraySum = 0, nSum = 0;
    
    for(let i = 0; i < nums.length; i++)
    {
        arraySum += nums[i];
        nSum += i+1
    }

    return nSum - arraySum;
};

/**
 * Time complexity - O(n)
 * Space Complexity - O(n)
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numberObj = { 0: 0 };
    
    // O(n)
    nums.forEach((num, index) => numberObj[index+1] = index+1);

    // O(n)
    for(let i = 0; i < nums.length; i++)
    {
        delete numberObj[nums[i]]
    }

    return numberObj[Object.keys(numberObj)[0]] // O(n)
};