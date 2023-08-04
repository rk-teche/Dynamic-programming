const missingNumber = (nums) => 
{
    
}

// Divide and Conqure Algorithm
// NEED TO HANDLE WHEN NO NUMBER ̦FIND
function findNumberIndex(numberArray = [], number)
{
    let minIdx = 0;
    let maxIdx = numberArray.length - 1
    let midNumber = 0, midIndex = 0
    do
    {
        midIndex = Math.floor((minIdx+maxIdx)/2)
        midNumber = numberArray[midIndex]
        if(midNumber > number)
            maxIdx = midIndex - 1
        else if(midNumber < number)
            minIdx = midIndex + 1
    } while(midIndex !== 0 && midIndex !== (numberArray.length - 1))
    
    if(midNumber === number)
        return midIndex
    else
        throw new Error("Number not present in an Array")
    
}

// elements = 9, midIndex = 4.5, [0,1,2,3] [5,6,7,8]
// elements = 10, midIndex = 5, [0,1,2,3,4] [6,7,8,9]

