/**
 * https://leetcode.com/problems/remove-element/description/
 * @param {*} nums 
 * @param {*} val 
 * @returns 
 */

var removeElement = function(nums, val)
{
    let k = 0; // Track the count of elements not equal to val
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move the element to the front
            k++;
        }
    }
    return k;
};