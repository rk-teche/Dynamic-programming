/**
 * Sort an array
 *  ? [2, 3, 1]
 */
function sort(input = [])
{
    if(input.length === 1)
        return;

    const temp = input.pop(); // 3,
    sort(input);
    insertItem(input, temp);

    console.log(input)
}

function insertItem(input = [], item)
{
    if(input.length === 0 || input[input.length - 1] <= item) // base condition
    {
        input.push(item)
        return;
    }

    const temp = input.pop()
    // induction
    insertItem(input, item) 
    input.push(temp)
    return
}
