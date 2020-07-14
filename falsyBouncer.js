// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let newArray = arr.filter(arr => Boolean(arr));
    console.log(newArray)
    return newArray;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

