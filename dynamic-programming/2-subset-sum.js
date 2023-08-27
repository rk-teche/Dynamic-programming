// [1,2,3,5], 8
function subSetSum(valueArray = [], sum = 0, i = 0, output = [])
{
    if(i > valueArray.length)
      return output

    const currentValue = valueArray[i]
    if(currentValue < sum)
    {
      const nextValue = subSetSum(valueArray, sum, i+1)
      if((currentValue + nextValue) === sum)
        output.push([valueArray[i], valueArray[i+1]])
      else if(nextValue === sum)  
        output.push([valueArray[i+1]])
      return output  
    }
    else
    {
      return subSetSum(valueArray, sum, i+1)

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

function subSetSumDP(valueArray = [], sum = 0) // [2, 4, 7, 9, 11], 13
{

    const rows = valueArray.length + 1;
    const columns = sum + 1; 

    const dp = new Array(rows);
    for (let i = 0; i < rows; i++)
    {
        dp[i] = new Array(columns).fill();
    }

    for(let i = 0; i < rows; i++)
    {
      for(let j = 0; j < columns; j++)
      {
        if(i === 0) 
          dp[i][j] = false

        if(j === 0)
          dp[i][j] = true
      }
    }

    return subSetSum(valueArray, sum, dp)

}


function subSetSum(valueArray = [], sum = 0, dp = [[]])
{
  for (let i = 1; i <= valueArray.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (valueArray[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i-1][j - valueArray[i - 1]] || dp[i - 1][j];
      }
    }
  }

  console.log("dp", dp)
  return dp[valueArray.length][sum];
}

function isSubsetSum(set, n, sum)
    {
        // Base Cases
        if (sum == 0)
            return true;
        if (n == 0)
            return false;
  
        // If last element is greater than sum,
        // then ignore it
        if (set[n - 1] > sum)
            return isSubsetSum(set, n - 1, sum);
  
        // Else, check if sum can be obtained
        // by any of the following
        // (a) including the last element
        // (b) excluding the last element
        return isSubsetSum(set, n - 1, sum)
          || isSubsetSum(set, n - 1, sum - set[n - 1]);
    }
