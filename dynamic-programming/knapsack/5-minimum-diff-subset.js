// https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/
// work fine on positive integer
function minimumSubSetDiffDP(valueArray = [])
{
	let sum = 0;
	for (let i = 0; i < valueArray.length; i++)
	{
		sum += valueArray[i];
	}

	const rows = valueArray.length + 1;
	const columns = Math.abs(Math.ceil(sum / 2)) + 1;

	const dp = new Array(rows);
	for (let i = 0; i < rows; i++)
	{
		dp[i] = new Array(columns).fill();
	}


	for (let i = 0; i < rows; i++)
	{
		for (let j = 0; j < columns; j++)
		{
			if (i === 0)
				dp[i][j] = false;

			if (j === 0)
				dp[i][j] = true;
		}
	}

	return minimumSubSetDiff(valueArray, sum, dp);

}

function minimumSubSetDiff(valueArray = [], sum = 0, dp = [[]])
{
	const absoluteSum = Math.abs(Math.ceil(sum / 2));

	for (let i = 1; i <= valueArray.length; i++)
	{
		for (let j = 1; j <= absoluteSum; j++)
		{
			if (valueArray[i - 1] > j)
			{
				dp[i][j] = dp[i - 1][j];
			}
			else
			{
				dp[i][j] = dp[i - 1][j - valueArray[i - 1]] || dp[i - 1][j];
			}
		}
	}

	console.log("dp", dp);
	const lastRow = dp[valueArray.length];
	for (let i = lastRow.length; i >= 0; i--)
	{
		if (lastRow[i])
		{
			if (sum !== 0)
				return sum - (Math.sign(Math.ceil(sum / 2)) * 2 * i);
			else
				return sum - (-2 * i);
		}

	}

	return -1;
}