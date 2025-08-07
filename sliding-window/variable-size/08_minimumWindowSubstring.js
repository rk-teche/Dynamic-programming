// https://leetcode.com/problems/minimum-window-substring/

// TOC, think out cat
// TODO: Need to find solution

function minimumWindowSubstring(input = "", characters = "")
{
    if(!input || !characters)
        return ""

    let charactersMap = new Map()    

    for(let k = 0; k < characters.length; k++)
    {
        const count = (charactersMap.get(characters[k]) || 0) + 1
        charactersMap.set(characters[k], count)
    }
    let stringsCount = charactersMap.size

    for(let i = 0; i < input.length; i++)
    {
        for(let j = 0; j < input.length; j++)
        {
            if(charactersMap.has(input[i+j]))
            {
                charactersMap.set(input[i+j], count-1)
                if(charactersMap.get(input[i+j]) === 0)
                    stringsCount--
            }

            // if(stringsCount === 0)

        }
    }    
}

// works fine on no-repeatative substrings
function minimumWindowSubstring(input = "", characters = "")
{
    if(!input || !characters)
        return ""

    let charactersMap = new Map()    
    for(let k = 0; k < characters.length; k++)
    {
        const count = (charactersMap.get(characters[k]) || 0) + 1
        charactersMap.set(characters[k], count)
    }

    let subStringIndexes = [], minSubString = "";
    let i = 0, j = 0;    
    while(j < input.length)
    {
        if(charactersMap.has(input[j]))
        {
            const count = charactersMap.get(input[j])
            if(count)
            {
                subStringIndexes.push({key: input[j], index: j })
                charactersMap.set(input[j], count-1)
            }
            else
            {
                while(input[i] !== input[j])
                {
                    if(charactersMap.has(input[i]))
                    {
                        subStringIndexes.shift();
                        const count  = charactersMap.get(input[i]);
                        charactersMap.set(input[i], count+1);
                    }
                    i++;
                }

                do
                {
                    if(input[i] === input[j])
                    {
                        subStringIndexes.shift();
                        subStringIndexes.push({key: input[j], index: j })
                    }
                    i++
                    
                } while(!charactersMap.has(input[i]))
            }
        }

        if(subStringIndexes.length === 0)
            i++    
        
        if(subStringIndexes.length === characters.length)
        {
            const substring = input.substring(i, j+1)
            minSubString = minSubString ? (substring.length <= minSubString.length ? substring : minSubString) : substring
            subStringIndexes.shift()
            const count  = charactersMap.get(input[i]);
            charactersMap.set(input[i], count+1);
            i = subStringIndexes.length > 0 ? subStringIndexes[0].index : i+1
        }
        j++
    }    

    return minSubString
}


// https://leetcode.com/problems/minimum-window-substring/

// TOC, think out cat

// aaaaaaaaaaaabbbbbcdd
function minimumWindowSubstring(input = "", characters = "")
{
    if(!input || !characters)
        return ""

    let charactersMap = new Map()    
    for(let k = 0; k < characters.length; k++)
    {
        const count = (charactersMap.get(characters[k]) || 0) + 1
        charactersMap.set(characters[k], count)
    }

    let subStringIndexes = new Map(), minSubString = "";
    let i = 0, j = 0, realCount = charactersMap.size;    
    while(j <= input.length)
    {
        const currentChar = input[j]
        if(charactersMap.has(currentChar))
        {
            const count = (subStringIndexes.get(currentChar) || 0) + 1
            subStringIndexes.set(currentChar, count)

            if(count === charactersMap.get(currentChar))
                realCount--
        }

        if(subStringIndexes.size === 0)
            i++    
        
        if(realCount === 0)
        {
            const lastIndex = charactersMap.has(currentChar) ? j+1 : j
            const substring = input.substring(i, lastIndex)
            minSubString = minSubString ? (substring.length <= minSubString.length ? substring : minSubString) : substring
            
            if(input[i])
            {
                while((!charactersMap.has(input[i]) && i < (input.length-1)) || subStringIndexes.get(input[i]) >= charactersMap.get(input[i]))
                {
                    if(i < j-1)
                    {
                        if(charactersMap.has(input[i]))
                        {
                            if(subStringIndexes.get(input[i]) > charactersMap.get(input[i]) || j < (input.length-1))
                            {
                                subStringIndexes.set(input[i], subStringIndexes.get(input[i])-1)

                                if(subStringIndexes.get(input[i]) < charactersMap.get(input[i]))
                                    realCount++
                            }
                            else
                            {
                                break;
                            }
                        }
                        i++
                    }
                    else 
                        break;
                }
            }
            
        }
        j++
    }    

    return minSubString
}


function minimumWindowSubstring(input = "", characters = "")
{
    if(!input || !characters)
        return ""

    let charactersMap = new Map();
    for(let k = 0; k < characters.length; k++)
    {
        const count = (charactersMap.get(characters[k]) || 0) + 1
        charactersMap.set(characters[k], count)
    }

    let minSubString = "", i = 0, j = 0, realCount = charactersMap.size;

    while(j < input.length)
    {
        const currentChar = input[j]
        if(charactersMap.has(currentChar))
        {
            const count = (charactersMap.get(currentChar) || 0) - 1
            charactersMap.set(currentChar, count)

            if(count === 0)
                realCount--
        }
        
        if(realCount === 0)
        {
            const lastIndex = charactersMap.has(currentChar) ? j+1 : j
            const substring = input.substring(i, lastIndex)
            minSubString = minSubString ? (substring.length <= minSubString.length ? substring : minSubString) : substring

            while(realCount === 0)
            {
                if(charactersMap.has(input[i]))
                {
                    const count = charactersMap.get(input[i])+1
                    charactersMap.set(input[i], count)
                    if(count > 0)
                        realCount++
                }
                i++
            }
            // do
            // {
            //     if(charactersMap.has(input[i]))
            //     {
            //         const count = charactersMap.get(input[i])+1
            //         charactersMap.set(input[i], count)
            //         if(count > 0)
            //             realCount++
            //     }
            //     i++
            // } while(!charactersMap.has(input[i]) || charactersMap.get(input[i]) < 0 )

        }
        j++
    }    

    return minSubString
}