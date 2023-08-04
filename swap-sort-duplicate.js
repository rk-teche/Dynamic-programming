function swapSort(numberArray = [])
{
    for(let i = 0; i < numberArray.length; i++)
    {
        while(numberArray[0] !== i+1)
        {
            const value = numberArray[i]
            numberArray[i] = numberArray[value-1]
            numberArray[value-1] = value
        }
        
    }
    return numberArray
}