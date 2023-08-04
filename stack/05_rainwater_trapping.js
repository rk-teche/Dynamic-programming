const area1 = [3,0,0,2,0,4];
const area2 = [0,1,0,2,1,0,1,3,2,1,2,1];

function getWaterArea(buildingArray)
{
    return rainWaterTrappingArea(buildingArray, buildingArray.length - 1)
}

function rainWaterTrappingArea(buildingArray = [], i = 0, area = 0)
{
    if(i === 0)
        return area;

    const currentValue = buildingArray[i]

    const leftArray = buildingArray.slice(0, i)
    const maxLeft = leftArray.length > 0 ? Math.max(...leftArray) : 0

    const rightArray = buildingArray.slice(i+1, buildingArray.length)
    const maxRight = rightArray.length > 0 ? Math.max(...rightArray) : 0

    const actualHeight = Math.min(maxLeft, maxRight)

    if(actualHeight && actualHeight >= currentValue)
    {
        const waterTrappingHeight = actualHeight - currentValue
        area = waterTrappingHeight + area
    }
    
    return rainWaterTrappingArea(buildingArray, i-1, area)
}


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    return getTrappingWater(height, height.length - 1)
};

function getTrappingWater(buldingArray, i = 0, totalArea = 0)
{
    if(i === 0 || !buldingArray || buldingArray.length === 0)
        return totalArea

    const currentBuildingHeight = buldingArray[i]

    // left largest building
    const leftArray = buldingArray.slice(0, i)
    const leftLargestBuildingHeight = leftArray.length > 0 ? Math.max(...leftArray) : 0

    // right largest building
    const rightArray = buldingArray.slice(i+1, buldingArray.length)
    const rightLargestBuildingHeight = rightArray.length > 0 ? Math.max(...rightArray) : 0

    // minimum height between building
    const actualBuildingHeight = Math.min(leftLargestBuildingHeight, rightLargestBuildingHeight)

    // actual water trapped height
    if(actualBuildingHeight && actualBuildingHeight > currentBuildingHeight)
    {
        const waterTrappedHeight = actualBuildingHeight - currentBuildingHeight
        totalArea = totalArea + waterTrappedHeight
    }    
    
    return getTrappingWater(buldingArray, i-1, totalArea)
}

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    return getTrappingWater(height)
};

function getTrappingWater(buldingArray)
{
    let totalArea = 0;
    if(!buldingArray || buldingArray.length === 0)
        return totalArea;

    for(let i = (buldingArray.length - 1); i > 0; i--)
    {
        const currentBuildingHeight = buldingArray[i];

        // left largest building
        const leftArray = buldingArray.slice(0, i);
        const leftLargestBuildingHeight = leftArray.length > 0 ? Math.max(...leftArray) : 0;

        // right largest building
        const rightArray = buldingArray.slice(i+1, buldingArray.length - 1);
        const rightLargestBuildingHeight = rightArray.length > 0 ? Math.max(...rightArray) : 0;

        // minimum height between building
        const actualBuildingHeight = Math.min(leftLargestBuildingHeight, rightLargestBuildingHeight);

        // actual water trapped height
        if(actualBuildingHeight && actualBuildingHeight >= currentBuildingHeight)
        {
            totalArea = totalArea + (actualBuildingHeight - currentBuildingHeight);
        }   
    }

    return totalArea;
}

function trapRainwater(heights) {
    const n = heights.length;
    if (n === 0) return 0;
  
    // Create arrays to store the maximum heights on the left and right sides for each wall.
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
  
    // Fill the leftMax array.
    leftMax[0] = heights[0];
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], heights[i]);
    }
  
    // Fill the rightMax array.
    rightMax[n - 1] = heights[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], heights[i]);
    }
  
    // Calculate trapped rainwater.
    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
      trappedWater += Math.min(leftMax[i], rightMax[i]) - heights[i];
    }
  
    return trappedWater;
  }