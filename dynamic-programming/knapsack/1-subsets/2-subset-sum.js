/**
 * Problem 1: Return true or false if Subsets are present
 */

/**
 * This approach is better then recursion + memo cause it won't fill the callStack
 * Time Complexity - O(n × sum)
 * Space Complexity - O(n × sum)
 * @param {*} valueArr 
 * @param {*} sum 
 * @returns 
 */
function findSubset(valueArr = [], sum)
{
    const dp = Array.from({ length: valueArr.length }, () => Array(sum + 1)); // Space Complexity O(n × sum)
    
    // Initialization
    for(let i = 0; i < valueArr.length; i++)
    {
        for(let j = 0; j < sum+1; j++)
        {
            if(i === 0)
                dp[i][j] = false;

            if(j === 0)
                dp[i][j] = true;
        }
    }

    // hypothesis - Time Complexity - O(n × sum)
    for(let i = 1; i < valueArr.length; i++)
    {
        for(let j = 1; j < sum+1; j++)
        {
            if(valueArr[i - 1] <= j)
            {
                dp[i][j] = dp[i][j - valueArr[i-1]] || dp[i-1][j]
            }
            else
            {
                dp[i][j] = dp[i-1][j]
            }
        }
    }

    return dp[valueArr.length][sum];
}

/**
 * DP approach but it reduces the space complexity using 1D array;
 * How it works ? -
 *  1. Each dp[i][j] only depends on the previous row, i.e., dp[i-1][j] and dp[i-1][j - valueArr[i-1]].
    2. So we can just reuse one array by iterating j in reverse (to avoid overwriting needed values).

 * Time Complexity - O(n × sum)
 * Space Complexity - O(sum)
 * @param {*} valueArr 
 * @param {*} sum 
 * @returns 
 */
function findSubsetOptimized(valueArr = [], sum) {
    const dp = Array(sum + 1).fill(false);
    dp[0] = true; // sum 0 is always possible with empty subset

    for (let i = 0; i < valueArr.length; i++) {
        const currentVal = valueArr[i];
        for (let j = sum; j >= currentVal; j--) {
            dp[j] = dp[j] || dp[j - currentVal];
        }
    }

    return dp[sum];
}

/**
 * Recursion + memo approach
 * Time Complexity - O(n × sum)
 * Space Complexity - O(sum)
 * @param {*} valueArr 
 * @param {*} sum 
 * @returns 
 */
function isSubsetSum(valueArr, sum) {
    const memo = new Map();

    function helper(index, target) {
        if (target === 0) return true;           // Subset found
        if (index === 0) return valueArr[0] === target;

        const key = `${index}-${target}`;
        if (memo.has(key)) return memo.get(key);

        // Exclude current item
        const exclude = helper(index - 1, target);

        // Include current item if it's not greater than target
        let include = false;
        if (valueArr[index] <= target) {
            include = helper(index - 1, target - valueArr[index]);
        }

        const result = include || exclude;
        memo.set(key, result);
        return result;
    }

    return helper(valueArr.length - 1, sum);
}


