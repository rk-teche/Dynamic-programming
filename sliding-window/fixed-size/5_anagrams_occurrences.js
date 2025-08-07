
/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if(s.length !== t.length) return false;

    const occurance = new Map();
    for(let i = 0; i < t.length; i++)
    {
        const count = occurance.has(t[i]) ? occurance.get(t[i]) + 1 : 1
        occurance.set(t[i], count);
    }

    for(let i = 0; i < s.length; i++)
    {
        if(!occurance.has(s[i]))
            return false;

        if(occurance.get(s[i]) === 0)
            return false;

        const count = occurance.get(s[i]) - 1;
        occurance.set(s[i], count);
    }
    let isAnagram = true;
    
    occurance.forEach((value) => {
        if(value !== 0)
            isAnagram = false;
    })

    return isAnagram
    
};

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

/**
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * aabaabaa, aaba
 */
var findAnagrams = function(s, p)
{
    let i = 0, j = 0, occurance = new Map(), resultIndex = [];
    
    for(let k = 0; k < p.length; k++)
    {
        const count = occurance.has(p[k]) ? occurance.get(p[k]) + 1 : 1
        occurance.set(p[k], count);
    }
    let occuranceSize = occurance.size;

    while(j < s.length)
    {
        const currentElement = s[j];
        if(occurance.has(s[j]))
        {
            occurance.set(s[j], occurance.get(s[j]) - 1) // reduce count if exist
        }

        // reduce occurance size;
        if(occurance.get(s[j]) === 0)
            occuranceSize--

        const currentWindow = (j - i) + 1;

        if(currentWindow < p.length)
        {
            j++
        }
        else if(currentWindow === p.length)
        {
            // find result
            if(occuranceSize === 0)
                resultIndex.push(i);

            if(occurance.has(input[i]))
            {
                const count = occurance.get(input[i]);
                occurance.set(input[i], count + 1);
                if(count === 0)
                    occuranceSize++
            }

            i++
            j++
        }
    }

};

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


/**
 * https://leetcode.com/problems/count-anagrams/description/
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function(s) {
    
};

/**
 * https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    
};

/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();

  for(let str of strs)
  {
    const newStr = str.split("").sort().join("");

    if(!map.has(newStr))
    {
        map.set(newStr, [])
    }
    map.get(newStr).push(str)
  }

  // Convert the map values to an array of arrays
  return Array.from(map.values());
}