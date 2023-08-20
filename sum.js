// https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
    let i = 0, j= 1;
    while(j < nums.length)
    {
        target -= nums[i]
        
        while(target !== nums[j] && j < nums.length)
        {
            j++
        }

        if(target === nums[j])
            return [i,j]
        else
        {
            target += nums[i]
            i++
            j = i+1
        }

    }

    return [-1, -1]
};

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// https://leetcode.com/problems/3sum/description/


// https://leetcode.com/problems/4sum/description/
var fourSum = function(nums, target) 
{
    const result = [], unique = new Set();  
    for(let i = 0; i < (nums.length - 3); i++)
    {
        let sum = nums[i];
        for(let j = i+1; j < (nums.length - 2); j++)
        {
            sum += nums[j];
            for(let k = j+1; k < (nums.length - 1); k++)
            {
                sum += nums[k]
                for(let l = k+1; l < nums.length; l++)
                {
                    if(sum+nums[l] === target)
                    {
                        const key1 = `${nums[i]}${nums[j]}${nums[k]}${nums[l]}`
                        // const key2 = `${nums[i]*nums[j]*nums[k]*nums[l]}`                        
                        if(!unique.has(key1))
                        {
                            unique.add(key1)
                            result.push([nums[i], nums[j], nums[k], nums[l]])
                        }
                    }
                }
                sum -= nums[k]
            }
            sum -= nums[j]
        }
    }

    return result;
};