function largestOfFour(arr) {
    let largestNums = []; //empty array where largest numbers will be pushed
  for (let i = 0; i < arr.length; i++) { //for loop to iterate through nested array
    largestNums.push(Math.max(...arr[i])); //math.max goes into array and returns largest number. 
    // arr[i] accesses each sub array in array and push pushes it to the array.
  }  
    
    return largestNums;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);