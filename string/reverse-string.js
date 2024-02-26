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