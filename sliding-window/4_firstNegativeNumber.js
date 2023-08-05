// [12, -1, -7, 8, -15, 30, 16, 28], 3

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
        else if((j-i)+1 === k)
        {
            const firstNegativeNumber = negativeNumbersArray[0]
            if(firstNegativeNumber)
            {
                resultArray.push(firstNegativeNumber)
                if(integerArray[i] === firstNegativeNumber)
                    negativeNumbersArray.shift()
            }
            
            i++
            j++
        }
    }

    return resultArray
}