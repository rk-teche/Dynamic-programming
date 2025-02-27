/**
 * Delete middle element in stack
 * @param {*} stack 
 * @returns 
 */
function deleteStack(stack)
{
    if(!stack.length) return; 

    const k = Math.floor(stack.length/2) + 1;
    // const halfLength = stack.length/2;
    // const k = Number.isInteger(halfLength) ? halfLength : halfLength + 1
    return deleteMiddleStackElement(stack, stack.length - k);
}

/**
 * ! Using Extra memory `i`
 * @param {*} stack 
 * @param {*} size 
 * @param {*} i 
 * @returns 
 */
function deleteMiddleStackElement(stack, size, i = 0) 
{
    // base condition
    if(i === size)
    {
        stack.pop();
        return stack;
    }
        

    if(i <= size)
    {
        // induction
        const ele = stack.pop();
        deleteMiddleStackElement(stack, size, i+1).push(ele)
    }

    return stack;
}

/**
 * Optimiz space complexity without using `i`
 * @param {*} stack 
 * @param {*} size 
 * @returns 
 */
function deleteMiddleStackElement(stack, size) 
{
    // base condition
    if(!size)
    {
        stack.pop();
        return stack;
    }

    // hypothesis
    const ele = stack.pop();

    // induction
    deleteMiddleStackElement(stack, size-1).push(ele)

    return stack;
}

