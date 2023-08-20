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

// https://leetcode.com/problems/kth-largest-element-in-an-array/
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

var findKthLargest = function(nums, k) {
    return nums.sort((a,b) => a > b ? 0 : -1)[nums.length - k]
};

var findKthLargest = function(nums, k) {
    let right = nums.length - 1;
    let left = 0;

    return findPivot(nums, left, right, nums.length - k);
};

const findPivot = (nums, left, right, k) => {
    const randomIndex = left + Math.floor((right - left) * Math.random());
    const pivotIndex = sortAndGetPivotIndex(nums, left, right, randomIndex);

    if (pivotIndex === k) {
        return nums[k];
    }

    if (pivotIndex < k) {
        return findPivot(nums, pivotIndex + 1, right, k);
    } else {
        return findPivot(nums, left, pivotIndex - 1, k);
    }
};

const sortAndGetPivotIndex = (nums, left, right, pivotIndex) => {
    const pivot = nums[pivotIndex];
    let current = left;

    swap(nums, pivotIndex, right);

    for (let i = left; i < right; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, current);
            current += 1;
        }
    }

    swap(nums, right, current);

    return current;
};

const swap = (nums, i, j) => {
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
}