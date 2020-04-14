function findLongestWordLength(str) {
    let newWords = str.split(' ') //this will split the string into array of words separated by spaces! ['the' 'quick] vs ['t' 'h' 'e']
    let wordLength = newWords.map(word => word.length) //map() creates an array with the length of each word
      return Math.max(...wordLengths) //math.max goes into wordLength array and returns word with the most words.  
    // "..." is a spread operator, in this case it is spreading an array (wordLengths) out into a function's arguments. 
    }
    
    findLongestWordLength("The quick brown fox jumped over the lazy dog");