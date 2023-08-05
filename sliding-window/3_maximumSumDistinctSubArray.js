
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