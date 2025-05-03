/**
 * https://leetcode.com/problems/snail-traversal/
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(rowsCount*colsCount !== this.length)
        return [];
    
    const resultArray = Array.from({ length: rowsCount }, () => new Array(colsCount))
    let i = 0, j = 0, count = 0;

    while(j < colsCount)
    {
        while(i < rowsCount && i >= 0)
        {
            resultArray[i][j] = this[count];
            j % 2 ? i-- : i++;
            count++;
        }
        j++;
        j % 2 ? i-- : i++;
    }

    return resultArray;
}

// nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] // 20
// rowsCount = 5
// colsCount = 4
// Output: 
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]