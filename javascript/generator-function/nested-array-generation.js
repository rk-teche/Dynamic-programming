
/**
 * https://leetcode.com/problems/nested-array-generator/
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function*(inputArray) {

    const flatArray = (arr) => {
    const resultArray = [];

    arr.forEach(value => {
        if(Array.isArray(value))
        {
            resultArray.push(...flatArray(value))
        }
        else
        {
            resultArray.push(value)
        }
    })

    return resultArray
}
    const flattenArray = flatArray(inputArray);
    let i = 0;

    while(i < flattenArray.length)
    {
        yield flattenArray[i];
        i++
    } 
};

var inorderTraversal = function*(arr) {
    arr = arr.flat(Infinity);
    let i = 0;
    n = arr.length;
    while ( i < n) {
        yield arr[i++]
    }
    
};
/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */