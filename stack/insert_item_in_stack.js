function sortStack(stack)
{
    if(stack.size = 1)
        return;

    const temp = stack.pop();
    sortStack(temp);
    insertItemInStack(stack, temp);
}

function insertItemInStack(stack, val)
{
    if(stack.size === 0 || stack.peek <= val)
    {
        stack.push(val);
        return;
    }

    const temp = stack.pop();
    insertItemInStack(stack, val);
    stack.push(temp);
}

