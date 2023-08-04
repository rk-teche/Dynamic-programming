function connectRopes(ropeArray = [], k = 1, addition = 0, cost = 0)
{
    if(ropeArray.length === 1)
    {
        return cost
    }



    ropeArray = ropeArray.sort((a,b) => a > b ? 0 : -1)

    for(let i = 0; i < k; i++)
    {
        addition +=  ropeArray[i]
    }
    
    
    ropeArray.splice(0,2)

    return this.connectRopes([addition, ...ropeArray], addition, cost + addition)

}

function connectRopes(ropeArray = [], k = 1, cost = 0)
{
    if(ropeArray.length === 1)
    {
        return cost
    }

    let addition = 0;
    for(let i = 0; i < k; i++)
    {
        addition +=  ropeArray[i]
    }
    
    
    ropeArray.splice(0,k)

    return this.connectRopes([...ropeArray], k, cost + addition)

}