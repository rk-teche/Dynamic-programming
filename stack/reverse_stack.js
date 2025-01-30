
/**
 * Reverse a Stack with extra space
 * @param {*} stack 
 * @param {*} outputStack 
 * @returns 
 */
function reverseStack(stack = [], outputStack = [])
{
    if(!stack.length)
    {
        return stack;
    }

    outputStack.push(stack.pop())
    reverse(stack, outputStack)
    return outputStack;
}

/**
 * Reverse a Stack without extra space but increases the time complexity
 * @param {*} stack 
 * @param {*} outputStack 
 * @returns 
 */
function reverseStack(stack = [])
{
    if(!stack.length)
        return;

    const temp = stack.pop();
    reverseStack(stack)
    insertItemInStack(stack, temp) //3, 2, 1
}

function insertItemInStack(stack = [], ele)
{
    if(!stack.length)
    {
        stack.push(ele);
        return stack;
    }

    const temp = stack.pop();
    insertItemInStack(stack, ele);
    stack.push(temp);
    return;
}