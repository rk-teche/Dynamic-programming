/**
 * https://leetcode.com/problems/array-reduce-transformation/
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let acc = init;

    for(let i = 0; i < nums.length; i++)
    {   
        acc = fn(acc, curr)
    }

    return acc
    
};

Array.prototype.reduce1 = function(callBack, initialValue) {
    const arr = this;
    let acc = initialValue;

    for(let i = 0; i < arr.length; i++)
    {
        acc = callBack(acc, arr[i], i, arr)
    }
    return acc;
}

Array.prototype.reduce2 = function(callBack, initialValue) {
    const arr = this;
    let acc, startIndex;

    if(arguments.length >= 2)
    {
        acc = initialValue;
        startIndex = 0
    }
    else
    {
        acc = arr[0]
        startIndex = 1;
    }

    for(let i = startIndex; i < arr.length; i++)
    {
        acc = callBack(acc, arr[i], i, arr)
    }
    return acc;
}

[1,2,3,4,5,6].reduce1((acc, ele) => acc + ele, 0) // 21
