// Q. How to find recursion in problem
// Q. Tower of Hanoi
// Q. Balanced Parantheses simplified version

function sortArray(numberArray = []) // [7,1] some issue
{
    if(numberArray.length === 1)
        return numberArray;

    const number = numberArray.pop();
    return insertItem(sortArray(numberArray), number)
}

function insertItem(itemArray = [], number)
{
    if(itemArray.length === 0 || itemArray[itemArray.length - 1] <= number)   
    {
        itemArray.push(number)
        return itemArray
    }
    const lastItem = itemArray.pop()
    insertItem(itemArray, number).push(lastItem)
    return itemArray
}


function sortStack(numberArray = []) // [7,1] some issue
{
    if(numberArray.length === 1)
        return numberArray;

    const number = numberArray.pop();
    return insertItem(sortStack(numberArray), number)
}

function deleteMiddleStackElement(stack = [])
{
    if(stack.length === 0)
    {
        return stack;
    }

    const middleIdx = Math.floor(stack.length/2) + 1
    return deleteElement(stack, middleIdx)
}

function deleteElement(stack = [], middleIdx = 0)
{
    if(middleIdx === 1)
    {
        stack.pop()
        return stack
    }

    const value = stack.pop()
    deleteElement(stack, middleIdx - 1).push(value)
    return stack;
}

/**
 * 
 * Complexity - O(n/2)
 * @param {*} stack 
 * @param {*} i 
 * @returns 
 */
function reverseStack(stack = [], i = 0)
{
    const middleIdx = Math.floor(stack.length/2)
    if(middleIdx === i) // base condition
    {
        return stack;
    }

    const element = stack[i] // hypothesis

    // induction
    stack[i] = stack[stack.length - (i+1)]
    stack[stack.length - (i+1)] = element
    return reverseStack(stack, i+1)
}

/**
 * Complexity - O(n)
 * @param {*} stack 
 * @returns 
 */
function reverse(stack = [])
{
    if(stack.length === 1) // base condition
        return stack;

    const number = stack.pop(); // hypothesis 
    return [number, ...reverse(stack)] //induction

}


function findKthSymbol(n = 1, k = 1)
{
    if(n === 1 || k === 1)
        return 0
    
    const mid = Math.pow(2, n-1)/2;

    if(k >= mid)
    {
        const number = findKthSymbol(n-1, k-mid) == 0 ? 1 : 0
        return number
    }

    return findKthSymbol(n-1, k)
}

function towerOfHonei(sourceArray = [], helperArray = [], destinationArray = [], steps = 0) // [3,2,1]
{
    if(sourceArray.length === 1 || destinationArray.length === 0)
    {
        console.log(`first plate transfer ${sourceArray[0]}`)
        destinationArray.push(sourceArray[0]);
        return destinationArray;
    }

    steps++
    const plate1 = sourceArray.pop();    
    towerOfHonei(sourceArray, destinationArray, helperArray)
    
    console.log(`move plate to helper Array ${plate1}`)
    // towerOfHonei(sourceArray, helperArray, destinationArray).push(helperArray.pop());
    const desitnation = towerOfHonei(sourceArray, helperArray, destinationArray)
    const plate2 = helperArray.pop()
    console.log(`move plate from helper to destination Array ${plate2}`)
    desitnation.push(plate2)
    return destinationArray;
}

/**
 * SubString, SubSequence, Subset difference
 * 
 * SubString -> Any middle part of the string but continuous
 * SubSequence -> Take any part of the string not necessilary continuous but in same order, either left tot right to right to left
 * SubSet -> neither order nor continuation matter, any format of string
 * 
 * All SubSequences are subsets
 * 
 */

/**
 * Subset varitions -> Print Powerset, Print Subset
 * Q. Print in lexicographical order?
 * 
 * 
 * @param {*} input 
 * @param {*} output 
 * @param {*} result 
 * @returns 
 */
function subset(input = "", output = "", result = new Set())
{
    if(input === "")
    {
        result.add(output)
        return result;
    }

    const newInput = input.substring(1)
    const newOutput = output+input[0]
    subset(newInput, output, result)
    return subset(newInput, newOutput, result)
}

function perMutation(input = '', output = '')
{
    if(!output)
    {
        return spacesMutation(input.substring(1), input[0])
    }
    return spacesMutation(input, output)
}

/**
 * 
 * @param {*} input 
 * @param {*} output : output length -> 2 Power(input.length - 1) 
 * @param {*} result 
 * @returns 
 */
