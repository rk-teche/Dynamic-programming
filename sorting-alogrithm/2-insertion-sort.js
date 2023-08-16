/**
 * ! Complexity O(n^2)
 * @param {*} nums 
 * @returns 
 */
function insertionSort(nums = [])
{
    const sortedArray = nums.length > 0 ? [nums[0]] : []
    let i = sortedArray.length;

    while(i < nums.length)
    {
        const insertNum = nums[sortedArray.length];
        for(let j = sortedArray.length; j >=  0; j--)
        {
            const currentNum = sortedArray[j-1];
            
            if(currentNum > insertNum)
                sortedArray.splice(j, 1, currentNum)
            else
            {
                sortedArray.splice(j, 1, insertNum)
                break;
            } 
        }
        i++
    } 

    return sortedArray

}

// It uses almost same time complexity but space complexity is less
function insertionSort(nums = [])
{
    for(let i = 0; i < nums.length; i++)
    {
        let numberToInsert = nums[i]
        let j = i - 1

        while(j >= 0 && nums[j] > numberToInsert)
        {
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = numberToInsert
    }

    return nums;
}

insertionSort(-6, 20)