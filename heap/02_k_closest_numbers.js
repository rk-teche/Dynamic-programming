// Q. Find difference between below two examples in terms of time and space complexity

function kClosestNumbers(itemArray = [], k = 3, x = 7)
{
    let closestItems = []
    for(let i = 0; i < itemArray.length; i++)
    {
        const diff = Math.abs(itemArray[i] - x)

        const closeObject = {difference: diff, number: itemArray[i]};

        closestItems.push(closeObject)

        closestItems.sort((a,b) => {
            if(a.difference > b.difference)
                return 1
            else if(a.difference < b.difference)
                return -1
            else
                return a.number - b.number
        })

        if(closestItems.length > k)
        {
            closestItems.pop()
        }

    }

    return closestItems.map(item => item.number).sort((a,b) => a > b ? 0 : -1)

}

function findKClosestElements(arr, target, k) {
    // Calculate the absolute differences and store them in a new array with their original index
    const differences = arr.map((num, index) => ({ num, diff: Math.abs(num - target), index }));
  
    // Sort the array based on the absolute differences
    differences.sort((a, b) => a.diff - b.diff || a.index - b.index);
  
    // Return the first K elements from the sorted array
    return differences.slice(0, k).map(({ num }) => num);
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5];
  const target = 3.5;
  const k = 2;
  const closestElements = findKClosestElements(arr, target, k);
  console.log(closestElements); // Output: [3, 4]
  