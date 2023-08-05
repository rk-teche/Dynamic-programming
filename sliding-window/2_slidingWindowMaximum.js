// Max sliding window : https://leetcode.com/problems/sliding-window-maximum/

// Traditional Method : Brute Force -> TLE
function calMaxSlidingWindow(nums = [], k = 0)
{
    if(!nums || nums.length === 0)
        return k;

    const resultArray = []    
    for(let i = 0; i < (nums.length - (k - 1)); i++)
    {
        let maxNumber = nums[i]
        for(let j = 1; j< k; j++)
        {
            maxNumber = nums[i+j] > maxNumber ? nums[i+j] : maxNumber
        }
        resultArray.push(maxNumber)
    }

    return resultArray
}

// My Optimization -> TLE
function calMaxSlidingWindow(nums = [], k = 0)
{
    if(!nums || nums.length === 0)
        return k;

    const resultArray = []    
    for(let i = 0; i < (nums.length - (k - 1)); i++)
    {
        let subArray = [nums[i]]
        if(i === 0)
        {
            for(let j = 1; j< k; j++)
            {
                subArray.push(nums[i+j])
            }
        }
        else
        {
            subArray = subArray.slice(1, subArray.length)
            subArray.push(nums[i+(k-1)])
        }
        
        resultArray.push(Math.max(...subArray))
    }

    return resultArray
}

// using javascript concept - TLE
function calMaxSlidingWindow(nums = [], k = 0)
{
    if(!nums || nums.length === 0)
        return k;

    const resultArray = []    
    for(let i = 0; i < (nums.length - (k - 1)); i++)
    {
        nums.shift()
        resultArray.push(Math.max(nums))
    }

    return resultArray
}

// Sliding Window : While Loop -> TLE
function calMaxSlidingWindow(nums = [], k = 0)
{
    if(!nums || nums.length === 0)
        return k;

    const resultArray = [];
    let i = 0, j = 0;
    let subArray = [];

    while(j < nums.length)
    {
        subArray.push(nums[j])
        if((j-i)+1 < k)
            j++
        else if((j-i)+1 === k)
        {
            const maxNumber = Math.max(...subArray)
            resultArray.push(maxNumber)
            subArray.shift() // Array.slice is a heavy operations
            
            j++
            i++
        }
            
    }

    return resultArray
}

// best optimized till now -> TLE
function calMaxSlidingWindow(nums = [], k = 0)
{
    if(!nums || nums.length === 0)
        return k;

    const resultArray = []    
    let i = 0, j = 0;
    let maxNumber;
    
    while(j < nums.length)
    {
        if((!maxNumber && maxNumber !== 0) || nums[j] > maxNumber)
            maxNumber = nums[j];
        
        const currentSize = (j-i)+1;
        if(currentSize < k)
            j++
        else if(currentSize === k)
        {
            resultArray.push(maxNumber);
            if(maxNumber === nums[i])
            {
                maxNumber = Math.max(...nums.slice(i+1, j+1));
            }
                
            j++
            i++
        }
            
    }

    return resultArray
}

// GPT generated
function calMaxSlidingWindow(nums, k) {
    if (!nums || k <= 0) {
      return [];
    }
  
    const n = nums.length;
    const result = [];
    const window = [];
  
    for (let i = 0; i < n; i++) {
      // Remove elements that are outside the current window
      while (window.length > 0 && window[0] < i - k + 1) {
        window.shift();
      }
  
      // Remove elements smaller than the current element from the back of the deque
      while (window.length > 0 && nums[window[window.length - 1]] < nums[i]) {
        window.pop();
      }
  
      window.push(i);
  
      // The maximum of the current window is the first element in the deque
      if (i >= k - 1) {
        result.push(nums[window[0]]);
      }
    }
  
    return result;
  }
  