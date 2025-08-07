// [12, -1, -7, 8, -15, 30, 16, 28], 3

/**
 * My logic not much optimize because we're re-calculating again
 */
function firstNegativeNum(nums, k) // [12,-1,-7,8,-15,30,16,28], 3
{
    let i = 0, j = 0, negativeArray = [], firstNegative = false;

    while(j < nums.length)
    {
        const currentWindowSize = (j - i)+1;
        if(currentWindowSize < k)
        {
            if(isNegative(nums[j]))
            {
                negativeArray.push(nums[j]);
                // move to new window
                i += currentWindowSize == 1 ? 1 : currentWindowSize - 1; 
                j = i;
            }
            else
                j++
        }
        else if(currentWindowSize === k)
        {
            negativeArray.push(0)
            i++;
            j++

        }
    }

    return negativeArray
}

/**
 * Best optimize logic complexity O(n) if queue data structure is being used
 */
function firstNegatives(integerArray = [], k)
{
    let i = 0, j = 0;
    let negativeNumbersArray = []
    const resultArray = []
    while(j < integerArray.length)
    {
        if(integerArray[j] < 0)
            negativeNumbersArray.push(integerArray[j])

        if((j-i)+1 < k)
            j++
        else if((j-i)+1 === k) // after this step we're trying to find answer
        {
            const firstNegativeNumber = negativeNumbersArray[0]
            if(firstNegativeNumber)
            {
                resultArray.push(firstNegativeNumber)
                if(integerArray[i] === firstNegativeNumber)
                    negativeNumbersArray.shift() // `shift` complexity can be reduced to O(1) if queue data structure is being used
            }
            
            i++
            j++
        }
    }

    return resultArray
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
        for(let j = i; j < i+k; j++)
        {
            if(!firstNegative)
            {
                if(isNegative(nums[j]))
                {
                    negativeArray.push(nums[j]);
                    firstNegative = true;
                }
                const index = i+k-1;
                if(j === index && index < nums.length)
                {
                    negativeArray.push(0);
                    firstNegative = true;
                }
            }

        }
        firstNegative = false;
   }

   return negativeArray
}