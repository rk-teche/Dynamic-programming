// https://leetcode.com/problems/reverse-words-in-a-string/description/

// my solution
var reverseWords = function(s) {
    if(!s) return;
      let i = s.length - 1, j = s.length -1;
      let reverseString = ""
    while(i >= 0)
    {
        if(s[i] && s[i].trim())
        {
            i--
        }
        else
        {
            // new word
            const word = s.substring(i+1, j+1).trim();
            reverseString = addString(reverseString, word) 
            i--;
            j = i;
        }
    }
    const word = s.substring(i+1, j+1).trim();
    reverseString = addString(reverseString, word)
    return reverseString
  };
  
  
  function addString(reverseString, word)
  {
      if(word)
          reverseString = `${reverseString ? `${reverseString} ` : reverseString}${word}`;
  
      return reverseString;    
  }


  var reverseWords = function(s) {
    // Splitting the original string into array
    let wordArray = s.split(' ')
    let resultingArray = []

    // For loop that goes from the end to beginning
    for (let i = wordArray.length - 1; i >= 0; i--) {
        // if the value is not a space
        if(wordArray[i] !== '') {
            resultingArray.push(wordArray[i])
        } else {
            continue;
        }
    }

    // join and trim the array into a string.
    return resultingArray.join(' ').trim()
};


var reverseWords = function(s) {
    return s.trim().split(" ").reverse().filter(word => word.length != 0).join(" ")
};

// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/