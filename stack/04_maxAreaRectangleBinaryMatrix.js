function leftNearestSmallestIdx(itemArray = [], value = 0)
{
    if(itemArray?.length === 0)
    {
        return 0;
    }

    if(value === 0)
    {
        return itemArray.length - 1
    }

    for(let i = (itemArray.length - 1); i >= 0; i--)
    {
        
        if(!(i !== 0 && itemArray[i] >= value))
        {
         
            return i
        }
       
    }

}

function rightNearestSmallestIdx(itemArray = [], value = 0)
{

    if(itemArray?.length === 0)
    {
        return 0;
    }

    if(value === 0)
    {
        return 0
    }

    for(let i = 0; i <= itemArray.length; i++)
    {
        
        if(!(i !== itemArray.length && itemArray[i] >= value))
        {
            return i
        }
       
    }

}


// [6, 2, 5, 4, 5, 1, 6]
function mah(buildingArray = [], i = 7, maxArea = 0)
{
    if(i === 0)
        return maxArea;

    const itemIndex = i-1;    
    const currentItem = buildingArray[itemIndex]
    // call left
    const leftArray = buildingArray.slice(0, itemIndex)
    const leftIndex = leftNearestSmallestIdx(leftArray, currentItem)
    // call right
    const rightArray = buildingArray.slice(itemIndex, buildingArray.length)
    const rightIndex = rightNearestSmallestIdx(rightArray, currentItem) + itemIndex

    const totalWidth = (rightIndex - leftIndex) + 1 // add 1 for current item length
    const area = totalWidth*currentItem
    maxArea = area > maxArea ? area : maxArea

    return mah(buildingArray, i-1, maxArea)
}

const binaryMatrix = [[0,1,1,0], [1,1,1,1], [1,1,1,1],[1,1,0,0]];

function maxAreaRectangleBinaryMatrix(binaryMatrix = [[],[]])
{
    const mahArray = [];
    binaryMatrix.reduce((accumulator = [], currentArray) => {
        for(let i = 0; i < currentArray.length; i++)
        {
            accumulator[i] = currentArray[i] === 0 ? 0 : accumulator[i] + currentArray[i]
        }
        mahArray.push([...accumulator])
        return accumulator;
    }, Array(binaryMatrix[0].length).fill(0))

    const areaValues = mahArray.map(currentArray => mah(currentArray, currentArray.length))
    return Math.max(...areaValues)
    
}  