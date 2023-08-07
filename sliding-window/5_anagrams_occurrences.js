// aabaabaa, aaba
function anagramsOccurrences(input = "", anagram = "")
{
    if(!input || typeof input !== "string")
        return new Error("Please provide valid input");
    
    const occurrences = new Map();
   
    for(let k = 0; k < anagram.length; k++)
    {
        occurrences.set(anagram[k], (occurrences.get(anagram[k]) || 0)+1) 
    }
    let count = 0
    let occurrencesCount = occurrences.size;

    let i = 0, j = 0;
    while(j < input.length)
    {
        const currentAlphabetCount = occurrences.get(input[j])
        if(currentAlphabetCount)
        {
            occurrences.set(input[j], currentAlphabetCount - 1)

            if(occurrences.get(input[j]) === 0)
                occurrencesCount--
        }

        const size = (j-i)+1
        if(size < (anagram.length))
            j++
        else if(size === (anagram.length))
        {
            if(occurrencesCount === 0)
                count++
            
            const newAlphabet = input[i] || input[j+1]
            const newAlphabetCount = occurrences.get(newAlphabet)
            if(Number.isInteger(newAlphabetCount))
            {
                occurrences.set(newAlphabet, newAlphabetCount+1) 
            }

            if(!occurrencesCount)
                occurrencesCount++
                
            j++
            i++

        }
    }

    return count;
}

// All anagram in string : https://leetcode.com/problems/find-all-anagrams-in-a-string/
// aabaabaa, aaba
function anagramsIndexes(input = "", anagram = "")
{
    if(!input || typeof input !== "string")
        return new Error("Please provide valid input");
    
    const occurrences = new Map();
   
    for(let k = 0; k < anagram.length; k++)
    {
        occurrences.set(anagram[k], (occurrences.get(anagram[k]) || 0)+1) 
    }
    const indexesArray = []
    let occurrencesCount = occurrences.size;

    let i = 0, j = 0;
    while(j < input.length)
    {
        const currentAlphabetCount = occurrences.get(input[j])
        if(Number.isInteger(currentAlphabetCount))
        {
            occurrences.set(input[j], currentAlphabetCount - 1)

            if(occurrences.get(input[j]) === 0)
                occurrencesCount--
        }

        const size = (j-i)+1
        if(size < (anagram.length))
            j++
        else if(size === (anagram.length))
        {
            if(occurrencesCount === 0)
                indexesArray.push(i)
            
            const newAlphabet = input[i]
            const newAlphabetCount = occurrences.get(newAlphabet)
            if(Number.isInteger(newAlphabetCount))
            {
                occurrences.set(newAlphabet, newAlphabetCount+1) 
                if(newAlphabetCount === 0)
                    occurrencesCount++
            }
                
            j++
            i++

        }
    }

    return indexesArray;
}