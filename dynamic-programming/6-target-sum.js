// This is slighly different than count the number of subset with given difference
// Count the number of subset with a given difference
function subSetSumDiffCountDP(valueArray = [], diff = 0) 
{

    let total = 0;
    for (let i = 0; i < valueArray.length; i++)
    {
        total += valueArray[i];
    }

    let sum = Math.abs(Math.ceil((diff + total) / 2));

    const rows = valueArray.length + 1;
    const columns = sum + 1;

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
                dp[i][j] = 0;

            if (j === 0)
                dp[i][j] = 1;
        }
    }

    return subSetSumDiffCount(valueArray, sum, dp);

}


function subSetSumDiffCount(valueArray = [], sum = 0, dp = [[]])
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
                dp[i][j] = dp[i - 1][j - valueArray[i - 1]] + dp[i - 1][j];
            }
        }
    }

    console.log("dp", dp);
    return dp[valueArray.length][sum];
}

// previous problem is same but slight varitions
// https://leetcode.com/problems/target-sum/
function targetSum() // [0,0,0,0,0,0,0,0,1], 1

{

}