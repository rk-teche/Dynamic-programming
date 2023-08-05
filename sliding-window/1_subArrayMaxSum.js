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
    let i = 0, j = 0;
    while(j < integerArray.length)
    {
        sum += integerArray[j]
        if((j-i)+1 < subArraySize)
            j++
        else if((j-i)+1 === subArraySize)
        {
            maxSum = Math.max(maxSum, sum)
            sum = sum - integerArray[i]
            i++
            j++
        }
            
    }

    return maxSum
}