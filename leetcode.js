// https://leetcode.com/problems/minimum-absolute-difference/
// O(n*(n-1))
function minimumAbsoluteDiff(inputArray = [])
{
    let outputArray = [];
    if(!inputArray.length)
        return outputArray;

    let minDiff;    
    for(let i = 0; i < inputArray.length; i++)
    {
        for(let j = i+1; j < inputArray.length; j++)
        {
            const diff = Math.abs(inputArray[i] - inputArray[j]);
            let indexes = []
            if(inputArray[i] > inputArray[j])
                indexes = [inputArray[j],inputArray[i]];
            else    
                indexes = [inputArray[i],inputArray[j]];

            if((!minDiff && minDiff !== 0) || diff <= minDiff)
            {
                if(diff < minDiff)
                    outputArray = [indexes]
                else
                    outputArray.push(indexes);

                minDiff = diff;
            }
        }        
    }

    return outputArray.sort((a,b) => a[0] > b[0] ? 0 : -1);
}

var minimumAbsDifference = function(inputArray) {
    let outputArray = [];
    if(!inputArray.length)
        return outputArray;

    inputArray = inputArray.sort((a,b) => a > b ? 0 : -1);
    let minDiff;

    for(let i = 0; i < inputArray.length-1; i++)
    {
        const diff = Math.abs(inputArray[i+1] - inputArray[i]);
        let indexes = [inputArray[i],inputArray[i+1]];

        if((!minDiff && minDiff !== 0) || diff <= minDiff)
        {
            if(diff < minDiff)
                outputArray = [indexes];
            else
                outputArray.push(indexes);
            minDiff = diff;
        }
    }

    return outputArray;
};

// Two consecutive numbers
function twoConsecutiveNumbers(inputArray = [])
{
    for(let i = 0; i < inputArray.length; i++)
    {
        // 3,2     2,3
        if(((inputArray[i]+1) === inputArray[i+1]))
            return [inputArray[i], inputArray[i+1]]

        if(((inputArray[i]-1) === inputArray[i+1]))
            return [inputArray[i-1], inputArray[i]]
    }

    return [-1, -1]
}

// https://leetcode.com/problems/minimum-absolute-sum-difference/description/
// https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/
// https://leetcode.com/problems/minimum-time-to-complete-trips/description/
