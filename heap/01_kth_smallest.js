const itemArray = [7,10,4,3,20,15]

function findKthElement(itemArray = [], k = 0, heap = [])
{
    for(let i = 0; i <= (itemArray.length - 1); i++)
    {
        heap.push(itemArray[i])
        heap.sort((a,b) => a > b ? 0 : -1)

        if(heap.length > k)
        {
            heap.pop()
        }

    }

    return heap[heap.length - 1]

}


function findKLargestElements(itemArray = [], k = 0, heap = [])
{
    for(let i = 0; i <= (itemArray.length - 1); i++)
    {
        heap.push(itemArray[i])
        heap.sort((a,b) => a > b ? -1 : 0)

        if(heap.length > k)
        {
            heap.pop()
        }

    }

    return heap

}