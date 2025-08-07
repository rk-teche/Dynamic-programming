// https://leetcode.com/problems/minimum-size-subarray-sum/description/

// O(n)
function minSubArrayLen(target, nums) {
    let n = nums.length;
    let minLength = Number.MAX_SAFE_INTEGER; // Use MAX_SAFE_INTEGER as the initial value
    let left = 0;
    let currentSum = 0;

    for (let right = 0; right < n; right++) {
        currentSum += nums[right]; // Expand the window by moving right

        // Try to shrink the window from the left if the current sum is greater or equal to target
        while (currentSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currentSum -= nums[left];
            left++; // Shrink the window by moving left
        }
    }

    // Check if minLength was updated, return it or return 0 if no such subarray exists
    return minLength !== Number.MAX_SAFE_INTEGER ? minLength : 0;
}


// O(nlogn)
function minSubArrayLen(target, nums) {
    let n = nums.length;
    let prefixSums = new Array(n + 1);
    prefixSums[0] = 0; // Initialize the first element to 0 for easier calculations

    // Compute prefix sums
    for (let i = 0; i < n; i++) {
        prefixSums[i + 1] = prefixSums[i] + nums[i];
    }

    let minLength = Number.MAX_SAFE_INTEGER;

    // Helper function for binary search
    function binarySearch(left, val) {
        let low = left, high = n, mid;
        while (low < high) {
            mid = Math.floor((low + high) / 2);
            if (prefixSums[mid] < val) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    // Find the minimal length subarray for each element using binary search
    for (let i = 0; i < n; i++) {
        const targetSum = target + prefixSums[i];
        const bound = binarySearch(i + 1, targetSum);
        if (bound <= n) {
            minLength = Math.min(minLength, bound - i);
        }
    }

    return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
}

