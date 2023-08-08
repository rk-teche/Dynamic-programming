// aabacbebebe, 3
// Q1: https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
function kUniqueSubString(input = "", size = 0)
{
    if(!input)
        return size

    const stringObject = new Map()
    let maxSubStringSize = 0, i = 0, j = 0; 

    while(j < input.length)
    {
        const count = (stringObject.get(input[j]) || 0)
        stringObject.set(input[j], count+1)

        if(stringObject.size < size)
            j++
        else if(stringObject.size === size)    
        {
            maxSubStringSize = j-i+1 > maxSubStringSize ? j-i+1 : maxSubStringSize
            j++
        }
        else if(stringObject.size > size)    
        {
            while(stringObject.size > size)
            {
                const iItemCount = stringObject.get(input[i])
                stringObject.set(input[i], iItemCount - 1)
                if(stringObject.get(input[i]) === 0)
                    stringObject.delete(input[i])
                i++
            }
            j++
        }
    }

    return maxSubStringSize
}

// Q2: https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
// TODO: logic pending
function kRepeatingSubString(input = "", size = 0)
{
    if(!input)
        return size

    const stringObject = new Map()
    let maxSubStringSize = 0; 
    for(let i = 0; i < input.length; i++)
    {
        for(let j = 0; j < input.length; j++)
        {
            const count = (stringObject.get(input[i+j]) || 0)
            stringObject.set(input[j], count+1)

            if(stringObject.size > size || j === input.length)
            {
                const subStringLength = j-i
                maxSubStringSize = subStringLength > maxSubStringSize ? subStringLength : maxSubStringSize
                break;
            }
            
        }
    }

    return maxSubStringSize
}

function kRepeatingSubString(input = "", size = 0)
{
    let stringObject = new Map(), maxSubStringSize = 0;
    let i = 0, j = 0, finalItems = new Set();
    
    while(j < input.length)
    {
        const count = (stringObject.get(input[j]) || 0)
        stringObject.set(input[j], count+1)

        // if(stringObject.get(input[j]) >= size)
        //     finalItems.add(input[j])

        if(stringObject.get(input[j]) < size)
            j++
        if(stringObject.get(input[j]) > size)
        {
            const subStringSize = j-i
            maxSubStringSize = subStringSize > maxSubStringSize ? subStringSize : maxSubStringSize

            while(stringObject.size > size && stringObject.has(input[j]))
            {
                stringObject.delete(input[i])
                i++
            }
            j++
        }
    }

    return maxSubStringSize
}

// Q3: https://leetcode.com/problems/longest-substring-without-repeating-characters/
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



// Q4: https://leetcode.com/problems/longest-repeating-character-replacement/description/
