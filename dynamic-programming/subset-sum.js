// [1,2,3,5], 8
function subSetSum(valueArray = [], sum = 0, i = 4, output = [])
{
    if(i === 0)
    {

    }

    const currentValue = valueArray[i-1]
    if(currentValue > sum)
    {
        // subSetSum(valueArray, i)

    }
    else
    {
        const nextValue = subSetSum(valueArray, i-1)
        if((currentValue + nextValue) = sum)
        {
            output.push(`${currentValue}, ${nextValue}`)
        }
        //  ? [currentValue, nextValue]

    }
}

function generateSubsetsWithSum(nums, targetSum) {
    const subsets = [];
  
    function backtrack(startIndex, currentSubset, currentSum) {
      if (currentSum === targetSum) {
        subsets.push(currentSubset.slice()); // Add a copy of the current subset to the subsets array
      }
  
      for (let i = startIndex; i < nums.length; i++) {
        if (currentSum + nums[i] <= targetSum) {
          currentSubset.push(nums[i]); // Include the current element in the subset
          backtrack(i + 1, currentSubset, currentSum + nums[i]); // Recursively generate subsets with the next elements
          currentSubset.pop(); // Backtrack by removing the current element from the subset
        }
      }
    }
  
    backtrack(0, [], 0); // Start generating subsets from index 0 with an empty initial subset and sum of 0
    return subsets;
  }
  
  // Example usage
  const nums = [2, 4, 7, 9, 11];
  const targetSum = 13;
  const subsetsWithSum = generateSubsetsWithSum(nums, targetSum);
  console.log(subsetsWithSum);
  

  


function subSetSum(valueArray = [], sum = 0)
{
    // Initialization
    const size = valueArray.length;
    const matrix = new Array(size + 1).fill(null).map(() => new Array(sum + 1).fill(false));

    for(let i = 1; i <= size; i++)
    {
        for(let j = 1; j <= sum; j++)
        {
            // if()
        }
    }
}
