/**
 * 01 Knapsack Top Down approach : DP
 * NOTE - Both Top Down and Memoziation complexities are same
 * @param {*} weightArray 
 * @param {*} valueArray 
 * @param {*} capacity 
 * @returns 
 */
// function O1knapsackTopDown(weightArray = [], valueArray = [], capacity)
// {
//     const size = weightArray.length;
//     const t = Array.from({ length: size }, () => Array(capacity).fill(-1))

//     return O1knapsack(weightArray, valueArray, capacity, size, t)
// }

// function O1knapsack(weightArray = [], valueArray = [], w, i, t)
// {
    // if(weightArray[n] <= w)
    // {
    //     const include = valueArray[index] + t[n-1][w - weightArray[n - 1]];
    //     t[n][w] = Math.max(include, t[n-1][w]);
    // }
    // else
    // {
    //     t[n][w] = t[n-1][w]
    // }

    // return t[i][capacity];
// }

/**
 * 01 Knapsack memoziation : DP
 * @param {*} weightArray 
 * @param {*} valueArray 
 * @param {*} capacity 
 * @returns 
 */
function O1knapsackMemo(weightArray = [], valueArray = [], capacity)
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