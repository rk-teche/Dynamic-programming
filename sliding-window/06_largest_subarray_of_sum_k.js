function largestSubArraySumK(numbers = [], k = 0)
{
    let maxSize = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        let sum = numbers[i]
        for(let j = 0; j < numbers.length; j++)
        {
            sum += numbers[i+j]
            if(sum >= k)
            {
                const currentSize = j+1
                maxSize = sum === k && (currentSize > maxSize) ? currentSize : maxSize
                break;
            }
        }
    }

    return maxSize
}

// Q1: https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/

// Q2: https://leetcode.com/problems/subarray-sum-equals-k/

// TEL exception
function subArraySumK(numbers = [], k = 0)
{
    let subArraySize = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        let sum = 0;
        for(let j = 0; j < numbers.length; j++)
        {
            sum = numbers[j+i] + sum
            if(sum === k)
            {
                subArraySize++
            }
        }
    }

    return subArraySize
}

// Case is not working for negative numbers
function subArraySumK(numbers = [], k = 0)
{
    let subArraySize = 0, i = 0, j = 0;
    let sum = 0;
    while(j < numbers.length)
    {
        sum = numbers[j] + sum
     
        if(sum < k)
            j++
        else if(sum === k)
        {
            subArraySize++
            j++
        }
        else if(sum > k)
        {
            while(sum > k)
            {
                sum = sum - numbers[i]
                i++
            }
            sum === k && i !== numbers.length && subArraySize++
            j++
        }

    }

    return subArraySize
}