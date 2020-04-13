function reverseString(str) {
  let strSplit = str.split(""); // turns string into an array 
    let revArr = strSplit.reverse(); //reverses the array
    let joinedArr = revArr.join(""); //turns array back into string. ['x', 'o', 'b'] = xob
  
    return joinedArr;
  }
  
  console.log(reverseString("the brown fox barrelled over the box"));