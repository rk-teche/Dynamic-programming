function largestSum(nums, k) // [1,3,4,7,2,12,8,19,31], 3
{
    let i = -1, j = 0, maxSum = 0;
    while(i < nums.length)
    {
        let currentSum = maxSum; 
        while(j < i+k+1)
        {
            currentSum += nums[j] || 0;
            j++
        }
        currentSum -= (nums[i] || 0);
        j = i+k+1;
        i++;
        maxSum = Math.max(maxSum, currentSum);

    }

    return maxSum
}