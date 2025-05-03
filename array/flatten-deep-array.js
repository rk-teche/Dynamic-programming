/**
 * https://leetcode.com/problems/flatten-deeply-nested-array/description/
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   if (!n) return arr;

   return arr.reduce((acc, ele) => {

       if (Array.isArray(ele))
           acc.push(...flat(ele, n - 1))
       else 
           acc.push(ele);

       return acc;
   }, [])

};