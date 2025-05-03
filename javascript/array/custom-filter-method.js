/**
 * https://leetcode.com/problems/filter-elements-from-array/
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const resultArray = [];

    for(let i = 0; i < arr.length; i++)
        fn(arr[i], i) && resultArray.push(arr[i]);
    
    return resultArray
};

Array.prototype.filter1 = function(callback){
    const array = [];
    
    for(let i = 0; i < this.length; i++)
    {
        callback(this[i], i) && array.push(this[i])
    }

    return array
    
}

[1,2].filter((ele, i) => i == 0)