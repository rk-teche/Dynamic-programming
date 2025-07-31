/**
 * https://leetcode.com/problems/subsets/
 * @param {*} input 
 * @param {*} output 
 * @param {*} subsets 
 * @returns 
 */
function findSubSet(input = [], output = [], subsets = [])
{
  if(!input.length)
  {
    subsets.push([...output])
    return subsets;
  }

  const ele = input[0];
  input = input.slice(1);
  findSubSet(input, [...output], subsets)
  return findSubSet(input, [...output, ele], subsets) 
}


/**
 * Time Complexity ->  O(2^n)
 * Space Complexity -> O(2^n * n)
 * @param {*} nums 
 * @param {*} i 
 * @param {*} subSets 
 * @param {*} result 
 * @returns 
 */
var subsets = function(nums, i = 0, subSets = [], result = []) {
    if(i >= nums.length)
    {
        result.push([...subSets]) // O(K)
        return result;
    }

    // include
    const currentVal = nums[i];
    subSets.push(currentVal) // O(1)
    subsets(nums, i+1, subSets, result)
    
    // exclude
    subSets.pop(); // O(1)
    subsets(nums, i+1, subSets, result)

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
 * https://leetcode.com/problems/subsets-ii/
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