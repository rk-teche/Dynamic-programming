// https://leetcode.com/problems/reverse-string/description/


var reverseString = function(s) {
    let i = s.length - 1, j = 0;
    const halfLength = Math.floor(i/2);
    while(i > halfLength)
    {
        const charater = s[j];
        s[j] = s[i];
        s[i] = charater;

        i--;
        j++;
    }
    return s;
};


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(stack) {
  if(!stack.length)
        return stack;

    const middleEle = Math.ceil(stack.length / 2)
    return reverse(stack, middleEle);  
};

function reverse(stack, middle, i = 0)
{
    if(middle === i)
        return stack;

    const replaceIndex = stack.length - 1 - i
    if(i !== replaceIndex)
    {
        const temp = stack[i];
        stack[i] = stack[replaceIndex]
        stack[stack.length - 1 - i] = temp;
    }

    return reverse(stack, middle, i+1)

}

var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};


/**
 * https://leetcode.com/problems/reverse-string-ii/description/
 * If there are fewer than k characters left, reverse all of them. 
 * If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 * @param {string} s
 * @param {number} k
 * @return {string}
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(str, k) {
    const s = str.split("");
    let i = 0;

    while(i < s.length)
    {
        let left = i;
        let right = i + k - 1;

        const leftChars = s.length - left + 1;

        if(leftChars < k)
        {
            right = s.length;
        }

        while (left < right) 
        {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
        }

        i = left+right+k+1;

    }

     return s.join("");
};

