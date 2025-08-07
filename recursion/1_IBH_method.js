
/**
 * Base condition = Smallest valida Input or Largest invalid Input
 * Hypothesis = define signature of function
 * Induction =  this step will define the order of the output
 * 
 * Problem Type
 * 
     1.	Print 1 to n (n to 1)
     2.	Sort an array or Sort an stack
     3.	Delete middle element in a stack
     4.	Remove duplicates from a string
     5.	Count the # of occurrences
 */

// Q: Print number 1 to n
// My Method -> this print n to 1
 function print(n)
 {
    if(n <= 0) // base condition
        return;

    console.log(n) //induction 
    return print(n-1) // hypothesis
 }

// Aditya Method - this print 1 to n
 function print1(n)
 {
    if(n <= 0) // base condition
        return;

    print1(n-1) // hypothesis
    console.log(n) // induction
 }

/**
 * Factorial Question
 * !3 = 3*2*1
 */
function factorial(n)
{
    if(n <= 1) // base condition
        return 1;

    return n * factorial(n-1) //hypothesis
}

var fib = function(n) {
    const result = [0, 1];

    for(let i = 0; i < n-2; i++)
    {
        result.push(result[result.length - 2] + result[result.length - 1])
    }

    return result
};

/**
 * https://leetcode.com/problems/fibonacci-number/description/
 * @param {*} n 
 */
var fib = function(n, memo = {}) {
    if(n === 0)
        return 0;

    if(n === 1)
        return 1;

    if(!memo[n])
        memo[n] = fib(n-1, memo) + fib(n-2, memo);
    
    return memo[n];
};

/**
 * https://leetcode.com/problems/sort-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums = []) {
    if(nums?.length === 1)
        return nums;

    const currentElement = nums.pop();
    const sortedArray = sortArray(nums);

    return insertItem(sortedArray, currentElement);
};

var insertItem = function(arr = [], element)
{
    if(!arr.length || element >= arr[arr.length - 1])
    {
        arr.push(element);
        return arr;
    }

    const currElement = arr.pop();
    insertItem(arr, element).push(currElement);
    return arr;
}


/**
 * https://leetcode.com/problems/climbing-stairs/description/
 */



/**
 * https://leetcode.com/problems/k-th-symbol-in-grammar/
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) 
{
    if(n === 1 &&  k === 1)
        return 0

    const mid = Math.pow(2, n-1)/2;
    return k > mid ? (!kthGrammar(n-1, k - mid) ? 1 : 0) : kthGrammar(n-1, k);
    
};

/**
 * Tower of Hanoi
 */ 
function towerOfHanoi(n, source, destination, auxiliary, count = 0) {
    count++;
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    // Move n-1 disks from source to auxiliary, using destination as helper
    towerOfHanoi(n - 1, source, auxiliary, destination, count);

    // Move the nth disk from source to destination
    console.log(`Move disk ${n} from ${source} to ${destination}`);

    // Move n-1 disks from auxiliary to destination, using source as helper
    towerOfHanoi(n - 1, auxiliary, destination, source, count);

    return count;
}
