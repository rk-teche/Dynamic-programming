/**
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const array = [];
  
  for(let i = 0; i < arr.length; i++)
  {
    array.push(fn(arr[i], i))
  }

  return array;
};
// 36ms

var map = function(arr, fn) {
    const array = new Array(arr.length) // no impact on performance

    
    for(let i = 0; i < arr.length; i++)
    {
        array[i] = fn(arr[i], i)
    }
  
    return array;
  };