/**
 * diff unbounded and 0/1 knapsack
 * Multiple occurrences of same item is not allowed in 0/1 kanpsack
 * e.g. [1,2,4,10] -> If we took a decision to include 1 or not to include 1 then we can't include it again.
 * 
 * But in unbounded kanpsack, multiple occurrences is allowed
 * e.g. [1,2,4,10] -> If we took a decision to include 1 then we can include it again and again multiple times and 
 * similarly if we took a decision not to include 1 then we can never inlude it
 * 
 * 
 * Related problems
 * 
 * 1. Rod cutting
 * 2. Coin Change Problem I
 * 3. Coin Change Problem II
 * 4. Maximum ribbon cut
 */

// int W = 100;
// int val[] = { 10, 30, 20 };
// int wt[] = { 5, 10, 15 };

unboundedKnapSackDP([10, 30, 20], [5, 10, 15], 100); // 300

function unboundedKnapSackDP(priceArray = [], weightArray = [], capacity = 0)
{
    const rows = priceArray.length + 1;
    const columns = capacity + 1;

    const matrix = new Array(rows);
    for (let i = 0; i < rows; i++)
    {
        matrix[i] = new Array(columns).fill();
    }

    // Initialization
    for (let i = 0; i <= rows - 1; i++)
    {
        for (let j = 0; j <= columns - 1; j++)
        {
            if (i === 0 || j === 0)
            {
                matrix[i][j] = 0;
            }
        }
    }

    return unboundedKnapSack(priceArray, weightArray, capacity, priceArray.length, matrix);

}

function unboundedKnapSack(weights, values, capacity)
{ // [3,4] [1,2] 7
    const n = weights.length;
    const dp = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++)
    {
        for (let j = 1; j <= capacity; j++)
        {
            if (weights[i - 1] > j)
            {
                dp[i][j] = dp[i - 1][j];
            } else
            {
                dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i][j - weights[i - 1]]);
            }
        }
    }

    return dp[n][capacity];
}