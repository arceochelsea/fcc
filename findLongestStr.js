// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let newArray = str.split(' ');
    //console.log(newArray);
    newArray.sort(function (a,b){
        return b.length - a.length;
    });
    return newArray[0].length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));