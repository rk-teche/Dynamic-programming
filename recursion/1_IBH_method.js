
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
// My Method
 function print(n)
 {
    if(n <= 0) // base condition
        return;

    console.log(n) //induction 
    return print(n-1) // hypothesis
 }

// Aditya Method
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
    count++
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

    return count
}
