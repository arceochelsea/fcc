// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let newArray = arr2.slice() 
    newArray.splice(n, 0, ...arr1)
    return newArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  //empty slice() makes a copy of an array
  //splice(n is the index where arr1 will go, 0 is the number of elements to be removed since we are only INSERTING, and then '...' to remove and arr1 to add arr1 elements without [] to arr2!