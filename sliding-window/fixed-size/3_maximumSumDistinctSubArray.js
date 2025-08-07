
// Leetcode problem : https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/

function subArrayMaxSum(integerArray = [], subArraySize)
{
    if(!integerArray || integerArray.length === 0)
        return 0

    let maxSum = 0;
    let sum = 0;
    for(let i = 0; i < integerArray.length; i++)
    {
        if(i === 0)
        {
            for(let j = i; j < subArraySize; j++)
            {
                sum += integerArray[j]
            }
        }
        else
        {
            const previousIdex = i-1
            sum = (sum - integerArray[previousIdex]) + integerArray[previousIdex+subArraySize]
        }

        maxSum = sum > maxSum ? sum : maxSum
    }

    return maxSum
}

/**
 * https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {
    let i = 0, j = 0, sum = 0, max = 0;
    let sumObj = {}
    while(j < nums.length)
    {
        if(sumObj[nums[j]] === undefined || sumObj[nums[j]] === null)
        {
            sum += nums[j];
            sumObj[nums[j]] = j;
            const currentIndex = (j - i) + 1;
            if(currentIndex < k)
            {
                j++
            }
            else if(currentIndex === k)
            {
                max = max > sum ? max : sum
                delete sumObj[nums[i]]
                sum -= nums[i]
                j++
                i++
            }
        }
        else
        {
            j = sumObj[nums[j]] + 1
            sumObj = {}
            sum = 0;
            i = j
        }
        
    }

    return max;

};