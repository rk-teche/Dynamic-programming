/**
 * Knapsack Problem
 * 
 * Varitions
 *  1. Subset Sum
 *  2. Equal Sum Partition
 *  3. Count of Subset sum
 *  4. Minimum Subset sum difference
 *  5. Target Sum
 *  6. # of Subset in given 
 * 
 * 
 * Type of Kansack -
 *  1. Fractional Knapsack - Greedy Algorithm
 *          - Item can be stored in fraction
 *  2. 0-1 Kanpsack
 *          - Either whole item can pick or not pick that's why called 0/1
 *          - Item cann't be repeated (Only Unique item)
 *  3. Unbounded Kanpsack  
 *          - same as 0-1 Kanpsack but items can be duplicate also   
 *          - Multiple occurances   
 * 
 */


/**
 *  Limitations and Edge Cases
 * Edge Case
  1. Empty weight/value arrays Should return 0 ✅
  2. capacity = 0 should return 0 ✅
  3. weightArray.length ≠ valueArray.length 
        Should raise error or handle gracefully ❌
  4. Undefined behavior — may access mismatched indices Negative weights or values
        Not expected in classic 0/1 Knapsack ❌
  5. No check exists; logic will break or behave incorrectly
        Large input sizes (e.g. 30+ items)
        Will cause stack overflow due to deep recursion ❌
No memoization or optimization, exponential 

 * @param {*} weightArray 
 * @param {*} valueArray 
 * @param {*} capacity 
 * @param {*} i 
 * @returns 
 */

function O1knapsackDP(weightArray = [], valueArray = [], capacity)
{
    const size = weightArray.length;
    const t = Array.from({ length: size }, () => Array(capacity).fill(-1))

    return O1knapsack(weightArray, valueArray, capacity, size, t)
}

function O1knapsack(weightArray = [], valueArray = [], capacity, i, t)
{
    // base condition = Think of smallest valid input
    if(i === 0 || capacity === 0)
        return 0;

    if(t[i][capacity] !== -1)
        return t[i][capacity];

    if(weightArray[index] <= capacity)
    {
        const includeWeight = valueArray[index] + O1knapsack(weightArray, valueArray, capacity - weightArray[index], i-1)
        const notIncludeWeight =  O1knapsack(weightArray, valueArray, capacity, i-1)
        t[i][capacity] = Math.max(includeWeight, notIncludeWeight)

    }
    else
    {
        t[i][capacity] = O1knapsack(weightArray, valueArray, capacity, i-1)
    }

    return t[i][capacity];
}

function unboundedKnapSack(priceArray = [], weightArray = [], capacity = 0) //knapSack01([60,100,120], [10,20,30], 50) ->  220
{
    if (weightArray.length === 0 || capacity === 0)
        return 0;

    const lastIdx = weightArray.length - 1;
    const currentWeight = weightArray[lastIdx];
    const currentPrice = priceArray[lastIdx];
    priceArray.pop();
    weightArray.pop();
    if (currentWeight <= capacity)
    {
        return Math.max(currentPrice + unboundedKnapSack(priceArray, weightArray, capacity - currentWeight), unboundedKnapSack(priceArray, weightArray, capacity));
    }
    else 
    {
        return unboundedKnapSack(priceArray, weightArray, capacity);
    }
}

function knapSackMemo(weightArray = [], valueArray = [], capacity)
{
    const dp = new Array(valueArray.length + 1);
    for (let i = 0; i < (valueArray.length + 1); i++)
    {
        dp[i] = new Array(capacity + 1).fill(-1);
    }
    return knapSack(weightArray, valueArray, capacity, dp);
}

function knapSack(weightArray = [], valueArray = [], capacity = 0, dp = [[]], totalValue = 0, i = 0)
{
    // base condition
    if (capacity < 0)
        return totalValue - valueArray[i - 1];

    if (i === weightArray.length)
        return totalValue;

    if (dp[i][capacity] !== -1)
        return dp[i][capacity];

    dp[i][capacity] = Math.max(
        knapSack(weightArray, valueArray, capacity - weightArray[i], dp, totalValue + valueArray[i], i + 1),
        knapSack(weightArray, valueArray, capacity, dp, totalValue, i + 1)
    );

    return dp[i][capacity];
}


// 0-1 Knapsack : Memoization
/**
 * Note - TopDown and Memoization both have same complexity O(n power 2)
 * Memoization may increase the stack size in some case
 * 
 * @param {*} priceArray 
 * @param {*} weightArray 
 * @param {*} capacity 
 * @returns 
 */

function knapSackMemoization(priceArray = [], weightArray = [], capacity = 0) //knapSackMemoization([100, 50, 150], [20,10,30], 50)
{

    const rows = priceArray.length + 1;
    const columns = capacity + 1;

    const dp = new Array(rows);
    for (let i = 0; i < rows; i++)
    {
        dp[i] = new Array(columns).fill(-1);
    }

    return unboundedKnapSack(priceArray, weightArray, capacity, priceArray.length, dp);

}


function unboundedKnapSack(priceArray = [], weightArray = [], capacity = 0, size = 0, dp = null)
{
    if (size === 0 || capacity === 0)
        return 0;

    if (dp[size][capacity] !== -1)
        return dp[size][capacity];

    const currentWeight = weightArray[size - 1];
    const currentPrice = priceArray[size - 1];

    if (currentWeight >= capacity)
    {
        dp[size][capacity] = unboundedKnapSack(priceArray, weightArray, capacity, size - 1, dp);
    }
    else 
    {
        dp[size][capacity] = Math.max(currentPrice + unboundedKnapSack(priceArray, weightArray, capacity - currentWeight, size - 1, dp), unboundedKnapSack(priceArray, weightArray, capacity, size - 1, dp));
    }

    return dp[size][capacity];
}


/**
 * Kanpsack 01 : Top Down approach
 * 
 * Step 1 : Initialization
 * Step 2 : Recursive call convert into iterative version
 */
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

function unboundedKnapSack(priceArray = [], weightArray = [], capacity = 0, size = 0, matrix = [[], []])
{

    for (let n = 1; n <= weightArray.length; n++)
    {
        for (let w = 1; w <= capacity; w++)
        {
            if (weightArray[n - 1] <= w)
                matrix[n][w] = Math.max(priceArray[n - 1] + matrix[n - 1][w - (weightArray[n - 1])], matrix[n - 1][w]);
            else
                matrix[n][w] = matrix[n - 1][w - 1];
        }
    }

    return matrix[weightArray.length][capacity];
}

function knapsack01(weights, values, capacity)
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
                dp[i][j] = Math.max(dp[i - 1][j], values[i - 1] + dp[i - 1][j - weights[i - 1]]);
            }
        }
    }

    return dp[n][capacity];
}

// Example usage
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const maxValue = knapsack01(weights, values, capacity);
console.log(maxValue); // Output: 7
