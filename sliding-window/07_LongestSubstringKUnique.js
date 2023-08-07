// aabacbebebe, 3
function kUniqueSubString(input = "", size = 0)
{
    if(!input)
        return size

    const stringObject = new Set()
    let maxSubStringSize = 0; 
    for(let i = 0; i < input.length; i++)
    {
        for(let j = 0; j < input.length; j++)
        {
            stringObject.add(input[i+j])

            if(stringObject.size > size)
            {
                const subStringLength = j-i+1
                maxSubStringSize = subStringLength > maxSubStringSize ? subStringLength : maxSubStringSize
                break;
            }
            
        }
    }

    return maxSubStringSize
}

// Q1: https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/


// Q2: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// burte force O(n*n)
function longestUniqueSubString(input = "")
{
    let stringObject = new Map(), maxSubStringSize = 0; 
    for(let i = 0; i < input.length; i++)
    {
        for(let j = 0; j <= input.length; j++)
        {
            
            if(input[i+j] && !stringObject.get(input[i+j]))
            {
                stringObject.set(input[i+j], 1)
            }
            else
            {
                maxSubStringSize = stringObject.size > maxSubStringSize ? stringObject.size : maxSubStringSize
                stringObject = new Map()
                break;
            }
        }
    }

    return maxSubStringSize
}

function longestUniqueSubString(input = "")
{
    let stringObject = new Map(), maxSubStringSize = 0;
    let i = 0, j = 0;
    
    while(j <= input.length)
    {
        if(input[j] && !stringObject.has(input[j]))
        {
            stringObject.set(input[j], 1)
            j++
        }
        else
        {
            maxSubStringSize = stringObject.size > maxSubStringSize ? stringObject.size : maxSubStringSize
    
            while(stringObject.has(input[j]))
            {
                stringObject.delete(input[i])
                i++
            }
            input[j] && stringObject.set(input[j], 1)
            j++
        }
    }

    return maxSubStringSize
}

// Q3: https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
// Q4: https://leetcode.com/problems/longest-repeating-character-replacement/description/