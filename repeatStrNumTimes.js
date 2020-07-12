// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let repeatedStr = '';
    for (let i = 0; i < num; i++) {
        repeatedStr = repeatedStr + str;
    }
    return repeatedStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  