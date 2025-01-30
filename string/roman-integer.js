/**
 * https://leetcode.com/problems/roman-to-integer/description/
 * @param {String} input 
 * @returns 
 */

function romanToInt(input = "")
{
    const romanSymbols =
    {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let output = 0;
    for(let i = 0; i < input.length; i++)
    {
        const current = romanSymbols[input[i]], next = romanSymbols[input[i+1]];
        if(!next || current >= next)
        {
            output += current
        }
        else
        {
            output += next - current
            i++
        }
    }

    return output;
}

/**
 * https://leetcode.com/problems/integer-to-roman/
 * @param {*} num 
 * @returns 
 */
// 3499 -> 9/10
function intToRoman(num = 0, output = "") // 2499
{
    if(!num) return "";
    const numbers = [1,5,10,50,100,500,1000];

    const romanSymbols =
    {
        1: I,
        5: V,
        10: X,
        50: L,
        100: C,
        500: D,
        1000: M
    }

    let times = 0, symbolNumber = "";
    for(let i = 0; i < numbers.length; i++)
    {
        if(i === (numbers.length - 1) || numbers[i] > num) // 499
        {
            symbolNumber = numbers[i]
            times = Math.floor(num/numbers[i])
            break;
        }
    }

    for(let i = 0; i < times; i++)
    {
        output += romanSymbols[symbolNumber]
    }
    
    intToRoman(num - symbolNumber*2, output)


}
