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
 *  1. Fractional Knapsack
 *  2. 0-1 Kanpsack
 *  3. Unbounded Kanpsack        
 * 
 */

function knapSack01(priceArray = [], weightArray = [], capacity = 0) // knapSack01([60,100,120], [10,20,30], 50) ->  220
{
    if(weightArray.length === 0 || capacity === 0)
        return 0

    const lastIdx = weightArray.length - 1   
    const currentWeight = weightArray[lastIdx] 
    const currentPrice = priceArray[lastIdx]
    priceArray.pop()
    weightArray.pop()
    if(currentWeight <= capacity)
    {
        return Math.max(currentPrice + knapSack01(priceArray, weightArray, capacity - currentWeight), knapSack01(priceArray, weightArray, capacity) )
    }
    else 
    {
        return knapSack01(priceArray, weightArray, capacity)
    }
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

    return knapSack01(priceArray, weightArray, capacity, priceArray.length, dp)

}


function knapSack01(priceArray = [], weightArray = [], capacity = 0, size = 0, dp = null)
{
    if(size === 0 || capacity === 0)
        return 0

    if(dp[size][capacity] !== -1)
        return dp[size][capacity]

    const currentWeight = weightArray[size - 1] 
    const currentPrice = priceArray[size - 1]
    
    if(currentWeight >= capacity)
    {
        dp[size][capacity] = knapSack01(priceArray, weightArray, capacity, size - 1, dp)
    }
    else 
    {
        dp[size][capacity] =  Math.max(currentPrice + knapSack01(priceArray, weightArray, capacity - currentWeight, size - 1, dp), knapSack01(priceArray, weightArray, capacity, size - 1, dp) )
    }

    return dp[size][capacity]
}


/**
 * Kanpsack 01 : Top Down approach
 * 
 * Step 1 : Initialization
 * Step 2 : Recursive call convert into iterative version
 */

function knapSack01TopDown(priceArray = [], weightArray = [], capacity = 0)
{
    const rows = priceArray.length + 1;
    const columns = capacity + 1; 

    const matrix = new Array(rows);
    for (let i = 0; i < rows; i++)
    {
        matrix[i] = new Array(columns).fill();
    }

    // Initialization
    matrix.forEach
    for(let i = 0; i <= rows - 1; i++)
    {
        for(let j = 0; j <= columns - 1; j++)
        {
            if(i === 0 || j === 0)
            {
                matrix[i][j] = 0
            }
        }
    }

    return knapSack01(priceArray, weightArray, capacity, priceArray.length, matrix)

}

function knapSack01(priceArray = [], weightArray = [], capacity = 0, size = 0, matrix = [[],[]])
{
    const currentWeight = weightArray[size - 1] 
    const currentPrice = priceArray[size - 1]
    
    if(currentWeight <= capacity)
    {
        matrix[size][capacity] = Math.max(currentPrice + matrix[size - 1][capacity - currentWeight], matrix[size - 1][capacity])
        // dp[size][capacity] = Math.max(currentPrice + knapSack01(priceArray, weightArray, capacity - currentWeight, size - 1, dp), knapSack01(priceArray, weightArray, capacity, size - 1, dp) )
    }
    else 
    {
        matrix[size][capacity] = matrix[size - 1][capacity]
        // dp[size][capacity] = knapSack01(priceArray, weightArray, capacity, size - 1, dp)
    }

    return matrix[size][capacity]
}

function knapsack01(weights, values, capacity) { // [3,4] [1,2] 7
    const n = weights.length;
    const dp = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= capacity; j++) {
        if (weights[i - 1] > j) {
          dp[i][j] = dp[i - 1][j];
        } else {
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


  
  
