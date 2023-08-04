function stockSpanRecursion(stockArray = [], result = [])
{
    let count = 1;

    if(stockArray.length === 1)
    {
        result.push(count)
        return result;
    }

    const currentElement = stockArray.pop()
    for(let i = stockArray.length; i >= 0; i--)
    {
        if(currentElement > stockArray[i - 1])
        {
            count++
        }
        else
        {
            break; 
        }
       
    }

    stockSpanRecursion(stockArray, result).push(count)
    stockArray.push(currentElement)
    return result    

}

/**
 * GPT generated
 * @param {*} prices 
 * @returns 
 */
function calculateStockSpan(prices) {
    const n = prices.length;
    const stack = []; // to store indices of previous stock prices
    const spans = new Array(n).fill(1); // initialize spans with 1
  
    for (let i = 0; i < n; i++) {
      // Pop elements from stack while stack is not empty and the price at the current index is greater than the price at the top of the stack
      while (stack.length > 0 && prices[i] >= prices[stack[stack.length - 1]]) {
        stack.pop();
      }
  
      // If the stack is empty, the current price is greater than all previous prices, so the span is i+1
      // Otherwise, the span is the difference between the current index and the top of the stack
      spans[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
  
      // Push the current index to the stack
      stack.push(i);
    }
  
    return spans;
  }
  
  // Example usage:
  const stockPrices = [100, 80, 60, 70, 60, 75, 85];
  const stockSpans = calculateStockSpan(stockPrices);
  console.log(stockSpans); // Output: [1, 1, 1, 2, 1, 4, 6]
  