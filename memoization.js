
let callCount = 0;

const dp = new Array(100);
for (let i = 0; i < 100; i++)
{
    dp[i] = new Array(100).fill(null);
}

const sum = (a, b) => a + b;

const memoize = (fn) =>
{
  return (a,b) =>
  {
      if(dp[a][b] !== null)
        return dp[a][b];

      callCount++;
      dp[a][b] = fn(a,b);
      return dp[a][b];
  }
};
  
  
const memoizedSum = memoize(sum);
  
memoizedSum(10,20)

// https://leetcode.com/problems/memoize/
/**
 * "sum"
 * ["call","call","getCallCount","call","getCallCount"]
    [[2,2],[2,2],[],[1,2],[]]
 * @param {*} fn 
 * @returns 
 */
    function memoize(fn) {
        const cache = new Map();    
        return (...args) => {
            const key = args.toString();
            if(cache.has(key)) 
                return cache.get(key);
    
            const value = fn(...args);
            cache.set(key, value);
            return value;
        }
    }

    // https://leetcode.com/problems/counter/description/
    var createCounter = (n) => () => n++;

    // https://leetcode.com/problems/counter-ii/description/
    var createCounter = function(init) {
        const initial = init;
        return {
            increment : () => ++init,
            reset : () => init = initial,
            decrement : () => --init
        }
    };

    // https://leetcode.com/problems/function-composition/description/
    // https://leetcode.com/problems/design-cancellable-function/description/
    // https://leetcode.com/problems/nested-array-generator/description/
    // https://leetcode.com/problems/filter-elements-from-array/description/