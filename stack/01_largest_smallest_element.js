/**
 * Next largest Element AKA Nearest Greater to Right
 */


/**
 * Nearest Largest : left to right
 * @param {*} array 
 * @returns 
 */
function nearestLargest(array = [])
{

    const stack = [];
    const resultArray = [];  

    for (let i = array.length; i > 0; i--) 
    {
        function findLargest(stack = [], resultArray = []) 
        {
            const idx = i -1
            if (stack.length === 0) 
            {
                resultArray.push(-1)
                stack.push(array[idx])
                return resultArray
            }

            const currentElement = stack.pop()
            if (currentElement > array[idx]) 
            {
                resultArray.push(currentElement)
                stack.push(currentElement)
                stack.push(array[idx])
                return resultArray
            }

            else 
            {
                return findLargest(stack, resultArray)
            }
        }

        findLargest(stack, resultArray)
    }
    return resultArray.reverse();

}


/**
 * Nearest Largest : left to right
 */
class NearestLargest 
{
    #array = [];
    #stack = [];
    #resultArray = [];

    constructor(array = [])
    {
        this.#array = array;
        this.#stack = [];
        this.#resultArray = []

        for (let i = this.#array.length; i > 0; i--) 
        {
            this.#findLargest(i)
        }
    }

    #findLargest(i) 
    {
        const idx = i - 1
        if (this.#stack.length === 0) 
        {
            this.#resultArray.push(-1)
            this.#stack.push(this.#array[idx])
            return this.#resultArray
        }
        const currentElement = this.#stack.pop()
        if (currentElement > this.#array[idx]) 
        {
            this.#resultArray.push(currentElement)
            this.#stack.push(currentElement)
            this.#stack.push(this.#array[idx])
            return this.#resultArray
        }
        else 
        {
            return this.#findLargest(i)
        }
    }

    get result()
    {
        return this.#resultArray.reverse()
    }
}



/**
 * Nearest Largest : right to left
 */
class LargestRightToLeft extends NearestLargest
{
    constructor(array = [])
    {
        super(array.reverse())
    }
}

/**
 * Nearest Smallest : left to right
 */
class SmallestRightToLeft extends NearestLargest
{

    #findLargest(i) 
    {
        const idx = i - 1
        // if (this.#stack.length === 0) 
        // {
        //     this.#resultArray.push(-1)
        //     this.#stack.push(this.#array[idx])
        //     return this.#resultArray
        // }
        // const currentElement = this.#stack.pop()
        // if (currentElement > th is.#array[idx]) 
        // {
        //     this.#resultArray.push(currentElement)
        //     this.#stack.push(currentElement)
        //     this.#stack.push(this.#array[idx])
        //     return this.#resultArray
        // }
        // else 
        // {
        //     return this.#findLargest(i)
        // }
    }

}