function spacesMutation(input = "", output = "", result = new Set()) // A, BC
{
    if(input === "")
    {
        result.add(output)
        return result;
    }

    const newInput = input.substring(1)
    const newOutput1 = `${output}${input[0]}`
    const newOutput2 = `${output}_${input[0]}`
    
    spacesMutation(newInput, newOutput1, result)
    return spacesMutation(newInput, newOutput2, result)
}


function caseChangeMutation(input = "", output = "", result = new Set()) // abc
{
    if(input === "")
    {
        result.add(output)
        return result;
    }

    const newInput = input.substring(1)
    const newOutput1 = `${output}${input[0]}`
    const newOutput2 = `${output}${input[0].toUpperCase()}`
    
    caseChangeMutation(newInput, newOutput1, result)
    return caseChangeMutation(newInput, newOutput2, result)
}

function letterCaseChangeMutation(input = "", output = "", result = new Set()) // a1B1
{
    if(input === "")
    {
        result.add(output)
        return result;
    }

    const smallInput = input[0]
    const newInput = input.substring(1)
    const newOutput1 = `${output}${smallInput.toLowerCase()}`
    const newOutput2 = `${output}${smallInput.toUpperCase()}`
    
    if(!Number(smallInput))
    {
        letterCaseChangeMutation(newInput, newOutput1, result)
        return letterCaseChangeMutation(newInput, newOutput2, result)
    }

    return letterCaseChangeMutation(newInput, newOutput1, result)
}


/**
 * Input / output method : extended (input and output datatype may not be same)
 */

// try to reduce condition as per `onesBinaryNumber` simplified version 
function balancedParentheses(open = 3, close = 3, output = '', result = new Set())
{
    if(open === 0 && close === 0)
    {
        result.add(output)
        return result
    }

    let choice;
    let newOutput;
    if(open === close)
    {
        choice = "("
        newOutput = `${output}${choice}`
        return balancedParentheses(open-1, close, newOutput, result)
    }
    else if(open === 0)
    {
        choice = ")"
        newOutput = `${output}${choice}`
        return balancedParentheses(open, close-1, newOutput, result)
    } 
    else
    {
        balancedParentheses(open-1, close, `${output}(`, result)
        return balancedParentheses(open, close-1, `${output})`, result)
    }

    // optimized version of above lines
    !(open === 0) ? balancedParentheses(open-1, close, `${output}(`, result) : result
    return !(open === close) ? balancedParentheses(open, close-1, `${output})`, result) : result
}

function onesBinaryNumber(number = 3, zeroCount = 0, oneCount = 0, output = '', result = new Set())
{
    if(zeroCount+oneCount === number)
    {
        result.add(output)
        return result
    }

    if(zeroCount > oneCount)
    {
        const newOutput = `${output}1`
        return onesBinaryNumber(number, zeroCount, oneCount+1, newOutput, result)
    }
    else if(oneCount === number)
    {
        const newOutput = `${output}0`
        return onesBinaryNumber(number, zeroCount+1, oneCount, newOutput, result)
    }
    else
    {
        onesBinaryNumber(number, zeroCount+1, oneCount, `${output}0`, result)
        return onesBinaryNumber(number, zeroCount, oneCount+1, `${output}1`, result)
    }
}

// Simplified version
function onesBinaryNumber(number = 3, zeroCount = 0, oneCount = 0, output = '', result = new Set())
{
    if(number === 0)
    {
        result.add(output)
        return result
    }

    if(oneCount > zeroCount)
        onesBinaryNumber(number-1, zeroCount+1, oneCount, `${output}0`, result)
    return onesBinaryNumber(number-1, zeroCount, oneCount+1, `${output}1`, result)
}

/**
 * Josephus Problem
 */
function gameOfDeath(people = [1], choice = 1) // [1,2,3,4,5]  2
{
    if(people.length === 1)
        return people[0]

    const deathIdx = choice > people.length ? choice % people.length : choice
    people = [...people.slice(deathIdx, people.length), ...people.slice(0, deathIdx-1)]
    
    return gameOfDeath(people, choice)
}

// Indexing solution
const people = Array.from({ length: 40 }, (_, index) => index + 1)

function gameOfDeath(people = [1], choice = 1, index = 0) // [1,2,3,4,5]  2
{
    if(people.length === 1)
        return people[0]

    const sword = (choice + index) % people.length;
    const deathIdx = sword > 0 ? sword - 1 : people.length - 1
    people.splice(deathIdx, 1)
    return gameOfDeath(people, choice, deathIdx)
}
