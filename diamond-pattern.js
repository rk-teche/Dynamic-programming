function diamondPattern(rowsNumber = 0)
{
    if(!rowsNumber || !Number.isInteger(rowsNumber))
    {
        return new Error('Provide valid integer')
    }

    const maxStarCount = 1+2*(rowsNumber-1)

    const printStar = (i) => {
        const starCount = 1+2*(i)
        let stars = "*"

        for(let j = 1; j < starCount; j++)
        {
            stars = j === (starCount-1) ? stars.concat(stars) : stars.concat(" ")
        }
            
        // const stars = Array(starCount).fill("*").join("")

        const whiteSpace = (maxStarCount - starCount)/2
        const finalLog = Array(whiteSpace).fill(" ").join("")+stars
        console.log(finalLog)
    }

    for(let i = 0; i < rowsNumber; i++)
    {
        printStar(i)
    }

    for(let i = rowsNumber-2; i >= 0; i--)
    {
        printStar(i)
    }

}