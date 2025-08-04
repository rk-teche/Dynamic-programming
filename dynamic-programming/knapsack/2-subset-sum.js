/**
 * Subset Sum problem type -
 * 1. Return true or false of subset
 * 2. Return all subsets
 * 3. Return all string subsets with some variations or conditional
 */

/**
 * Subset sum problem -
 * 1. https://leetcode.com/problems/maximum-subarray/description/
 * 2. https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/
 * 3. https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/description/
 * 4. https://leetcode.com/problems/subarray-sum-equals-k/description/
 * 5. https://leetcode.com/problems/target-sum/description/
 * 6. https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/description/
 * 7. https://leetcode.com/problems/constrained-subsequence-sum/description/
 * 8. https://leetcode.com/problems/maximum-alternating-subsequence-sum/description/
 * 9. https://leetcode.com/problems/sum-of-all-subset-xor-totals/description/
 * 10. https://leetcode.com/problems/combination-sum/description/
 * 11. https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/description/
 * 12. https://leetcode.com/problems/minimum-size-subarray-sum/description/
 * 13. https://leetcode.com/problems/maximum-subarray/description/
 * 14. https://leetcode.com/problems/find-array-given-subset-sums/description/
 * 15. https://leetcode.com/problems/the-number-of-beautiful-subsets/description/
 */



/**
 * String subsets
 * @param {String} input 
 * @param {String} output 
 * @param {Array} subsets 
 * @returns 
 */
function findSubSet(input = "", output = "", subsets = [])
{
  if(!input.length)
  {
    subsets.push(output)
    return subsets;
  }

  const ele = input[0];
  input = input.substring(1, input.length)

  findSubSet(input, output, subsets)
  return findSubSet(input, output+ele, subsets)

}


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

function generateSubsetsWithSum(nums, targetSum) 
{
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
