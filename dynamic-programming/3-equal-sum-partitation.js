// https://leetcode.com/problems/subsets/
// https://leetcode.com/problems/find-array-given-subset-sums/
// https://leetcode.com/problems/target-sum/description/

// https://leetcode.com/problems/partition-equal-subset-sum/
function equalSumDP(valueArray = []) // [1, 5, 11, 5]
{

  let sum = 0;
  for (let i = 0; i < valueArray.length; i++)
  {
    sum += valueArray[i];
  }

  if (sum % 2 !== 0)
    return false;

  const rows = valueArray.length + 1;
  const columns = (sum / 2) + 1;

  const dp = new Array(rows);
  for (let i = 0; i < rows; i++)
  {
    dp[i] = new Array(columns).fill();
  }

  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < columns; j++)
    {
      if (i === 0)
        dp[i][j] = false;

      if (j === 0)
        dp[i][j] = true;
    }
  }

  return equalSum(valueArray, sum / 2, dp);

}


function equalSum(valueArray = [], sum = 0, dp = [[]])
{
  for (let i = 1; i <= valueArray.length; i++)
  {
    for (let j = 1; j <= sum; j++)
    {
      if (valueArray[i - 1] > j)
      {
        dp[i][j] = dp[i - 1][j];
      } else
      {
        dp[i][j] = dp[i - 1][j - valueArray[i - 1]] || dp[i - 1][j];
      }
    }
  }

  console.log("dp", dp);
  return dp[valueArray.length][sum];
}