function calcualte(a,b)
{
    
    const initialArray = Array(100).fill(Array(100).fill(null))

    if(initialArray[a][b] === null)
        initialArray[a][b] = a + b

    console.log(initialArray)  
    return initialArray[a][b]
}

function add(a,b)
{
    return calcualte(a,b)
}