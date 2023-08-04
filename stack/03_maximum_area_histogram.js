function leftNearestSmallestIdx(itemArray = [], value = 0)
{

    if(itemArray?.length === 0)
    {
        return value;
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

    if(itemArray.length === 0)
    {
        return value;
    }

    for(let i = 0; i < itemArray.length; i++)
    {
        if(!(i !== (itemArray.length - 1) && itemArray[i] >= value))
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

    const totalWidth = (rightIndex - leftIndex) - 1
    const area = totalWidth*currentItem
    maxArea = area > maxArea ? area : maxArea

    return mah(buildingArray, i-1, maxArea)
}


// GPT generated
function calculateMaxAreaHistogram(histogram) {
    const stack = [];
    let maxArea = 0;
    let area = 0;
    let i = 0;
  
    while (i < histogram.length) {
      if (stack.length === 0 || histogram[i] >= histogram[stack[stack.length - 1]]) {
        stack.push(i);
        i++;
      } else {
        const top = stack.pop();
        area = histogram[top] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
        maxArea = Math.max(maxArea, area);
      }
    }
  
    while (stack.length > 0) {
      const top = stack.pop();
      area = histogram[top] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);
      maxArea = Math.max(maxArea, area);
    }
  
    return maxArea;
  }
  
  // Example usage:
  const histogram = [2, 1, 5, 6, 2, 3];
  const maxArea = calculateMaxAreaHistogram(histogram);
  console.log("Maximum area in the histogram:", maxArea);
  