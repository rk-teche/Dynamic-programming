/**
 * Problem 1: https://leetcode.com/problems/subsets/description/
 */

/**
 * @param {*} nums 
 * @param {*} i 
 * @param {*} subSets 
 * @param {*} result 
 * @returns 
 */
var subsets = function(nums, i = 0, subSets = [], result = []) {
    if(i >= nums.length)
    {
        result.push([...subSets])
        return result;
    }

    // include
    const currentVal = nums[i];
    subSets.push(currentVal)
    subsets(nums, i+1, subSets, result)
    
    // exclude
    subSets.pop()
    subsets(nums, i+1, subSets, result)

    return result;

};

var subsets = function(nums, i = 0, subSets = [], result = []) {
    if(i === nums.length)
    {
        result.push(subSets);
        return result;
    }

    const currentElement = nums[i];
    
    // chosen:
    subsets(nums, i+1, [...subSets, currentElement], result);

    // not chosen:
    subsets(nums, i+1, subSets, result);

    return result;

};

/**
 * iterative bitmask version
 * @param {*} nums 
 * @returns 
 */
var subsets = function(nums) {
    const result = [];
    const total = 1 << nums.length; // 2^n

    for (let mask = 0; mask < total; mask++) {
        const subset = [];
        for (let i = 0; i < nums.length; i++) {
            if ((mask >> i) & 1) {
                subset.push(nums[i]);
            }
        }
        result.push(subset);
    }

    return result;
};

/**
 * Problem 2: https://leetcode.com/problems/subsets-ii/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums, i = 0, subSets = [], result = []) {
    if (i === 0) nums.sort((a, b) => a - b);  // O(nlogn)

    if(i >= nums.length)
    {
        result.push([...subSets]) // O(k)
        return result;
    }

    // include
    const currentVal = nums[i];

        subSets.push(currentVal);
        subsetsWithDup(nums, i+1, subSets, result); // O(n)
    
        // exclude
        subSets.pop();


        while (i + 1 < nums.length && nums[i] === nums[i + 1]) { // O(K)
            i++;
        }
        
        subsetsWithDup(nums, i+1, subSets, result); // O(n)


    return result;

};

/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
};

// var letterCasePermutation = function(s, i = 0, permutation = "", result = []) {
//     if(i >= s.length)
//         return result;

//     if(i === 0)
//         permutation = s;

//     const currentLetter = permutation[i];
    
//     // Number is not an integer
//     if(!Number.isInteger(parseInt(currentLetter)))
//     {
       
//         // choice 1 -> don't make it
//         result.push(permutation);
        
//         // choice 2 -> Make it uppercase
//         permutation = `${permutation.slice(0,i)}${currentLetter.toUpperCase()}${permutation.slice(i+1,s.length)}`;
//         result.push(permutation);
        
//     }

//     return letterCasePermutation(s, i+1, permutation, result)
// };

/**
 * Problem 3: https://leetcode.com/problems/letter-case-permutation/
 * Time Complexity - O(2ᵏ * n)
 * Space Complexity - O(2ᵏ * n)
 * Input: s = "a1b2"
 * Output: ["a1b2","a1B2","A1b2","A1B2"]
 */
var letterCasePermutation = function(s, i = 0, permutation = "", result = []) {
    if(i > s.length)
        return result;

    if(i === s.length)
    {
        result.push(permutation);
        return result;
    }

    if(i === 0)
        permutation = s;

    const currentLetter = permutation[i];
    if(!Number.isInteger(parseInt(currentLetter)))
    {
        // Number is not an integer

        // choice 1 -> don't make it
        permutation = `${permutation.slice(0,i)}${currentLetter.toLowerCase()}${permutation.slice(i+1,s.length)}`; // O(n)
        letterCasePermutation(s, i+1, permutation, result)

        // choice 2 -> Make it uppercase
        permutation = `${permutation.slice(0,i)}${currentLetter.toUpperCase()}${permutation.slice(i+1,s.length)}`; // O(n)
        letterCasePermutation(s, i+1, permutation, result)

    }
    else
    {
        letterCasePermutation(s, i+1, permutation, result)
    }

    return result;
};

/**
 * It increases the performance but complexity remains the same
 * Comparison with above solution -
 * Feature: (My Solution vs Optimized Version)
 *      Time Complexity: O(2ᵏ × n) vs O(2ᵏ × n)
 *      String creation per call Heavy: (O(n) slice() calls) vs Minimal (in-place mutation)
 *      Space from temp strings: Many intermediate strings vs Only one mutable array
 *      Performance (real-world): Slower due to slicing vs Faster due to fewer allocations
 * 
 * 
 */
var letterCasePermutation = function(s) {
    const result = [];
    const chars = s.split('');

    function backtrack(i) {
        if (i === chars.length) {
            result.push(chars.join(''));
            return;
        }

        if (/[a-zA-Z]/.test(chars[i])) {
            // Lowercase
            chars[i] = chars[i].toLowerCase();
            backtrack(i + 1);

            // Uppercase
            chars[i] = chars[i].toUpperCase();
            backtrack(i + 1);
        } else {
            backtrack(i + 1);
        }
    }

    backtrack(0);
    return result;
};

/**
 * Problem 4: https://leetcode.com/problems/find-array-given-subset-sums/description/
 */

/**
 * https://leetcode.com/problems/generalized-abbreviation/description/
 * Problem 5: Generalized Abbreviation
 */

/**
 * https://leetcode.com/problems/brace-expansion-ii/description/
 * https://leetcode.com/problems/brace-expansion/description/
 * Problem 6: brace-expansion/
 */

/**
 * Problem 7: https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/description/
 */