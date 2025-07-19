// https://leetcode.com/problems/house-robber/

// https://leetcode.com/problems/house-robber-ii/
// TODO : stack overflow, need optimization
// [94,40,49,65,21,21,106,80,92,81,679,4,61,6,237,12,72,74,29,95,265,35,47,1,61,397,52,72,37,51,1,81,45,435,7,36,57,86,81,72]
function maxRobAmount(houseArray = [], houseNumber = 0, maxCash = 0)
{
    if (houseNumber > houseArray.length)
        return maxCash;

    const currentCash = maxRobAmountPerHouse(houseArray, houseNumber);

    maxCash = Math.max(currentCash, maxCash);

    return maxRobAmount(houseArray, houseNumber + 1, maxCash);
}

function maxRobAmountPerHouse(houseArray = [], houseNumber, totalValue = 0, i = 0)
{
    // base condition
    if (i >= houseArray.length)
        return totalValue;

    const idx = (houseNumber + i) % houseArray.length;
    const lastAdjusentHouse = houseNumber - 1 < 0 ? (houseArray.length - 1) : houseNumber - 1;
    const firstAdjusentHouse = houseNumber + 1 > (houseArray.length - 1) ? 0 : houseNumber + 1;

    if (idx !== lastAdjusentHouse && firstAdjusentHouse !== idx)
        return Math.max(
            maxRobAmountPerHouse(houseArray, houseNumber, totalValue + (houseArray[idx] ? houseArray[idx] : 0), i + 2),
            maxRobAmountPerHouse(houseArray, houseNumber, totalValue + (i === 0 ? houseArray[idx] : 0), i + 1)
        );
    else
    {
        return maxRobAmountPerHouse(houseArray, houseNumber, totalValue + (i === 0 ? houseArray[idx] : 0), i + 2);
    }
}