class Stack {
  #stack = [];

  push(item) {
    return this.#stack.push(item);
  }

  pop() {
    return this.#stack.pop(); // ✅ LIFO
  }

  peek() {
    return this.#stack[this.#stack.length - 1]; // ✅ Last item
  }

  get size() {
    return this.#stack.length;
  }

  isEmpty() {
    return this.#stack.length === 0;
  }

  clear() {
    this.#stack = [];
    return this.#stack;
  }

  print() {
    return [...this.#stack]; // Optionally return a copy
  }
}


// minmum stack with extra space
class Stack
{
    #stack = []
    #minStack = []

    get minValue()
    {
        return this.#minStack[this.#minStack.length - 1]
    }

    get size()
    {
        return this.#stack.length
    }

    push(value)
    {
        this.#stack.push(value)

        if(this.#minStack.length === 0 || value <= this.minValue)
        {
            this.#minStack.push(value)
        }

        return value
    }

    pop()
    {
        const poppedValue = this.#stack.pop()
        if(poppedValue === this.minValue)
            this.#minStack.pop()

        return poppedValue
    }

}

const s = new Stack()

// minmum stack with O(1) complexity
class Stack
{
    #stack = []
    #minElement = 0

    get minValue()
    {
        return this.#minElement
    }

    #element(element, value)
    {
        return 2*element - value
    }

    get size()
    {
        return this.#stack.length
    }

    get top()
    {
        const top = this.#stack[this.#stack.length - 1]
        if(top < this.minValue) // top can never be less than minimum value, so we will return minimum value
            return this.minValue
        
        return top     
    }

    push(value)
    {  
        if(value < this.minValue)
        {
            this.#stack.push(this.#element(value, this.minValue))
            this.#minElement = value
        }
        else 
        {
            this.#stack.push(value) 
        }

        return this.#stack
    }

    pop()
    {
        const poppedValue = this.#stack.pop()
        
        if(poppedValue < this.minValue)
            this.#minElement = this.#element(this.minValue, poppedValue)

        return this.#stack
    }

}