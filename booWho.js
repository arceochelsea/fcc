// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
    if (typeof(bool) !== 'boolean') {
        //console.log(typeof(bool));
        return false;
    } else {
        return true;
    }
  }
  console.log(booWho(true));