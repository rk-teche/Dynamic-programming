// [4,5,1,6,3,6], 2

// Brute force : Traditional method 
// Complexity : O(n*k)
function subArrayMaxSum(integerArray = [], subArraySize)
{
    if(!integerArray || integerArray.length === 0)
        return 0

    let maxSum = 0    
    for(let i = 0; i < integerArray.length; i++)
    {
        let sum = integerArray[i]
        for(let j = 1; j < subArraySize; j++)
        {
            sum += integerArray[i+j]
        }
        maxSum = sum > maxSum ? sum : maxSum
    }

    return maxSum
}

// My optimized logic
// Complexity : O(n*logK)
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

// Sliding window optimization
// using while
// Complexity : O(n)
function subArrayMaxSum(integerArray = [], subArraySize)
{
    if(!integerArray || integerArray.length === 0)
        return 0

    let maxSum = 0;
    let sum = 0;
    let i = 0, j = 0; // i start index of subarray, and j end index of subarray
    while(j < integerArray.length)
    {
        sum += integerArray[j]
        if((j-i)+1 < subArraySize)
            j++
        else if((j-i)+1 === subArraySize) // once touch window size, will maintain it
        {
            maxSum = Math.max(maxSum, sum)
            sum -= integerArray[i]
            i++
            j++
        }
            
    }

    return maxSum
}

function largestSum(nums, k) // [1,3,4,7,2,12,8,19,31], 3
{
    let i = 0, j = k, maxSum = 0;

    for(let a = 0; a < k; a++)
    {
        maxSum += nums[a]
    }

    while(j < nums.length)
    {
        let currentSum = maxSum;
        currentSum += nums[j];
        currentSum -= nums[i];
        maxSum = Math.max(maxSum, currentSum);
        j++
        i++
    }

    return maxSum
}

function isNegative(num)
{
    return num < 0 || (1/num === -Infinity)
}

function firstNegativeNum(nums = [], k = 0)
{
    let firstNegative = false, negativeArray = [];
   for(let i = 0; i < nums.length; i++)
   {
        for(let j = i; j < k; j++)
        {
            if(!firstNegative && isNegative(nums[j]))
            {
                negativeArray.push(nums[j]);
                firstNegative = true
            }
        }
        firstNegative = false;
   }

   return negativeArray
}
