/**
 * https://leetcode.com/problems/generate-fibonacci-sequence/
 * @return {Generator<number>}
 */
var fibGenerator = function*(n) {
    while(n > 0)
    {
        yield 0;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

function fibonacciRecursive(n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

for (let i = 0; i < 3; i++) {
    console.log(fibonacciRecursive(i));
}

var fibGenerator = function*(n = 0) {
    const prev = 0, next = 1;

    while(true)
    {
        prev = next;
        next = initial+ next;
    }

        
};


